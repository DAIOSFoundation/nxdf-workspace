
import {
    Commitment,
    ConfirmOptions,
    Connection,
    PublicKey,
    sendAndConfirmTransaction,
    Signer,
    Transaction,
    SystemProgram,
    SYSVAR_RENT_PUBKEY,
    AccountMeta,
    TransactionInstruction
} from '@solana/web3.js';
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } from './constants';
import { Account } from './accounts';
import {
    TokenAccountNotFoundError,
    TokenInvalidAccountError,
    TokenInvalidAccountOwnerError,
    TokenInvalidOwnerError,
    TokenInvalidAccountSizeError,
    TokenInvalidMintError,
    TokenOwnerOffCurveError
} from './error';
// import {Buffer} from 'buffer';
global.Buffer = global.Buffer || require('buffer').Buffer;
global.BigInt = require('big-integer');
import { toBigIntBE, toBigIntLE, toBufferBE, toBufferLE } from 'bigint-buffer';
import { Layout, struct, u32, u8, blob  } from '@solana/buffer-layout';
// import { bool, publicKey, u64 } from '@solana/buffer-layout-utils';




export interface EncodeDecode<T> {
    decode(buffer: Buffer, offset?: number): T;
    encode(src: T, buffer: Buffer, offset?: number): number;
}

export const encodeDecode = <T>(layout: Layout<T>): EncodeDecode<T> => {
    const decode = layout.decode.bind(layout);
    const encode = layout.encode.bind(layout);
    return { decode, encode };
};

export const bigInt =
    (length: number) =>
    (property?: string): Layout<bigint> => {
        const layout = blob(length, property);
        const { encode, decode } = encodeDecode(layout);

        const bigIntLayout = layout as Layout<unknown> as Layout<bigint>;

        bigIntLayout.decode = (buffer: Buffer, offset: number) => {
            const src = decode(buffer, offset);
            return toBigIntLE(Buffer.from(src));
        };

        bigIntLayout.encode = (bigInt: bigint, buffer: Buffer, offset: number) => {
            const src = toBufferLE(bigInt, length);
            return encode(src, buffer, offset);
        };

        return bigIntLayout;
    };

export const u64 = bigInt(8);

export const publicKey = (property?: string): Layout<PublicKey> => {
    const layout = blob(32, property);
    const { encode, decode } = encodeDecode(layout);

    const publicKeyLayout = layout as Layout<unknown> as Layout<PublicKey>;

    publicKeyLayout.decode = (buffer: Buffer, offset: number) => {
        const src = decode(buffer, offset);
        return new PublicKey(src);
    };

    publicKeyLayout.encode = (publicKey: PublicKey, buffer: Buffer, offset: number) => {
        const src = publicKey.toBuffer();
        return encode(src, buffer, offset);
    };

    return publicKeyLayout;
};

export const bool = (property?: string): Layout<boolean> => {
    const layout = u8(property);
    const { encode, decode } = encodeDecode(layout);

    const boolLayout = layout as Layout<unknown> as Layout<boolean>;

    boolLayout.decode = (buffer: Buffer, offset: number) => {
        const src = decode(buffer, offset);
        return !!src;
    };

    boolLayout.encode = (bool: boolean, buffer: Buffer, offset: number) => {
        const src = Number(bool);
        return encode(src, buffer, offset);
    };

    return boolLayout;
};


// import { bool, publicKey, u64 } from './types';
// export declare const publicKey: (property?: string | undefined) => Layout<PublicKey>;
// export declare const u64: (property?: string | undefined) => Layout<bigint>;
// export declare const u32: (property?: string | undefined) => UInt;
// export declare const u8: (property?: string | undefined) => UInt;
// export declare const struct: <T>(fields: Layout<T[keyof T]>[], property?: string | undefined, decodePrefixes?: boolean | undefined) => Structure<T>;


export declare class UInt extends Layout<number> {
    constructor(span: number, property?: string);
    /** @override */
    decode(b: Uint8Array, offset?: number): number;
    /** @override */
    encode(src: number, b: Uint8Array, offset?: number): number;
}

export interface LayoutObject {
    [key: string]: any;
}

export declare class Structure<T> extends Layout<T> {
    fields: Layout<T[keyof T]>[];
    decodePrefixes: boolean;
    constructor(fields: Layout<T[keyof T]>[], property?: string, decodePrefixes?: boolean);
    /** @override */
    getSpan(b: Uint8Array, offset?: number): number;
    /** @override */
    decode(b: Uint8Array, offset?: number): T;
    /** Implement {@link Layout#encode|encode} for {@link Structure}.
     *
     * If `src` is missing a property for a member with a defined {@link
     * Layout#property|property} the corresponding region of the buffer is
     * left unmodified. */
    encode(src: T, b: Uint8Array, offset?: number): number;
    /** @override */
    fromArray(values: any[]): LayoutObject;
    /**
     * Get access to the layout of a given property.
     *
     * @param {String} property - the structure member of interest.
     *
     * @return {Layout} - the layout associated with `property`, or
     * undefined if there is no such property.
     */
    layoutFor(property: string): Layout<LayoutObject> | undefined;
    /**
     * Get the offset of a structure member.
     *
     * @param {String} property - the structure member of interest.
     *
     * @return {Number} - the offset in bytes to the start of `property`
     * within the structure, or undefined if `property` is not a field
     * within the structure.  If the property is a member but follows a
     * variable-length structure member a negative number will be
     * returned.
     */
    offsetOf(property: string): number | undefined;
}

export async function getAssociatedTokenAddress(
    mint: PublicKey,
    owner: PublicKey,
    allowOwnerOffCurve = false,
    programId = TOKEN_PROGRAM_ID,
    associatedTokenProgramId = ASSOCIATED_TOKEN_PROGRAM_ID
) {
    if (!allowOwnerOffCurve && !PublicKey.isOnCurve(owner.toBuffer())) throw new TokenOwnerOffCurveError();

    const [address] = await PublicKey.findProgramAddress(
        [owner.toBuffer(), programId.toBuffer(), mint.toBuffer()],
        associatedTokenProgramId
    );

    return address;
}


/** Token account state as stored by the program */
export enum AccountState {
    Uninitialized = 0,
    Initialized = 1,
    Frozen = 2,
}


export interface RawAccount {
    mint: PublicKey;
    owner: PublicKey;
    amount: bigint;
    delegateOption: 1 | 0;
    delegate: PublicKey;
    state: AccountState;
    isNativeOption: 1 | 0;
    isNative: bigint;
    delegatedAmount: bigint;
    closeAuthorityOption: 1 | 0;
    closeAuthority: PublicKey;
}

/*
export const AccountLayout = struct<RawAccount>([
    publicKey('mint'),
    publicKey('owner'),
    u64('amount'),
    u32('delegateOption'),
    publicKey('delegate'),
    u8('state'),
    u32('isNativeOption'),
    u64('isNative'),
    u64('delegatedAmount'),
    u32('closeAuthorityOption'),
    publicKey('closeAuthority'),
]);
*/

export const AccountLayout = struct<RawAccount>([
    publicKey('mint'),
    publicKey('owner'),
    u64('amount'),
    u32('delegateOption'),
    publicKey('delegate'),
    u8('state'),
    u32('isNativeOption'),
    u64('isNative'),
    u64('delegatedAmount'),
    u32('closeAuthorityOption'),
    publicKey('closeAuthority'),
]);


/** Base class for errors */
export abstract class TokenError extends Error {
    constructor(message?: string) {
        super(message);
    }
}


export type AccountInfo<T> = {
    /** `true` if this account's data contains a loaded program */
    executable: boolean;
    /** Identifier of the program that owns the account */
    owner: PublicKey;
    /** Number of lamports assigned to the account */
    lamports: number;
    /** Optional data assigned to the account */
    data: T;
    /** Optional rent epoch info for account */
    rentEpoch?: number;
  };

  export interface Multisig {
    /** Address of the multisig */
    address: PublicKey;
    /** Number of signers required */
    m: number;
    /** Number of possible signers, corresponds to the number of `signers` that are valid */
    n: number;
    /** Is this mint initialized */
    isInitialized: boolean;
    /** Full set of signers, of which `n` are valid */
    signer1: PublicKey;
    signer2: PublicKey;
    signer3: PublicKey;
    signer4: PublicKey;
    signer5: PublicKey;
    signer6: PublicKey;
    signer7: PublicKey;
    signer8: PublicKey;
    signer9: PublicKey;
    signer10: PublicKey;
    signer11: PublicKey;
}

export const ACCOUNT_SIZE = AccountLayout.span;

export type RawMultisig = Omit<Multisig, 'address'>;

export const MultisigLayout = struct<RawMultisig>([
    u8('m'),
    u8('n'),
    bool('isInitialized'),
    publicKey('signer1'),
    publicKey('signer2'),
    publicKey('signer3'),
    publicKey('signer4'),
    publicKey('signer5'),
    publicKey('signer6'),
    publicKey('signer7'),
    publicKey('signer8'),
    publicKey('signer9'),
    publicKey('signer10'),
    publicKey('signer11'),
]);

export const MULTISIG_SIZE = MultisigLayout.span;

export enum AccountType {
    Uninitialized,
    Mint,
    Account,
}
export const ACCOUNT_TYPE_SIZE = 1;

function unpackAccount(info: AccountInfo<Buffer> | null, address: PublicKey, programId: PublicKey) {
    if (!info) throw new TokenAccountNotFoundError();
    if (!info.owner.equals(programId)) throw new TokenInvalidAccountOwnerError();
    if (info.data.length < ACCOUNT_SIZE) throw new TokenInvalidAccountSizeError();

    const rawAccount = AccountLayout.decode(info.data.slice(0, ACCOUNT_SIZE));
    let tlvData = Buffer.alloc(0);
    if (info.data.length > ACCOUNT_SIZE) {
        if (info.data.length === MULTISIG_SIZE) throw new TokenInvalidAccountSizeError();
        if (info.data[ACCOUNT_SIZE] != AccountType.Account) throw new TokenInvalidAccountError();
        tlvData = info.data.slice(ACCOUNT_SIZE + ACCOUNT_TYPE_SIZE);
    }

    return {
        address,
        mint: rawAccount.mint,
        owner: rawAccount.owner,
        amount: rawAccount.amount,
        delegate: rawAccount.delegateOption ? rawAccount.delegate : null,
        delegatedAmount: rawAccount.delegatedAmount,
        isInitialized: rawAccount.state !== AccountState.Uninitialized,
        isFrozen: rawAccount.state === AccountState.Frozen,
        isNative: !!rawAccount.isNativeOption,
        rentExemptReserve: rawAccount.isNativeOption ? rawAccount.isNative : null,
        closeAuthority: rawAccount.closeAuthorityOption ? rawAccount.closeAuthority : null,
        tlvData,
    };
}


export async function getAccount(
    connection: Connection,
    address: PublicKey,
    commitment?: Commitment,
    programId = TOKEN_PROGRAM_ID
): Promise<Account> {
    const info = await connection.getAccountInfo(address, commitment);
    return unpackAccount(info, address, programId);
}



export function createAssociatedTokenAccountInstruction(
    payer: PublicKey,
    associatedToken: PublicKey,
    owner: PublicKey,
    mint: PublicKey,
    programId = TOKEN_PROGRAM_ID,
    associatedTokenProgramId = ASSOCIATED_TOKEN_PROGRAM_ID
): TransactionInstruction {
    const keys = [
        { pubkey: payer, isSigner: true, isWritable: true },
        { pubkey: associatedToken, isSigner: false, isWritable: true },
        { pubkey: owner, isSigner: false, isWritable: false },
        { pubkey: mint, isSigner: false, isWritable: false },
        { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
        { pubkey: programId, isSigner: false, isWritable: false },
        { pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
    ];

    return new TransactionInstruction({
        keys,
        programId: associatedTokenProgramId,
        data: Buffer.alloc(0),
    });
}


export async function getOrCreateAssociatedTokenAccount(
    connection: Connection,
    payer: Signer,
    mint: PublicKey,
    owner: PublicKey,
    allowOwnerOffCurve = false,
    commitment?: Commitment,
    confirmOptions?: ConfirmOptions,
    programId = TOKEN_PROGRAM_ID,
    associatedTokenProgramId = ASSOCIATED_TOKEN_PROGRAM_ID
) {

    
    const associatedToken = await getAssociatedTokenAddress(
        mint,
        owner,
        allowOwnerOffCurve,
        programId,
        associatedTokenProgramId
    );

    
    // This is the optimal logic, considering TX fee, client-side computation, RPC roundtrips and guaranteed idempotent.
    // Sadly we can't do this atomically.
    let account = null;
    try {
        account = await getAccount(connection, associatedToken, commitment, programId);
    } catch (error: unknown) {

        // TokenAccountNotFoundError can be possible if the associated address has already received some lamports,
        // becoming a system account. Assuming program derived addressing is safe, this is the only case for the
        // TokenInvalidAccountOwnerError in this code path.
        if (error instanceof TokenAccountNotFoundError || error instanceof TokenInvalidAccountOwnerError) {
            // As this isn't atomic, it's possible others can create associated accounts meanwhile.
            try {
                const transaction = new Transaction().add(
                    createAssociatedTokenAccountInstruction(
                        payer.publicKey,
                        associatedToken,
                        owner,
                        mint,
                        programId,
                        associatedTokenProgramId
                    )
                );

                await sendAndConfirmTransaction(connection, transaction, [payer], confirmOptions);
            } catch (error: unknown) {
                // Ignore all errors; for now there is no API-compatible way to selectively ignore the expected
                // instruction error if the associated account exists already.
            }

            // Now this should always succeed
            account = await getAccount(connection, associatedToken, commitment, programId);
        } else {
            throw error;
        }

    }

    
    if (!account.mint.equals(mint)) throw new TokenInvalidMintError();
    if (!account.owner.equals(owner)) throw new TokenInvalidOwnerError();

    return account;

    
}

export type TransactionSignature = string;

export function getSigners(signerOrMultisig: Signer | PublicKey, multiSigners: Signer[]): [PublicKey, Signer[]] {
    return signerOrMultisig instanceof PublicKey
        ? [signerOrMultisig, multiSigners]
        : [signerOrMultisig.publicKey, [signerOrMultisig]];
}

export function addSigners(keys: AccountMeta[], ownerOrAuthority: PublicKey, multiSigners: Signer[]): AccountMeta[] {
    if (multiSigners.length) {
        keys.push({ pubkey: ownerOrAuthority, isSigner: false, isWritable: false });
        for (const signer of multiSigners) {
            keys.push({ pubkey: signer.publicKey, isSigner: true, isWritable: false });
        }
    } else {
        keys.push({ pubkey: ownerOrAuthority, isSigner: true, isWritable: false });
    }
    return keys;
}

export enum TokenInstruction {
    InitializeMint = 0,
    InitializeAccount = 1,
    InitializeMultisig = 2,
    Transfer = 3,
    Approve = 4,
    Revoke = 5,
    SetAuthority = 6,
    MintTo = 7,
    Burn = 8,
    CloseAccount = 9,
    FreezeAccount = 10,
    ThawAccount = 11,
    TransferChecked = 12,
    ApproveChecked = 13,
    MintToChecked = 14,
    BurnChecked = 15,
    InitializeAccount2 = 16,
    SyncNative = 17,
    InitializeAccount3 = 18,
    InitializeMultisig2 = 19,
    InitializeMint2 = 20,
    GetAccountDataSize = 21,
    InitializeImmutableOwner = 22,
    AmountToUiAmount = 23,
    UiAmountToAmount = 24,
    InitializeMintCloseAuthority = 25,
    TransferFeeExtension = 26,
    ConfidentialTransferExtension = 27,
    DefaultAccountStateExtension = 28,
    Reallocate = 29,
    MemoTransferExtension = 30,
    CreateNativeMint = 31,
    InitializeNonTransferableMint = 32,
    InterestBearingMintExtension = 33,
}

export interface TransferInstructionData {
    instruction: TokenInstruction.Transfer;
    amount: bigint;
}

export const transferInstructionData = struct<TransferInstructionData>([u8('instruction'), u64('amount')]);

export function createTransferInstruction(
    source: PublicKey,
    destination: PublicKey,
    owner: PublicKey,
    amount: number | bigint,
    multiSigners: Signer[] = [],
    programId = TOKEN_PROGRAM_ID
): TransactionInstruction {
    const keys = addSigners(
        [
            { pubkey: source, isSigner: false, isWritable: true },
            { pubkey: destination, isSigner: false, isWritable: true },
        ],
        owner,
        multiSigners
    );

    const data = Buffer.alloc(transferInstructionData.span);
    transferInstructionData.encode(
        {
            instruction: TokenInstruction.Transfer,
            amount: BigInt(amount),
        },
        data
    );

    return new TransactionInstruction({ keys, programId, data });
}


export async function transfer(
    connection: Connection,
    payer: Signer,
    source: PublicKey,
    destination: PublicKey,
    owner: Signer | PublicKey,
    amount: number | bigint,
    multiSigners: Signer[] = [],
    confirmOptions?: ConfirmOptions,
    programId = TOKEN_PROGRAM_ID
): Promise<TransactionSignature> {
    const [ownerPublicKey, signers] = getSigners(owner, multiSigners);

    const transaction = new Transaction().add(
        createTransferInstruction(source, destination, ownerPublicKey, amount, multiSigners, programId)
    );

    return await sendAndConfirmTransaction(connection, transaction, [payer, ...signers], confirmOptions);
}
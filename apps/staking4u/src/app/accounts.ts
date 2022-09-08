import { Commitment, Connection, PublicKey, AccountInfo } from '@solana/web3.js';
export interface Account {
    /** Address of the account */
    address: PublicKey;
    /** Mint associated with the account */
    mint: PublicKey;
    /** Owner of the account */
    owner: PublicKey;
    /** Number of tokens the account holds */
    amount: bigint;
    /** Authority that can transfer tokens from the account */
    delegate: PublicKey | null;
    /** Number of tokens the delegate is authorized to transfer */
    delegatedAmount: bigint;
    /** True if the account is initialized */
    isInitialized: boolean;
    /** True if the account is frozen */
    isFrozen: boolean;
    /** True if the account is a native token account */
    isNative: boolean;
    /**
     * If the account is a native token account, it must be rent-exempt. The rent-exempt reserve is the amount that must
     * remain in the balance until the account is closed.
     */
    rentExemptReserve: bigint | null;
    /** Optional authority to close the account */
    closeAuthority: PublicKey | null;
    tlvData: Buffer;
}
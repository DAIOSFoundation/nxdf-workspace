import { TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { TransactionInstruction, ConfirmOptions, ParsedAccountData, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { sendAndConfirmRawTransaction, SystemProgram, Connection, Transaction, PublicKey, clusterApiUrl, Keypair, sendAndConfirmTransaction } from "@solana/web3.js";

import * as web3 from '@solana/web3.js';
import * as splToken from '@solana/spl-token';
import { Buffer } from 'buffer';

import { 
  programs 
} from '@metaplex/js'

const { metadata: { Metadata } } = programs;

global.Buffer = Buffer;

const TOKEN_METADATA_PROGRAM_ID = new PublicKey(
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
)

const getMetadata = async (
  mint: web3.PublicKey
    ): Promise<web3.PublicKey> => {
  return (
    await web3.PublicKey.findProgramAddress(
      [
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
      ],
      TOKEN_METADATA_PROGRAM_ID
    )
  )[0];
};

const createAssociatedTokenAccountInstruction = (
  associatedTokenAddress: web3.PublicKey,
  payer: web3.PublicKey,
  walletAddress: web3.PublicKey,
  splTokenMintAddress: web3.PublicKey
    ) => {
  const keys = [
    { pubkey: payer, isSigner: true, isWritable: true },
    { pubkey: associatedTokenAddress, isSigner: false, isWritable: true },
    { pubkey: walletAddress, isSigner: false, isWritable: false },
    { pubkey: splTokenMintAddress, isSigner: false, isWritable: false },
    {
      pubkey: web3.SystemProgram.programId,
      isSigner: false,
      isWritable: false,
    },
    { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    {
      pubkey: web3.SYSVAR_RENT_PUBKEY,
      isSigner: false,
      isWritable: false,
    },
  ];
  return new web3.TransactionInstruction({
    keys,
    programId: ASSOCIATED_TOKEN_PROGRAM_ID,
    data: Buffer.from([]),
  });
}

async function sendTransaction(
  wallet: any,
  conn: any,
  transaction : Transaction,
  signers : Keypair[],
) {
  try{
    transaction.feePayer = wallet.publicKey
    transaction.recentBlockhash = (await conn.getRecentBlockhash('max')).blockhash;
    transaction.setSigners(wallet.publicKey,...signers.map(s => s.publicKey));
    if(signers.length != 0)
      transaction.partialSign(...signers)
    const signedTransaction = await wallet.signTransaction(transaction);
    let hash = await conn.sendRawTransaction(await signedTransaction.serialize());
    await conn.confirmTransaction(hash);
  } catch(err) {
    console.log(err)
  }
}

const getTokenWallet = async (
  wallet: web3.PublicKey,
  mint: web3.PublicKey
    ) => {
  return (
    await web3.PublicKey.findProgramAddress(
      [wallet.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), mint.toBuffer()],
      ASSOCIATED_TOKEN_PROGRAM_ID
    )
  )[0];
};

export const getNFTMetaData = async(
    mint: web3.PublicKey,
    wallet: web3.PublicKey
  ) => {
  const metadata = await getMetadata(mint);
  const sourceNftAccount = await getTokenWallet( 
      wallet, 
      mint);
  const info = await connection.getAccountInfo(sourceNftAccount);

  const accountInfo: any = await connection.getParsedAccountInfo(metadata);

  let metadataData : any = new Metadata(wallet.toBase58(), accountInfo.value);

  const { data }: any = await axios.get(metadataData.data.data.uri);

  return {
      name: data.name,
      symbol: data.symbol,
      image: data.image,
      edition: data.edition,
      description: data.description
  }
};
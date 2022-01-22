import { WalletNotConnectedError } from '@solana/wallet-adapter-base'
import { Transaction, PublicKey, LAMPORTS_PER_SOL, Connection, TransactionInstruction } from "@solana/web3.js";
import React, { useCallback } from 'react'
import { Token, TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { getOrCreateAssociatedTokenAccount } from './getOrCreateAssociatedTokenAccount'
import { createTransferInstruction } from './createTransferInstructions'

export async function SendSPLTransaction(
  connection: Connection, publicKey: PublicKey, signTransaction: any,
  mintAddress: string, toAddresses: string[], amounts: number[], decimals: number
) {

  if (!toAddresses || !amounts) return
  console.log('Processing transaction...');

  try {
    if (!publicKey || !signTransaction) throw new WalletNotConnectedError();

    const mintPublicKey = new PublicKey(mintAddress);
    const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      publicKey,
      mintPublicKey,
      publicKey,
      signTransaction
    );

    let instructions: TransactionInstruction[] = [];
    for(let i = 0;i < toAddresses.length;i ++) {
      const dest = toAddresses[i];
      const destPublicKey = new PublicKey(dest);

      const associatedDestinationTokenAddr = await Token.getAssociatedTokenAddress(
        ASSOCIATED_TOKEN_PROGRAM_ID,
        TOKEN_PROGRAM_ID,
        mintPublicKey,
        destPublicKey
      );

      const receiverAccount = await connection.getAccountInfo(associatedDestinationTokenAddr);

      if (receiverAccount === null) {
        instructions.push(
          Token.createAssociatedTokenAccountInstruction(
            ASSOCIATED_TOKEN_PROGRAM_ID,
            TOKEN_PROGRAM_ID,
            mintPublicKey,
            associatedDestinationTokenAddr,
            destPublicKey,
            publicKey
          )
        )
      }
      instructions.push(
        Token.createTransferInstruction(
          TOKEN_PROGRAM_ID,
          fromTokenAccount.address,
          associatedDestinationTokenAddr,
          publicKey,
          [],
          amounts[i] * decimals
        )
      );
    }

    const transaction = new Transaction().add(...instructions);

    const blockHash = await connection.getRecentBlockhash()
    transaction.feePayer = await publicKey
    transaction.recentBlockhash = await blockHash.blockhash
    const signed = await signTransaction(transaction)

    const result = await connection.sendRawTransaction(signed.serialize());

    console.log(publicKey, result);
    console.log('Transaction sent');
  }
  catch (error: any) {
    console.log(`Transaction failed: ${error.message}`);
  }
}
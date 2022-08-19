import RNFetchBlob from 'rn-fetch-blob';
import { TOKEN_PROGRAM_ID, createTransferInstruction, Token } from "@solana/spl-token";
import * as spl from "@solana/spl-token";
import { LAMPORTS_PER_SOL, SystemProgram, sendAndConfirmTransaction, Connection, Keypair, PublicKey, Transaction, clusterApiUrl } from "@solana/web3.js";

import ROUTES from '../../routes';
import {
  headers,
  objToQueryString,
  isResponseSuccess,
} from '../../utils/request';
import {ERC20_TOKENS} from '../../utils/constants';

export const postETHTransaction = async (param) => {
  const method = 'POST';
  const url = ROUTES.WALLET.ETH_TX;

  const result = await RNFetchBlob.config({
    trusty: true,
  }).fetch(method, url, headers(''), JSON.stringify(param));

  console.log('postETHTransaction result ===> ', result.data);
  return JSON.parse(result.data);
};

export const postERC20Transaction = async (body) => {
  const method = 'POST';
  const url = ROUTES.WALLET.ERC20_TX;

  const result = await RNFetchBlob.config({
    trusty: true,
  }).fetch(method, url, headers(''), JSON.stringify(body));

  console.log('postERC20Transaction result ===> ', result.data);
  return JSON.parse(result.data);
};

export const postSOLTransaction = async (body) => {

  let result;
  try {
    const connection = new Connection(clusterApiUrl(body.networkMode));
    const walletKeypair = Keypair.fromSecretKey(Uint8Array.from(body.secretKey));
    
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: walletKeypair.publicKey,
        toPubkey: new PublicKey(body.toAddress),
        lamports: body.withdrawalAmount * LAMPORTS_PER_SOL,
      })
    );

    // Sign transaction, broadcast, and confirm
    const signature = await sendAndConfirmTransaction(
      connection,
      transaction,
      [walletKeypair]
    );
    console.log('================SOL================', signature);
    result = {responseStatus: 200};
  }
  catch (err) {
    console.log('!!!!!!!!!!!!!!!!!!ERROR!!!!!!!!!!!!!!!!!!!!!!');
    result = {responseStatus: 404};
  }  
  return result;
};

export const postSOLTokenTransaction = async (body) => {
  let result;

  try {
    const connection = new Connection(clusterApiUrl(body.networkMode));
    const walletKeypair = Keypair.fromSecretKey(Uint8Array.from(body.secretKey));
    const mint = new PublicKey(body.mintAddress);
    const mintToken = new spl.Token(
      connection,
      mint,
      TOKEN_PROGRAM_ID,
      walletKeypair
    );
    const fromTokenAccount = await mintToken.getOrCreateAssociatedAccountInfo(
      walletKeypair.publicKey
    );
    const toTokenAccount = await mintToken.getOrCreateAssociatedAccountInfo(
      new PublicKey(body.toAddress)
    ); 
    const transaction = new Transaction().add(
        spl.Token.createTransferInstruction(
            TOKEN_PROGRAM_ID,
            fromTokenAccount.address,
            toTokenAccount.address,
            walletKeypair.publicKey,
            [],
            parseFloat(body.withdrawalAmount) * (10 ** body.decimals),
        )
    )    
    
    const signature = await sendAndConfirmTransaction(
        connection,
        transaction,
        [walletKeypair]
    );

    console.log('===============SPL=================', signature);
    result = {responseStatus: 200};
  }
  catch (err) {
    console.log('!!!!!!!!!!!!!!!!!!ERROR!!!!!!!!!!!!!!!!!!!!!!', err);
    result = {responseStatus: 404};
  }  
  return result;
};

export const getETHGasPrice = async (networkMode) => {
  const method = 'GET';
  const url = ROUTES.WALLET.GET_ETH_GAS;
  const result = await RNFetchBlob.config({
    trusty: true,
  }).fetch(method, `${url}?${objToQueryString(networkMode)}`, headers(''));

  console.log('getETHGasPrice result ===> ', result.data);
  return JSON.parse(result.data);
};

export const getSOLTokenList = async (body) => {
  const method = 'GET';
  const url = ROUTES.WALLET.GET_SOL_TOKEN;
  const result = await RNFetchBlob.config({
    trusty: true,
  }).fetch(method, `${url}?${objToQueryString(body)}`, headers(''));

  console.log('getSOLTokenList result ===> ', result.data);
  return JSON.parse(result.data);
};

// ERC20 Tokens 잔액 호출
export const getERC20Balances = async ({networkMode, publicKey}) => {
  const method = 'GET';
  const requests = ERC20_TOKENS.map((token) =>
    RNFetchBlob.config({
      trusty: true,
    }).fetch(
      method,
      ROUTES.WALLET.BALANCE.ERC20(token, networkMode, publicKey),
      headers(''),
    ),
  );

  try {
    const results = await Promise.all(requests);
    const parsedResults = results.map((result) => JSON.parse(result.data));
    console.log('getERC20Balances result ===> ', parsedResults);

    if (isResponseSuccess(parsedResults)) {
      return {
        data: parsedResults,
        responseMessage: 'S0000',
        responseStatus: 200,
      };
    }
  } catch (error) {
    console.log(error);
  }
};

// Solana Tokens 잔액 호출
export const getSolTokenBalances = async ({networkMode, publicKey}) => {
  const method = 'GET';
  const url = ROUTES.WALLET.BALANCE.SOL_TOKEN(networkMode, publicKey);

  try {
    const result = await RNFetchBlob.config({
      trusty: true,
    }).fetch(method, url, headers(''));

    console.log('getSolTonkensBalances result ===> ', result);
    return JSON.parse(result.data);
  } catch (error) {
    console.log(error);
  }
};

export const getSolTxConfirmation = async ({networkMode, txHash}) => {
  const method = 'GET';
  const url = ROUTES.WALLET.GET_SOL_TX_CONFIRMATION(networkMode, txHash);

  try {
    const result = await RNFetchBlob.config({
      trusty: true,
    }).fetch(method, url, headers(''));

    console.log('getSolTxConfirmation result ===> ', result);
    return JSON.parse(result.data);
  } catch (error) {
    console.log(error);
  }
};

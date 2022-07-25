import React from 'react';
import * as Web3 from '@solana/web3.js';
import * as RNFS from 'react-native-fs';
import * as bs58 from "bs58";
import {encode, decode} from 'string-encode-decode'

let keyPair;
let publicKey;
let privateKey;
const KeyPairFileName = "id.json";

const generateKey = () => {
	(async () => {
   	  const connection = new Web3.Connection(Web3.clusterApiUrl("testnet"));
	  keyPair = await Web3.Keypair.generate();
	  privateKey = await bs58.encode(keyPair.secretKey);
	  publicKey = keyPair.publicKey.toBase58();
	})();   
}

const getKeypair = () => {  

  const KeyFilePath = RNFS.DocumentDirectoryPath + KeyPairFileName;
  try {
    let res = RNFS.readFile(KeyFilePath, 'ascii');
    console.log(res);
  }
  catch(err) {
      try {
          (async () => {
              await generateKey();
              await RNFS. writeFile(KeyFilePath, privateKey, 'ascii');
          })();                  
      }
      catch (err) {

      }
  }
  return keyPair;
}

export default getKeypair;
import React, {useState, useContext, useEffect} from "react";
//import * as RNFS from 'react-native-fs';
//import * as Web3 from "@solana/web3.js";
//import * as bs58 from "bs58";
//import {encode, decode} from 'string-encode-decode'

interface WalletContextInterface{
    privateKey : string;
    publicKey : string;
    KeyFileName : string;
}
const initData = {
    privateKey : "",
    publicKey : "",
    KeyFileName : "id.json"
}

const WalletContext = React.createContext<WalletContextInterface>(initData);



const WalletContextProvider = ({children}:{children:any}) => {

    const [privateKey, setPrivateKey] = useState("");
/*
    const [publicKey, setPublicKey] = useState("");
    const [web3Connection, setWeb3Connection] = useState(null);

    const generateKey = () => {
      let keypair;
      (async () => {
        keypair = await Web3.Keypair.generate();
        setPrivateKey(bs58.encode(Web3.keypair.secretKey));
        setPublicKey(Web3.keypair.publicKey.toBase58());

        console.log(`public key: ${Web3.keypair.publicKey.toBase58()}`);
        console.log(`private key(raw): ${Web3.keypair.secretKey}`);
        console.log(`private key(bs58): ${bs58.encode(keypair.secretKey)}`);
      })();   
    }

    useEffect(()=>{

        let isFileExist = true;
        const KeyFilePath = RNFS.DocumentDirectoryPath + KeyFileName;

        RNFS.readFile(KeyFilePath, 'ascii').then(res => {
            console.log(res);
        })
        .catch(err => {
            isFileExist = false;
            console.log(err.message, err.code);        
        });

        if (isFileExist == false) {
            try {
                (async () => {
                    await generateKey();
                })();
                RNFS. writeFile(KeyFilePath, privateKey);
            } catch(e) {
                console.log(err.message, err.code);        
            }
        }
/////////////////////////////////////////////////////////        
        let web3Connection = new Web3.Connection(
            Web3.clusterApiUrl("testnet"),
            'confirmed',
        );

        setWeb3Connection(web3Connection);
    })
*/
    return (
        <WalletContext.Provider 
            value={{
                privateKey
            }}>
        </WalletContext.Provider>
    )
}

export { WalletContext, WalletContextProvider };
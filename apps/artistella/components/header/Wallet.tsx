import React, { useEffect, useState } from 'react'
import wallet from '../../images/icon-wallet.png'
import wallet2x from '../../images/icon-wallet@2x.png'
import wallet3x from '../../images/icon-wallet@3x.png'
import {Div,WalletD,Walletdiv,Icon_wallet,ImgWallet,ConnectDiv} from './style'

function Wallet(){
    return (    
        <Div>
                <WalletD>
                    <Walletdiv>
                        <Icon_wallet>
                          <ImgWallet src="images/icon-wallet.png" srcSet="images/icon-wallet@2x.png, images/icon-wallet@3x.png"/>
                        </Icon_wallet>
                        <ConnectDiv>
                            <span>Connect Wallet</span>
                        </ConnectDiv>
                    </Walletdiv>
                </WalletD>
        </Div>
    )
}


export default Wallet;
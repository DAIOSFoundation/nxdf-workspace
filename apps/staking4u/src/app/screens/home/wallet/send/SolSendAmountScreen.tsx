import * as web3 from '@solana/web3.js';
import * as spl  from "@solana/spl-token";
import React, { useEffect, useState } from 'react';
import { Actions } from 'react-native-router-flux';
import { useDispatch } from 'react-redux';
import * as globalActions from '../../../../store/modules/global/actions';
import * as modalActions from '../../../../store/modules/modal/actions';
import * as walletActions from '../../../../store/modules/wallet/actions';
import InputBorderRadius from '../../../../components/input/InputBorderRadius';
import Line from '../../../../components/line/Line';
import Topbar from '../../../../components/bar/TopBar';
import { Text } from '../../../../components/styled/Text';
import {
  SafeAreaView,
  View,
  ViewBorderRadius,
  ViewRowBorderRadius,
} from '../../../../components/styled/View';
import { ButtonBorderRadius } from '../../../../components/styled/Button';
import { SOL_TOKENS } from '../../../../utils/constants';
import {transfer, getOrCreateAssociatedTokenAccount} from '../../../../spl-transfer';

const SolSendAmountScreen = ({ title, amount, address, mintAddress }) => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');
  const solNetworkMode = 'devnet';
  const solSecret = '';

  const [withdrawalAmount, setWithdrawalAmount] = useState('0');
  const [isMax, setIsMax] = useState(false);

  useEffect(() => {
    console.log(message);
    if (message === 'transactionSuccess') {
      dispatch(walletActions.reset_message());
      Actions.sendRequestSuccessScreen();
    } else if (message === 'transactionFailed') {
      dispatch(walletActions.reset_message());
      Actions.sendRequestFailedScreen();
    }
  }, [message]);

  const onChangeAmount = (text) => {
    if (Number.isNaN(Number(text))) {
      dispatch(
        globalActions.change_toast_message('Please enter the quantity to send.')
      );
    } else if (Number(text) > Number(amount)) {
      console.log(Number(text), Number(amount));
      dispatch(
        globalActions.change_toast_message(
          'The input is greater than your balance.'
        )
      );
    } else {
      setWithdrawalAmount(text);
    }
  };

  const onPressToggleMax = () => {
    if (isMax) {
      setWithdrawalAmount(() => String(0));
    } else {
      setWithdrawalAmount(() =>
        String(Number(amount) - Number(title === 'SOL' ? 0.000005 : 0))
      ); // 수수료 빼줌
    }

    setIsMax(!isMax);
  };

  const sendSPLsToAccount = async(param) => {

    const connectionCluster = new web3.Connection(web3.clusterApiUrl('devnet'));

    const TokenAddresss = new web3.PublicKey(param.mintAddress);		
    const recipientAddresss = new web3.PublicKey(param.toAddress);	
    const senderKeypair = web3.Keypair.fromSecretKey(param.privateKey);	

    const txSinger: web3.Signer = {
      publicKey: senderKeypair.publicKey,
      secretKey: senderKeypair.secretKey
    }

    
    const addRecipientTokenAccount = await getOrCreateAssociatedTokenAccount(
        connectionCluster,
        txSinger,
        TokenAddresss,
        recipientAddresss
    );
    
    
    const addSenderTokenAccount = await getOrCreateAssociatedTokenAccount(
        connectionCluster,
        senderKeypair,
        TokenAddresss,
        senderKeypair.publicKey
    );
    
    const tranferToken = await transfer(
        connectionCluster,
        senderKeypair,
        addSenderTokenAccount.address,
        addRecipientTokenAccount.address,
        senderKeypair.publicKey,
        Number(param.amount)
    );

    setMessage('transactionSuccess');
    
  }



  const sendSOLSToAccount = async(param) => {
    
    const connection = new web3.Connection(web3.clusterApiUrl('devnet'));
    let accountFromSecret = web3.Keypair.fromSecretKey(param.privateKey);
    
    let base58ToSend = new web3.PublicKey(param.toAddress);

    var transaction = new web3.Transaction().add(
      web3.SystemProgram.transfer({
        fromPubkey: accountFromSecret.publicKey,
        toPubkey: base58ToSend,
        lamports: Number(param.amount), // number of SOL to send
      }),
    );

    var signature = await web3.sendAndConfirmTransaction(connection, transaction, [
      accountFromSecret,
    ]);

    setMessage('transactionSuccess');
  }

  const onPressModalOK = () => {

    let mySecretKey = new Uint8Array([63,187,34,85,159,44,110,254,116,129,35,146,
                              244,255,155,211,149,242,54,58,203,80,192,19,201,245,
                              83,120,199,209,45,200,244,225,78,38,107,204,74,92,219,
                              98,200,117,166,82,140,165,111,161,190,47,129,123,66,
                              42,89,147,160,22,184,133,133,213]);

    if (SOL_TOKENS.includes(title)) {

      // SOL일 경우
      // let param = {
      //   network: solNetworkMode,
      //   privateKey: solSecret,
      //   toAddress: address,
      //   balance: withdrawalAmount,
      // };

      
      let param = {
        network: solNetworkMode,
        privateKey: mySecretKey,
        toAddress: address,
        mintAddress,
        amount: withdrawalAmount,
      };

      console.log('SOL 전송 =====>', param);
      //dispatch(walletActions.post_send_sol_transaction(param));
      sendSPLsToAccount(param);

    } else {
        // SPL 토큰일 경우
        let param = {
        network: solNetworkMode,
        privateKey: mySecretKey,
        toAddress: address,
        amount: withdrawalAmount,
        };

        console.log('SPL 전송 =====>', param);
        //dispatch(walletActions.post_send_sol_token_transaction(param));
        sendSOLSToAccount(param);

    }
  };

  const onPressSend = () => {
    if (
      withdrawalAmount === '0' ||
      withdrawalAmount === '' ||
      Number.isNaN(withdrawalAmount)
    ) {
      dispatch(
        globalActions.change_toast_message('Please enter the amount to send.')
      );
    } else {
      dispatch(
        modalActions.change_modal_message(
          `Would you like to send ${Number(withdrawalAmount).toFixed(
            6
          )}${title}?`
        )
      );
      dispatch(modalActions.change_modal_one_button(false));
      dispatch(modalActions.change_modal_on_press_ok(onPressModalOK));
    }
  };

  const handleOnFocus = () => {
    if (withdrawalAmount === '0') setWithdrawalAmount('');
  };

  return (
    <SafeAreaView bgNavyTheme>
      <Topbar isLeftButton title={`${title} Send`} />
      <View paddingLeft={20} paddingRight={20} marginTop={20} flex={1}>
        <Text ftWhite bold ftLightWhite>
          Sending Amount
        </Text>
        <Text bold ftLightWhite ftLarge marginTop={10}>
          {Number(amount).toFixed(6)} {title}
        </Text>
        <ViewRowBorderRadius
          height={70}
          alignItems={'center'}
          borderRadius={15}
          bgLineNavy
          marginTop={30}
          paddingLeft={10}
          width={'100%'}
        >
          <View flex={4}>
            <InputBorderRadius
              ftWhite
              height={70}
              placeholder={'Enter the sending amount'}
              onChangeText={onChangeAmount}
              value={withdrawalAmount}
              onFocus={handleOnFocus}
              maxLength={30}
            />
          </View>
          <ButtonBorderRadius
            onPress={onPressToggleMax}
            height={70}
            style={{ flex: 1 }}
          >
            <Text ftWhite bold fontSize={16}>
              Max
            </Text>
          </ButtonBorderRadius>
        </ViewRowBorderRadius>
        <View marginTop={15} alignItems={'flex-end'}>
          <Text bold ftLightWhite>
            Transaction Fee ≒ 0.000005 SOL
          </Text>
        </View>
        <View marginTop={15} marginBottom={15}>
          <Line width={'94%'} height={5} />
        </View>
        <Text bold ftLightWhite>
          Receiver's Address
        </Text>
        <ViewBorderRadius
          borderRadius={15}
          bgLineNavy
          marginTop={15}
          paddingLeft={15}
          paddingTop={15}
          paddingRight={15}
          paddingBottom={15}
        >
          <Text ftWhite>{address}</Text>
        </ViewBorderRadius>
      </View>
      <ButtonBorderRadius
        bgYellowTheme
        onPress={onPressSend}
        width={'88%'}
        paddingTop={10}
        paddingBottom={10}
        marginTop={20}
        marginBottom={20}
        marginLeft={'auto'}
        marginRight={'auto'}
      >
        <Text bold fontSize={16}>
          Send
        </Text>
      </ButtonBorderRadius>
    </SafeAreaView>
  );
};

export default SolSendAmountScreen;

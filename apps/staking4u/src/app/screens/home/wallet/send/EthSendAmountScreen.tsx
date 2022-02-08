import React, { useEffect, useState } from 'react';
import { Actions } from 'react-native-router-flux';
import { useDispatch } from 'react-redux';
import * as walletActions from '../../../../store/modules/wallet/actions';
import * as globalActions from '../../../../store/modules/global/actions';
import * as modalActions from '../../../../store/modules/modal/actions';
import Topbar from '../../../../components/bar/TopBar';
import InputBorderRadius from '../../../../components/input/InputBorderRadius';
import Line from '../../../../components/line/Line';
import {
  SafeAreaView,
  View,
  ViewBorderRadius,
  ViewRowBorderRadius,
} from '../../../../components/styled/View';
import { ButtonBorderRadius } from '../../../../components/styled/Button';
import { Text } from '../../../../components/styled/Text';
import {
  calculateERC20GasFee,
  calculateEthGasFee,
} from '../../../../utils/functions';

const EthSendAmountScreen = ({ title, amount, address }) => {
  const dispatch = useDispatch();

  const ethGasPrice = 0;
  let message = '';
  const ethNetworkMode = '';
  const ethSecret = '';
  const [withdrawalAmount, setWithdrawalAmount] = useState('0');
  const [isMax, setIsMax] = useState(false);

  useEffect(() => {
    const param = {
      endpoint: 'mainnet',
    };
    dispatch(walletActions.get_eth_gas_price(param));
  }, []);

  useEffect(() => {
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
        String(
          Number(amount) -
            Number(
              title === 'ETH'
                ? calculateEthGasFee(ethGasPrice)
                : calculateERC20GasFee(ethGasPrice)
            )
        )
      ); // 수수료 빼줌
    }

    setIsMax(!isMax);
  };

  const onPressModalOK = () => {
    if (title === 'ETH') {
      const param = {
        endpoint: ethNetworkMode,
        myWalletPrivateKey: ethSecret,
        toWalletAddress: address,
        amountEther: withdrawalAmount,
        gasPrice: ethGasPrice,
        gasLimit: 21000,
      };

      dispatch(walletActions.post_send_eth_transaction(param));
    } else {
      const param = {
        endpoint: ethNetworkMode,
        myWalletPrivateKey: ethSecret,
        toWalletAddress: address,
        contractAddress: '111111111',
        // contractAddress:
        //   ethNetworkMode === 'mainnet'
        //     ? findOneThemeToken(title).mainNetContractAddress
        //     : findOneThemeToken(title).testNetContractAddress,
        amountToken: withdrawalAmount,
        gasPrice: ethGasPrice,
        gasLimit: 70000,
      };

      // ERC20 Transaction
      dispatch(walletActions.post_send_erc20_transaction(param));
    }
  };

  const onPressSend = () => {
    message = 'transactionSuccess';
    if (
      withdrawalAmount === '0' ||
      withdrawalAmount === '' ||
      Number.isNaN(withdrawalAmount)
    ) {
      dispatch(
        globalActions.change_toast_message('Please enter the quantity to send.')
      );
    } else {
      dispatch(
        modalActions.change_modal_message(
          `${Number(withdrawalAmount).toFixed(6)}${title} 보내시겠습니까?`
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
          출금 수량
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
              placeholder={'출금 수량 입력'}
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
              최대
            </Text>
          </ButtonBorderRadius>
        </ViewRowBorderRadius>
        <View marginTop={15} alignItems={'flex-end'}>
          <Text bold ftLightWhite>
            Transaction Fee{' '}
            {title === 'ETH'
              ? calculateEthGasFee(ethGasPrice)
              : calculateERC20GasFee(ethGasPrice)}{' '}
            ETH
          </Text>
        </View>
        <View marginTop={15} marginBottom={15}>
          <Line width={'94%'} height={5} />
        </View>
        <Text bold ftLightWhite>
          받으실 분 주소
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

export default EthSendAmountScreen;

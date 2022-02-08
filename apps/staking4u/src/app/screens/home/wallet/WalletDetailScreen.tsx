import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, Linking } from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';
import useSWR from 'swr';
import env from 'react-native-config';
import { format } from 'date-fns';
import { Actions } from 'react-native-router-flux';
import TopBar from '../../../components/bar/TopBar';
import Line from '../../../components/line/Line';
import ETHTransaction from '../../../components/items/wallet/ETHTransaction';
import SOLTransaction from '../../../components/items/wallet/SOLTransaction';
import SOLTokensTransaction from '../../../components/items/wallet/SOLTokensTransaction';
import { Image } from '../../../components/styled/Image';
import { SafeAreaView, View, ViewRow } from '../../../components/styled/View';
import { Text } from '../../../components/styled/Text';
import { ButtonBorderRadius } from '../../../components/styled/Button';
import { fetcher, findOneThemeToken } from '../../../utils/functions';
import { ERC20_TOKENS, SOL_TOKENS } from '../../../utils/constants';
import { cryptoCurrency } from '../../../utils/cryptoCurrency';
import iconWhiteDown from '../../../assets/common/iconWhiteDown.png';

// 지갑 상세
const WalletDetailScreen = (props) => {
  const ethPublic = '';
  const ethNetworkMode = '';
  const solPublic = '';
  const solNetworkMode = '';
  const tickers = '';
  const usdExchangeRate = '';

  // const {
  //   ethPublic,
  //   ethNetworkMode,
  //   solPublic,
  //   solNetworkMode,
  //   tickers,
  //   usdExchangeRate,
  // } = useSelector(
  //   (state) => ({
  //     ethPublic: state.global.ethPublic,
  //     solPublic: state.global.solPublic,
  //     ethNetworkMode: state.global.ethNetworkMode,
  //     solNetworkMode: state.global.solNetworkMode,
  //     tickers: state.ticker.tickers,
  //     usdExchangeRate: state.ticker.usdExchangeRate,
  //   }),
  //   shallowEqual
  // );

  const [solTokensBalance, setSolTokensBalance] = useState(0);

  // 업비트 기준 이더 시세 조회
  // const { data: ethData, error: ethError } = useSWR(
  //   `${upbit.ticker.KRW_ETH}`,
  //   fetcher,
  //   {
  //     refreshInterval: 5000,
  //   }
  // );
  // erc20 트랜잭션 내역 조회
  // const { data: erc20TransactionList, error: erc20TransactionListError } =
  //   useSWR(
  //     `${
  //       env.WALLET_URL
  //     }/eth/tokenTxWithAddress?endpoint=${ethNetworkMode}&walletAddress=${ethPublic}&tokenAddress=${
  //       findOneThemeToken(props.coin.symbol)?.mainNetContractAddress
  //     }&sort=desc`,
  //     fetcher,
  //     {
  //       refreshInterval: 5000,
  //     }
  //   );
  // SOL 트랜잭션 내역 조회
  // const { data: solTransactionList, error: solTransactionListError } = useSWR(
  //   `${env.WALLET_URL}/sol/solTransfer?network=${solNetworkMode}&account=${solPublic}&limit=100&offset=0`,
  //   fetcher,
  //   {
  //     refreshInterval: 5000,
  //   }
  // );
  // SOL Token 트랜잭션 내역 조회
  // const { data: solTokenTransactionList, error: solTokenTransactionListError } =
  //   useSWR(
  //     `${env.WALLET_URL}/sol/splTransfer?network=${solNetworkMode}&account=${props.solTokenPublicKey}&limit=100&offset=0`,
  //     fetcher,
  //     {
  //       refreshInterval: 5000,
  //     }
  //   );

  // 나의 지갑 erc20 수량 가져오기
  // const { data: erc20Amount, error: erc20AmountError } = useSWR(
  //   `${
  //     env.WALLET_URL
  //   }/eth/tokenBalance?endpoint=${ethNetworkMode}&walletAddress=${ethPublic}&contractAddress=${
  //     findOneThemeToken(props.coin.symbol)?.mainNetContractAddress
  //   }`,
  //   fetcher,
  //   {
  //     refreshInterval: 5000,
  //   }
  // );
  // 나의 지갑 Sol 수량 가져오기
  // const { data: solAmount, error: solAmountError } = useSWR(
  //   `${env.WALLET_URL}/sol/balance?network=${solNetworkMode}&address=${solPublic}`,
  //   fetcher,
  //   {
  //     refreshInterval: 5000,
  //   }
  // );
  // // 나의 지갑 Sol Token 리스트 가져오기
  // const { data: solTokenList, error: solTokenListError } = useSWR(
  //   `${env.WALLET_URL}/sol/tokenBalance?network=${solNetworkMode}&address=${solPublic}`,
  //   fetcher,
  //   {
  //     refreshInterval: 5000,
  //   }
  // );

  const solTokenList = [];

  useEffect(() => {
    // solTokenList?.data.tokens.map(async (item) => {
    //   if (props.coin.symbol === item.tokenSymbol) {
    //     setSolTokensBalance(item.amount);
    //   }
    // });
    setSolTokensBalance(1);
  }, [solTokenList]);

  const erc20Amount = 1;
  const solAmount = 2;
  // symbol에 따른 수량 분기 처리
  const amount = useMemo(() => {
    // if (ERC20_TOKENS.includes(props.coin.symbol)) {
    //   return erc20Amount?.data.balance;
    // } else if (SOL_TOKENS.includes(props.coin.symbol)) {
    //   return solTokensBalance;
    // } else if (props.coin.symbol === 'SOL') {
    //   return solAmount?.data.balance;
    // }
    return 1;
  }, [erc20Amount, solTokensBalance, solAmount]);

  const price = useMemo(() => {
    // if (props.coin.symbol === 'ORBS') {
    //   return (
    //     (tickers?.['ORBS']?.close * erc20Amount?.data.balance) / usdExchangeRate
    //   );
    // } else if (props.coin.symbol === 'AAVE') {
    //   return tickers?.['AAVE']?.close * erc20Amount?.data.balance;
    // } else if (SOL_TOKENS.includes(props.coin.symbol)) {
    //   return tickers?.[props.coin.symbol]?.close * solTokensBalance;
    // } else if (props.coin.symbol === 'SOL') {
    //   return tickers?.['SOL']?.close * solAmount?.data.balance;
    // }
    return 1;
  }, [tickers, solTokensBalance]);

  // 트랜잭션 상세정보 페이지 Linking ex) ETH
  const onPressEthTxLink = (networkMode, txID) => {
    if (networkMode !== 'mainnet') {
      Linking.openURL(`https://${networkMode}.etherscan.io/tx/${txID}`);
    } else {
      Linking.openURL(`https://etherscan.io/tx/${txID}`);
    }
  };

  // 트랜잭션 UI 컴포넌트
  const renderTransactions = ({ item }) => {
    if (findOneThemeToken(props.coin.symbol)) {
      return (
        <ETHTransaction
          onPressEthTxLink={onPressEthTxLink}
          ethNetworkMode={ethNetworkMode}
          days={format(new Date(item.timeStamp * 1000), 'yyyy-MM-dd')}
          times={format(new Date(item.timeStamp * 1000), 'HH:mm:ss')}
          ethPublic={ethPublic}
          from={item.from}
          to={item.to}
          symbol={props.coin.symbol}
          value={item.value}
          gas={item.gasPrice}
          hash={item.hash}
        />
      );
    } else if (SOL_TOKENS.includes(props.coin.symbol)) {
      return (
        <SOLTokensTransaction
          status={item.status}
          includeSPLTransfer={item.includeSPLTransfer}
          fee={item.fee}
          days={format(new Date(item.blockTime * 1000), 'yyyy-MM-dd')}
          times={format(new Date(item.blockTime * 1000), 'HH:mm:ss')}
          change={item.change}
          solTokenPublicKey={props.solTokenPublicKey}
          symbol={props.coin.symbol}
        />
      );
    } else if (props.coin.symbol === 'SOL') {
      return (
        // <SOLTransaction
        //   status={item.status}
        //   days={format(new Date(item.blockTime * 1000), 'yyyy-MM-dd')}
        //   times={format(new Date(item.blockTime * 1000), 'HH:mm:ss')}
        //   from={item.src}
        //   to={item.dst}
        //   amount={item.lamport}
        //   decimals={item.decimals}
        //   symbol={props.coin.symbol}
        //   solPublic={solPublic}
        //   fee={item.fee}
        // />
        <SOLTransaction
          status={item.status}
          days={format(new Date(item.blockTime * 1000), 'yyyy-MM-dd')}
          times={format(new Date(item.blockTime * 1000), 'HH:mm:ss')}
          from={item.src}
          to={item.dst}
          amount={item.lamport}
          decimals={item.decimals}
          symbol={props.coin.symbol}
          solPublic={solPublic}
          fee={item.fee}
        />
      );
    }
  };

  const erc20TransactionList = [];
  const solTokenTransactionList = [];
  const solTransactionList = [];
  // 트랜잭션 리스트 정보
  const transactions = useMemo(() => {
    // if (ERC20_TOKENS.includes(props.coin.symbol)) {
    //   return erc20TransactionList?.data;
    // } else if (SOL_TOKENS.includes(props.coin.symbol)) {
    //   return solTokenTransactionList?.data.transactions;
    // } else if (props.coin.symbol === 'SOL') {
    //   return solTransactionList?.data.transactions;
    // }
    return 111;
  }, [erc20TransactionList, solTokenTransactionList, solTransactionList]);

  // symbol에 따른 공개키 주소 반환
  const getAddressBySymbol = (symbol) => {
    switch (symbol) {
      case findOneThemeToken(symbol)?.symbol:
        return ethPublic;
      case 'RAY':
      case 'ATLAS':
      case 'SOL':
        return solPublic;
    }
  };
  // 입금 버튼
  const onPressReceive = () => {
    // const param = {
    //   title: props.coin.symbol,
    //   address: getAddressBySymbol(props.coin.symbol),
    // };
    const param = {
      title: props.coin.symbol,
      address: '1111111',
    };
    Actions.receiveScreen(param);
  };

  // 출금 버튼
  const onPressSend = () => {
    const param = {
      title: props.coin.symbol,
      amount,
      mintAddress: props.mintAddress,
    };
    Actions.sendAddressScreen(param);
  };

  return (
    <SafeAreaView bgNavyTheme>
      <TopBar isLeftButton title={props.coin.name} />
      <View alignItems={'center'} marginTop={15} marginBottom={30}>
        <View alignItems={'center'}>
          <Text ftYellowTheme>Total</Text>
          <View bgYellowTheme height={3} marginTop={5} width={50} />
        </View>
        <View marginTop={15} marginBottom={15}>
          <Text ftBigLarge ftWhite>
            {amount ? amount.toFixed(4) : 0} {props.coin.symbol}
          </Text>
        </View>
        <View>
          <Text fontSize={15} ftBlueGray>
            ${price ? price.toFixed(4) : 0}
          </Text>
        </View>
        <ViewRow justifyContent={'space-around'} width={'100%'} marginTop={25}>
          <ButtonBorderRadius
            borderRadius={6}
            bgLightNavy
            width={'43%'}
            paddingTop={15}
            paddingBottom={15}
            onPress={onPressReceive}
          >
            <Text fontSize={15} ftYellowTheme>
              Receive
            </Text>
          </ButtonBorderRadius>
          <ButtonBorderRadius
            borderRadius={6}
            bgLightNavy
            width={'43%'}
            onPress={onPressSend}
          >
            <Text ftWhite fontSize={15}>
              Send
            </Text>
          </ButtonBorderRadius>
        </ViewRow>
      </View>
      <Line height={4} />
      <View paddingLeft={15} paddingRight={15} flex={1}>
        {/* 내역보기 문구 */}
        <ViewRow
          alignItems={'center'}
          marginTop={25}
          marginBottom={25}
          justifyContent={'space-between'}
        >
          <Text ftWhite>History</Text>
          {/*//todo 미구현 UI 주석처리, 추후 구현 예정*/}
          {/*<ButtonBorderRadius*/}
          {/*  bgDeepBlue*/}
          {/*  width={'auto'}*/}
          {/*  paddingLeft={10}*/}
          {/*  paddingRight={10}>*/}
          {/*  <Text*/}
          {/*    ftSmall*/}
          {/*    ftWhite*/}
          {/*    paddingTop={5}*/}
          {/*    paddingBottom={5}*/}
          {/*    marginRight={5}>*/}
          {/*    All*/}
          {/*  </Text>*/}
          {/*  <Image width={12} height={12} source={iconWhiteDown} />*/}
          {/*</ButtonBorderRadius>*/}
        </ViewRow>
        <Line height={1} />
        {/* 내역 상세 리스트 */}
        <FlatList
          data={transactions}
          renderItem={renderTransactions}
          keyExtractor={(item) =>
            findOneThemeToken(props.coin.symbol)
              ? item.blockNumber
              : item.txHash
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default WalletDetailScreen;
import React, { useEffect, useMemo, useState } from 'react';
import { Actions } from 'react-native-router-flux';
import { getCoin } from '../../../../api/coinStaking';
import { useQuery } from 'react-query';
import Coin from '../../../../components/items/wallet/Coin';

const RenderCoin = ({ item }) => {
  let solTokenPublicKey;
  let mintAddress;
  const solTokens = [];

  solTokens.map((data) => {
    if (item.symbol === data.tokenSymbol) {
      solTokenPublicKey = data.publicKey;
      mintAddress = data.mint;
    }
  });

  const onPressItem = (symbol) => {
    // 해당 코인 디테일 페이지로 이동
    Actions.walletDetailScreen({
      coin: item,
      solTokenPublicKey,
      mintAddress,
    });
  };

  return (
    <Coin
      logo={item.logo}
      name={item.name}
      symbol={item.symbol}
      amount={item.amount}
      onPress={onPressItem}
    />
  );
};

export default RenderCoin;

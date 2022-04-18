import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView, View } from '../../../components/styled/View';
import { WalletCoin } from '../../../utils/dummy';
import RenderCoin from './coinAmount/renderCoin';

// 나의 지갑
const WalletCoinScreen = (props) => {
  return (
    <SafeAreaView bgNavyTheme>
      <View
        flex={1}
        justifyContent={'center'}
        alignSelf={'center'}
        width={'96%'}
      >
        <View flex={5}>
          <FlatList
            data={WalletCoin}
            renderItem={RenderCoin}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WalletCoinScreen;

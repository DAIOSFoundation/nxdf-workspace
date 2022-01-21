import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {ViewRow} from './styled/View';
import {ButtonBorderRadius} from './styled/Button';
import {Text} from './styled/Text';
import {AESDecrypt, getData} from '../utils/functions';

export const StorageBackdoor = () => {
  const onPressStorage = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);

    console.log('나의 스토리지', result);
  };

  const onPressMnemonic = async () => {
    const mnemonic = await AESDecrypt(await getData('AESKey'));

    console.log('나의 니모닉', mnemonic);
  };

  return (
    <ViewRow justifyContent={'space-around'} alignItems={'center'}>
      <ButtonBorderRadius
        brWhite
        width={'30%'}
        paddingTop={10}
        paddingBottom={10}
        marginTop={10}
        marginLeft={'auto'}
        marginRight={'auto'}
        onPress={onPressStorage}>
        <Text ftWhite bold fontSize={13}>
          스토리지 보기
        </Text>
      </ButtonBorderRadius>
      <ButtonBorderRadius
        brWhite
        width={'30%'}
        paddingTop={10}
        paddingBottom={10}
        marginTop={10}
        marginLeft={'auto'}
        marginRight={'auto'}
        onPress={onPressMnemonic}>
        <Text ftWhite bold fontSize={13}>
          나의 니모닉
        </Text>
      </ButtonBorderRadius>
    </ViewRow>
  );
};

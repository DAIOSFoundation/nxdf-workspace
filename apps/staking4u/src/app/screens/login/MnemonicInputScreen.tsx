import React, { useEffect, useState } from 'react';
import * as authsActions from '../../store/modules/auths/actions';
import * as registerActions from '../../store/modules/register/actions';
import {
  SafeAreaView,
  ScrollView,
  View,
  ViewBorderRadius,
} from '../../components/styled/View';
import TopBar from '../../components/bar/TopBar';
import { Text } from '../../components/styled/Text';
import BottomButton from '../../components/buttons/BottomButton';
import { NBTextareaRadius } from '../../components/styled/Input';
import I18n from 'react-native-i18n';
import { Actions } from 'react-native-router-flux';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AESKey, mnemonicEncrypt, storeData } from '../../utils/functions';
import { useForm } from 'react-hook-form';
import AsyncStorage from '@react-native-community/async-storage';
import { useQuery } from 'react-query';
import jwt from 'jsonwebtoken';
import { Mnemonic } from '../../api/coinStaking';

interface MnemonicProps {
  mnemonic: string;
}

const MnemonicInputScreen = () => {
  const [loading, setLoading] = useState(false);
  const [mndata, setmndata] = useState<MnemonicProps | string>('');
  const getMnemonicVerification = true;
  const { register, setValue, handleSubmit, watch } = useForm();
  const mn =
    'elephant napkin toy fortune board ensure mad puppy bike coconut law chuckle';

  const { isLoading, data: mnemonicData2 } = useQuery(
    ['mnemonic', mndata?.mnemonic],
    Mnemonic.postMnemonic,
    {
      enabled: !!loading,
    }
  );
  console.log(`isLoading : ${isLoading}`);
  console.log(`mnemonicData2 : ${mnemonicData2}`);
  useEffect(() => {
    register('mnemonic', { required: true });
  }, [register]);

  const onPressNext = async (data) => {
    data.mnemonic?.split(' ').length === 12
      ? (setmndata(data), setLoading(true))
      : alert('check your mnemonic');
    const Mne = mnemonicData2?.data?.bip44Change?.publicKey;
    console.log(`Mne : ${Mne}`);
    console.log(`isLoading : ${isLoading}`);
    if (Mne) {
      await AsyncStorage.multiSet([
        ['token', JSON.stringify(Mne)],
        ['loggedIn', JSON.stringify('yes')],
      ]);
      Actions.tabBar();
    }
  };

  // const onChangeText = (text) => {
  //   setMnemonic(text);
  // };

  return (
    <SafeAreaView bgNavyTheme>
      <TopBar isLeftButton />
      <ScrollView>
        <View paddingLeft={15} paddingRight={15} marginTop={50}>
          <Text ftWhite ftBigLarge>
            Enter mnemonic
          </Text>
          <Text ftWhite marginTop={30}>
            Have you already signed up before?{'\n'}
            Please enter your mnemonic in a correct order.
          </Text>
          <ViewBorderRadius
            width={'100%'}
            bgDarkGray
            brLightGray
            marginTop={30}
          >
            <NBTextareaRadius
              {...(getMnemonicVerification
                ? { brSuccess: true }
                : { brDanger: true })}
              paddingLeft={10}
              paddingRight={10}
              paddingTop={10}
              paddingBottom={10}
              ftWhite
              rowSpan={5}
              bordered
              autoCapitalize="none"
              onChangeText={(text) => setValue('mnemonic', text)}
              onSubmitEditing={handleSubmit(onPressNext)}
            />
          </ViewBorderRadius>
        </View>
      </ScrollView>
      <BottomButton
        {...(!loading ? { bgBlueGray: true } : { bgYellowTheme: true })}
        text={!loading ? 'Verification' : 'Next'}
        onPress={handleSubmit(onPressNext)}
      />
    </SafeAreaView>
  );
};

export default MnemonicInputScreen;

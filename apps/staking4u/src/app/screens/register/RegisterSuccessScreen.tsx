import React, { useEffect } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  shallowEqual,
  useDispatch,
  useSelector,
  RootStateOrAny,
} from 'react-redux';
import * as authsActions from '../../store/modules/auths/actions';
import { SafeAreaView, View } from '../../components/styled/View';
import { Image } from '../../components/styled/Image';
import { ButtonRadius } from '../../components/styled/Button';
import TopBar from '../../components/bar/TopBar';
import successImage from '../../assets/register/register_success.png';
import { Text } from '../../components/styled/Text';
import { useDisableBackhandler } from '../../hooks';
import { getData, storeData } from '../../utils/functions';

const RegisterSuccessScreen = () => {
  const { jwt } = useSelector(
    (state: RootStateOrAny) => ({
      jwt: state.auths.jwt,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (jwt) {
      storeData('jwt', jwt);
      Actions.reset('tabBar');
    }
  }, [jwt]);

  // 개발단계에서의 백도어버튼
  const onPressBack = () => {
    // 이전 스크린(이메일 발송 성공 스크린)으로 이동
    Actions.emailSendingSuccessScreen();
  };
  // 개발단계에서의 백도어버튼
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onPressNext = () => {};

  const onPressStart = async () => {
    // 서버에서 private mnemonic 생성을 할수 있도록 신호를 보내주는 API 호출
    // JWT 발급
    const param = {
      email: await getData('email'),
      publicMnemonicHash: await getData('publicMnemonic'),
    };

    dispatch(authsActions.post_generate_jwt(param));
  };

  useDisableBackhandler();

  return (
    <SafeAreaView bgNavyTheme>
      <TopBar />
      <View flex={1} justifyContent={'center'} alignItems={'center'}>
        <Text ftLightWhite bold fontSize={22}>
          Congratulations!
        </Text>
      </View>
      <View flex={2} alignItems={'center'}>
        <Image source={successImage} width={'80%'} resizeMode={'contain'} />
        <Text ftLightWhite textAlign={'center'} ftSmall>
          You have completed all steps{'\n'}
          Meet various financial products at Staking4U.{'\n'}
        </Text>
      </View>
      <View flex={3} justifyContent={'flex-end'}>
        <ButtonRadius
          bgYellowTheme
          width={'88%'}
          paddingTop={10}
          paddingBottom={10}
          marginTop={20}
          marginBottom={20}
          marginLeft={'auto'}
          marginRight={'auto'}
          onPress={onPressStart}
        >
          <Text ftFontNavy bold fontSize={16}>
            Getting Started!
          </Text>
        </ButtonRadius>
        {/* 개발 단계에서의 백도어버튼 : 개발 단계 이후 반드시 삭제 필요*/}
        {/*<ViewRow justifyContent={'space-around'}>*/}
        {/*  <ButtonRadius width={'40%'} onPress={onPressBack} borderRadius={10}>*/}
        {/*    <Text ftFontNavy>Back Screen</Text>*/}
        {/*  </ButtonRadius>*/}
        {/*  <ButtonRadius width={'40%'} onPress={onPressNext} borderRadius={10}>*/}
        {/*    <Text ftFontNavy>Next Screen</Text>*/}
        {/*  </ButtonRadius>*/}
        {/*</ViewRow>*/}
      </View>
    </SafeAreaView>
  );
};

export default RegisterSuccessScreen;

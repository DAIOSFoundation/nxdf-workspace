import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  shallowEqual,
  useDispatch,
  useSelector,
  RootStateOrAny,
} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as authsActions from '../../../store/modules/auths/actions';
import SectionButton from '../../../components/buttons/SectionButton';
import Topbar from '../../../components/bar/TopBar';
import Line from '../../../components/line/Line';
import { View, SafeAreaView } from '../../../components/styled/View';
import { Text } from '../../../components/styled/Text';
import { getData } from '../../../utils/functions';
import * as userActions from '../../../store/modules/user/actions';
import { StorageBackdoor } from '../../../components/BackdoorComponents';

const MyInfoScreen = () => {
  const { userInfo } = useSelector(
    (state: RootStateOrAny) => ({
      userInfo: state.user.userInfo,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function getStorage() {
      let publicMnemonic;
      publicMnemonic = await getData('publicMnemonic');
      dispatch(userActions.get_user_by_public_mnemonic(publicMnemonic));
    }
    getStorage();
  }, []);

  const onPressLogOut = async () => {
    dispatch(authsActions.reset_jwt());
    dispatch(authsActions.reset_email_auth());
    await AsyncStorage.clear();
    Actions.reset('Index');
  };

  const sections = [
    {
      title: 'Terms of service',
      isButton: true,
      onPress: () => {},
    },
    {
      title: 'Privacy policy',
      isButton: true,
      onPress: () => {},
    },
    {
      title: 'App version 0.0.2',
      isButton: false,
    },
    {
      title: 'Logout',
      isButton: true,
      onPress: () => {
        onPressLogOut();
      },
    },
  ];

  return (
    <SafeAreaView bgNavyTheme>
      <Topbar />
      <View flex={1} justifyContent={'center'}>
        <Text fontSize={15} bold ftYellowTheme paddingLeft={30}>
          Verified e-mail account
        </Text>
        <Text fontSize={20} bold ftWhite paddingLeft={30} marginTop={20}>
          {userInfo?.email}
        </Text>
      </View>
      <View flex={4} width={'96%'} alignSelf={'center'}>
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            <Line width={'100%'} height={1} />
            <View width={'96%'} alignItems={'center'}>
              <SectionButton
                isButton={section.isButton}
                onPress={section.onPress}
                text={section.title}
              />
            </View>
            {index === sections.length - 1 ? (
              <Line width={'100%'} height={1} />
            ) : (
              <></>
            )}
          </React.Fragment>
        ))}
      </View>
      {/* <StorageBackdoor /> */}
    </SafeAreaView>
  );
};

export default MyInfoScreen;

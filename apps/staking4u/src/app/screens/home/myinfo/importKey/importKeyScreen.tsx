import React, { useState } from 'react';
import { TextInput } from 'react-native';
import * as RNFS from 'react-native-fs';
import * as bs58 from "bs58";
import { SceneMap, TabView } from 'react-native-tab-view';
import { View, SafeAreaView } from '../../../../components/styled/View';
import { ButtonRadius } from '../../../../components/styled/Button';
import Topbar from '../../../../components/bar/TopBar';
import { Text } from '../../../../components/styled/Text';
import { Image } from '../../../../components/styled/Image';
import { Actions } from 'react-native-router-flux';
import styled from 'styled-components/native';

const ImportInput = styled.TextInput`
  width: 100%;
  border-radius: 10px;
  color: black;
  background-color: #bcbfcf;
  margin: 0 auto;
`;

const KeyPairFileName = "key.json";

const ImportKeyScreen = () => {
  // 탭뷰 스크린

  const [secretKey, setSecretKey] = useState(null);

  const onPressOk = async () => {

    try {
      const KeyFilePath = RNFS.DocumentDirectoryPath + KeyPairFileName;
      await RNFS. writeFile(KeyFilePath, secretKey, 'ascii');
    }
    catch(err) {
      alert("Could not import key. Please try again");
      return;
    }

    Actions.pop();
  };


  const onPressCopy = async () => {
    alert('init system');
  };

  return (
    <SafeAreaView bgNavyTheme>
      <Topbar isLeftButton title={'Import Key'} />
      <View
        width={'90%'}
        height={'100%'}
        borderRadius={10}
        bgLightGray
        marginLeft={'auto'}
        marginRight={'auto'}
        padding={20}
        flex={5}
      >
        {/* <ImportInput placeholder={'import key'} /> */}
        <TextInput
            style={{flex: 1, width: '100%'}}
            multiline={true}
            placeholder="Paste your key here"
            onChangeText={setSecretKey}
            value={secretKey}
        />
      </View>
      <View
        flex={4}
        width={'90%'}
        marginTop={10}
        marginBottom={10}
        marginLeft={'auto'}
        marginRight={'auto'}
      ></View>
      <View
        flex={2}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={''}
      >
        <ButtonRadius
          bgYellowTheme
          width={'80%'}
          height={'60%'}
          paddingTop={10}
          paddingBottom={10}
          marginTop={20}
          marginBottom={20}
          marginLeft={'auto'}
          marginRight={'auto'}
          onPress={onPressOk}
        >
          <Text ftNavyTheme bold fontSize={16}>
            IMPORT
          </Text>
        </ButtonRadius>
      </View>
    </SafeAreaView>
  );
};

export default ImportKeyScreen;

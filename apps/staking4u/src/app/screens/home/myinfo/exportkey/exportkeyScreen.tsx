import React, { useEffect, useState } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';
import { View, SafeAreaView } from '../../../../components/styled/View';
import { ButtonRadius } from '../../../../components/styled/Button';
import Topbar from '../../../../components/bar/TopBar';
import { Text } from '../../../../components/styled/Text';
import { Image } from '../../../../components/styled/Image';
import { Actions } from 'react-native-router-flux';
import Clipboard from '@react-native-clipboard/clipboard';
import * as RNFS from 'react-native-fs';

const KeyPairFileName = "key.json";

const ExportKeyScreen = () => {
  // 탭뷰 스크린

  const [secretKey, setSecretKey] = useState(null);

  const updateKeyToExport = async() => {
    try {
      const KeyFilePath = RNFS.DocumentDirectoryPath + KeyPairFileName;
      let secretKeyHex = await RNFS.readFile(KeyFilePath, 'ascii');
      setSecretKey(secretKeyHex);  
    }
    catch(err) {
      alert("First please import key");
      return;
    }
  }

  useEffect(() => {
    updateKeyToExport();
  },[]);

  const onPressOk = async () => {
    Actions.pop();
  };
  const onPressCopy = async () => {
    Clipboard.setString(secretKey);
    alert('Key copied to clipboard');
  };

  return (
    <SafeAreaView bgNavyTheme>
      <Topbar isLeftButton title={'Export Key'} />
      <View flex={5}>
        <ButtonRadius
          source={''}
          width={'90%'}
          height={'100%'}
          borderRadius={10}
          bgLightGray
          marginLeft={'auto'}
          marginRight={'auto'}
          padding={20}
          onPress={onPressCopy}
        >
          <Text>{secretKey}</Text>
        </ButtonRadius>
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
          width={'40%'}
          height={'60%'}
          paddingTop={10}
          paddingBottom={10}
          marginTop={20}
          marginBottom={20}
          marginLeft={'auto'}
          marginRight={'auto'}
          onPress={onPressCopy}
        >
          <Text ftNavyTheme bold fontSize={16}>
            Copy
          </Text>
        </ButtonRadius>
        <ButtonRadius
          bgYellowTheme
          width={'40%'}
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
            OK
          </Text>
        </ButtonRadius>
      </View>
    </SafeAreaView>
  );
};

export default ExportKeyScreen;

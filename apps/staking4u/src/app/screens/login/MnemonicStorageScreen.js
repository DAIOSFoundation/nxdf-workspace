// import React, {useEffect} from 'react';
// // NPM Module
// import {shallowEqual, useSelector, useDispatch} from 'react-redux';
// import {Actions} from 'react-native-router-flux';
// import Share from 'react-native-share';
// // Components
// import {SafeAreaView, ScrollView, View} from '../../components/styled/View';
// import TopBar from '../../components/bar/TopBar';
// import {Text} from '../../components/styled/Text';
// import ListView from '../register/components/ListView';
// import BottomButton from '../../components/buttons/BottomButton';
// import {ButtonBorderRadius} from '../../components/styled/Button';
// import {Image} from '../../components/styled/Image';
// // languages
// import I18n from 'react-native-i18n';
// // images
// import copyIcon from '../../assets/register/icon_copy_grey.png';
// // utils
// import {shuffleArray} from '../../utils/functions';

// const MnemonicStorageScreen = () => {
//   const {mnemonic} = useSelector(
//     (state) => ({
//       mnemonic: state.xlm.mnemonic,
//     }),
//     shallowEqual,
//   );

//   const onPressCopy = (options) => {
//     Share.open(options)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         err && console.log(err);
//       });
//   };

//   const onPressNext = () => {
//     Actions.mnemonicVerificationScreen({
//       data: shuffleArray(mnemonic.split(' ')),
//     });
//   };

//   return (
//     <SafeAreaView bgTheme>
//       <TopBar bgTheme isLeftButton />
//       <ScrollView>
//         <View paddingLeft={15} paddingRight={15} marginTop={50}>
//           <Text ftWhite ftBigLarge>
//             {I18n.t('register.storeMnemonic')}
//           </Text>
//           <Text ftWhite marginTop={30}>
//             {I18n.t('register.storeMnemonicPhrase')}
//           </Text>
//           <View marginTop={50}>
//             <ListView data={mnemonic.split(' ')} lineCnt={3} />
//           </View>
//           <View width={'100%'} alignItems={'center'} marginTop={30}>
//             <View width={'70%'}>
//               <ButtonBorderRadius
//                 bgWhite
//                 paddingTop={10}
//                 paddingBottom={10}
//                 onPress={() =>
//                   onPressCopy({
//                     message: mnemonic,
//                   })
//                 }>
//                 <Image width={24} height={24} source={copyIcon} />
//                 <Text ftTheme bold>
//                   {I18n.t('register.mnemonicCopy')}
//                 </Text>
//               </ButtonBorderRadius>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//       <BottomButton
//         text={I18n.t('register.nextButton')}
//         onPress={onPressNext}
//       />
//     </SafeAreaView>
//   );
// };

// export default MnemonicStorageScreen;

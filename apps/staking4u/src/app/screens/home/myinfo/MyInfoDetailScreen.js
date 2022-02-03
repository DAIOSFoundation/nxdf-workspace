import React from 'react';
// NPM Modules
import {Actions} from 'react-native-router-flux';
// Components
import {View, ViewRow, ScrollView} from '../../../components/styled/View';
import {Text} from '../../../components/styled/Text';
// Styled Components
import TopBar from '../../../components/bar/TopBar';
import BottomButton from '../../../components/buttons/BottomButton';
// languages
import I18n from '../../../config/i18n';
import {color} from 'react-native-reanimated';

// 포트폴리오 상세
const MyInfoDetailScreen = () => {
  return (
    <View bgTheme height={'100%'}>
      <TopBar bgTheme isLeftButton title={'ADA a'} />
      <ScrollView paddingTop={20}>
        <Line height={5} />
        {/* 나의 예치 금액 */}
        <ProductOverview />
      </ScrollView>
      <BottomButton
        text={'중도 해지'}
        onPress={Actions.productOperationHistory}
      />
    </View>
  );
};

// 라인
const Line = (props) => <View bgDarkGray height={1} {...props} />;

// 상품 개요
const ProductOverview = (props) => (
  <View paddingTop={15} paddingLeft={15} paddingRight={15}>
    <ViewRow justifyContent={'space-between'} marginBottom={12}>
      <Text ftBlueyGray>{I18n.t('portfolio.myDepositAmount')}</Text>
      <Text ftWhite style={{bord: color.Theme}}>
        10.21380985 ETH
      </Text>
    </ViewRow>
    <ViewRow justifyContent={'space-between'} marginBottom={12}>
      <Text ftBlueyGray>{I18n.t('portfolio.estimatedAPR')}</Text>
      <Text ftGreen>12.07%</Text>
    </ViewRow>
    <ViewRow justifyContent={'space-between'} marginBottom={12}>
      <Text ftBlueyGray>{I18n.t('portfolio.startDayOfinvest')}</Text>
      <Text ftWhite>2021-04-01</Text>
    </ViewRow>
    <ViewRow justifyContent={'space-between'} marginBottom={12}>
      <Text ftBlueyGray>{I18n.t('portfolio.depositPeriod')}</Text>
      <Text ftWhite>15일</Text>
    </ViewRow>
    <ViewRow justifyContent={'space-between'} marginBottom={12}>
      <Text ftBlueyGray>{I18n.t('portfolio.expirationDate')}</Text>
      <Text ftWhite>2021-04-16</Text>
    </ViewRow>
    <ViewRow justifyContent={'space-between'} marginBottom={12}>
      <Text ftBlueyGray>{I18n.t('portfolio.paymentDate')}</Text>
      <Text ftWhite>2021-04-17</Text>
    </ViewRow>
    <ViewRow justifyContent={'space-between'} marginBottom={12}>
      <Text ftBlueyGray>{I18n.t('portfolio.title')}</Text>
      <Text ftGreen>0.98294039838</Text>
    </ViewRow>
  </View>
);

export default MyInfoDetailScreen;

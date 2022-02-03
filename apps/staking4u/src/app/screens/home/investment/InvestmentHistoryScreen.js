import React, { useState, useMemo } from 'react';
import {
  ScrollView,
  View,
  ViewRow,
  ViewBorderRadius,
} from '../../../components/styled/View';
import { Text } from '../../../components/styled/Text';
import { Image } from '../../../components/styled/Image';
import Line from '../../../components/line/Line';
import { FlatList } from 'react-native';
import { investmentHistory } from '../../../utils/dummy';
import History from '../../../components/items/investment/History';
import { Actions } from 'react-native-router-flux';

const InvestmentHistoryScreen = () => {
  const renderHistory = ({ item }) => {
    const onPressItem = () => {
      Actions.investmentHistoryDetailScreen({ item });
    };

    return <History {...item} onPress={onPressItem} />;
  };

  return (
    <View flex={1} marginTop={10} marginBottom={10}>
      <Line width={'100%'} height={1} />
      <View flex={5}>
        <FlatList
          data={investmentHistory}
          renderItem={renderHistory}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </View>
  );
};

export default InvestmentHistoryScreen;

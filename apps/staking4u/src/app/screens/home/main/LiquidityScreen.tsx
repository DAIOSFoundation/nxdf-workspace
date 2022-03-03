import React from 'react';
import { Actions } from 'react-native-router-flux';
import { FlatList } from 'react-native';
import { SafeAreaView, View, ViewRow } from '../../../components/styled/View';
import { Text } from '../../../components/styled/Text';
import { Image } from '../../../components/styled/Image';
import iconDownGray from '../../../assets/main/icon_down_gray.png';
import styled from 'styled-components/native';

import { LiquidityData, products } from '../../../utils/dummy';

import iconSeacrh from '../../../assets/main/icon_search_grey.png';
import LiquiditiyProduct from '../../../components/items/LiqudityPool/LiquidityProducts';


const InputView = styled(View)`
  background-color: rgb(49,56,103) ;
  width: 90%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  align-self: center;
  margin-right: 20px ;
`

const Input = styled.TextInput`
  font-size:24px ;
  color: white;
  background-color:rgb(49,56,103) ;
  width: 80%;
  
`



const LiquidityScreen = () => {
  const renderListHeader = () => {
    return (
      <ViewRow flex={1} marginBottom={10} justifyContent={'space-between'}>
        <ViewRow flex={2.5} alignsItems={'center'} paddingLeft={10}>
          <Text fontSize={13} ftBlueGray bold>
            Pool
          </Text>
          <Image source={iconDownGray} width={10} height={8} marginLeft={5} marginTop={5} />
        </ViewRow>
        <ViewRow
          flex={1}
          justifyContent={'flex-end'}
          alignItems={'center'}
          paddingRight={20}
        >
          <Image source={iconDownGray} width={10} height={8} marginRight={5} marginTop={5}/>
          <Text fontSize={13} ftBlueGray bold>
            Price
          </Text>
        </ViewRow>
        <ViewRow
          flex={2}
          justifyContent={'flex-end'}
          alignItems={'center'}
          paddingRight={20}
        >
          <Image source={iconDownGray} width={10} height={8} marginRight={5} marginTop={5}/>
          <Text fontSize={13} ftBlueGray bold>
            APR
          </Text>
        </ViewRow>
      </ViewRow>
    );
  };

  const renderProducts = ({ item }) => {
    const onPressItem = () => {
      Actions.LiquidityDetailScreen({ item });
    };

    return <LiquiditiyProduct {...item} onPress={onPressItem} />;
  };

  return (
    <SafeAreaView bgNavyTheme>
      <View
        flex={1}
        justifyContent={'center'}
        alignSelf={'center'}
        width={'96%'}
      >
        <InputView height={50} marginTop={20} marginLeft={10} flexDirection={'row'}>
          <Input>

          </Input>
          <Image source={iconSeacrh} width={35} height={35} marginRight={10}/>
        </InputView>
        <View flex={6} marginBottom={10}>
          <FlatList
            data={LiquidityData}
            renderItem={renderProducts}
            contentContainerStyle={
              products.length === 0 && {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }
            }
            ListHeaderComponent={renderListHeader}
            keyExtractor={(item) => String(item.id)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LiquidityScreen;

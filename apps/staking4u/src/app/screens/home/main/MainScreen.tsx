import React from 'react';
import { Actions } from 'react-native-router-flux';
import { FlatList } from 'react-native';
import Product from '../../../components/items/stake/Products';
import { SafeAreaView, View, ViewRow } from '../../../components/styled/View';
import { Text } from '../../../components/styled/Text';
import { Image } from '../../../components/styled/Image';
import { products } from '../../../utils/dummy';
import iconDownGray from '../../../assets/main/icon_down_gray.png';

const MainScreen = () => {
  const renderListHeader = () => {
    return (
      <ViewRow flex={1} marginBottom={10} justifyContent={'space-between'}>
        <ViewRow flex={2.5} alignItems={'center'} paddingLeft={10}>
          <Text fontSize={13} ftBlueGray bold>
            Product
          </Text>
          <Image source={iconDownGray} width={10} height={8} marginLeft={5} />
        </ViewRow>
        <ViewRow
          flex={1}
          justifyContent={'flex-end'}
          alignItems={'center'}
          paddingRight={20}
        >
          <Image source={iconDownGray} width={10} height={8} marginRight={5} />
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
          <Image source={iconDownGray} width={10} height={8} marginRight={5} />
          <Text fontSize={13} ftBlueGray bold>
            APR
          </Text>
        </ViewRow>
      </ViewRow>
    );
  };

  const renderProducts = ({ item }) => {
    const onPressItem = () => {
      Actions.flexibleDetailScreen({ item });
    };

    return <Product {...item} onPress={onPressItem} />;
  };

  return (
    <SafeAreaView bgNavyTheme>
      <View
        flex={1}
        justifyContent={'center'}
        alignSelf={'center'}
        width={'96%'}
      >
        <View height={50} marginTop={20} marginLeft={10}>
          <Text fontSize={24} ftWhite bold>
            Flexible
          </Text>
        </View>
        <View flex={6} marginBottom={10}>
          <FlatList
            data={products}
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

export default MainScreen;

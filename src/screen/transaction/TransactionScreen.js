import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

const TransactionScreen = () => {
  const {transactionList} = useSelector((state) => state.transaction);
  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={transactionList}
      renderItem={({item}) => {
        return (
          <View>
            <Text>{item.date}</Text>
            <Text>{item.total_amount.toLocaleString()}</Text>
            {item.items.map((val) => {
              if (val.productID === 1) {
                return <Text>Product : Apple, quantity: {val.quantity}</Text>;
              } else if (val.productID === 2) {
                return <Text>Product : Laptop, quantity: {val.quantity}</Text>;
              } else {
                return <Text>Product : T-Shirt, quantity: {val.quantity}</Text>;
              }
            })}
          </View>
        );
      }}
    />
  );
};

export default TransactionScreen;

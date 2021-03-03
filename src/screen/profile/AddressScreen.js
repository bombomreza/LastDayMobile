import React, {useState} from 'react';
import {Button, FlatList, Text, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {local} from '../../../localip';

const AddressScreen = (props) => {
  const {address} = useSelector((state) => state.auth);
  const [inputAddress, setInputAddress] = useState('');
  const handleSubmit = async () => {
    await axios.post(`${local}/user/address/${props.route.params.userID}`, {
      address: inputAddress,
    });
  };
  return (
    <View>
      <FlatList
        data={address}
        renderItem={({item, index}) => {
          return (
            <>
              <Text>Address {index + 1}</Text>
              <Text>{item.address}</Text>
            </>
          );
        }}
      />
      <TextInput onChangeText={(e) => setInputAddress(e)} />
      <Button title="Add Address" onPress={handleSubmit} />
    </View>
  );
};

export default AddressScreen;

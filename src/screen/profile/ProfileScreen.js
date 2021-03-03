import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import gambar from '../../assets/default.png';
import AddressScreen from './AddressScreen';

const ProfileScreen = ({navigation}) => {
  const {username, email, roleID, id} = useSelector((state) => state.auth);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <Image source={gambar} style={{height: 100, width: 100}} />
        </View>
        <View style={styles.infoContainer}>
          <Text>{username}</Text>
          <Text>{email}</Text>
          <Text>{roleID}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title="View Address"
          onPress={() => navigation.navigate('Address', {userID: id})}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topContainer: {
    flex: 0.25,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  bottomContainer: {
    flex: 0.75,
    backgroundColor: 'blue',
  },
  imageContainer: {
    flex: 0.25,
    // backgroundColor: 'red',
    justifyContent: 'center',
  },
  infoContainer: {
    flex: 0.75,
    justifyContent: 'center',
  },
});

export default ProfileScreen;

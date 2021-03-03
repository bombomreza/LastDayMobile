import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screen/profile/ProfileScreen';
import AddressScreen from '../screen/profile/AddressScreen';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Address" component={AddressScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

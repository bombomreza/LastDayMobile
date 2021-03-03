import React from 'react';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Button} from 'react-native';
import HomeNav from './HomeNav';
import ProfileStack from './ProfileStack';
import {useDispatch} from 'react-redux';
import {AUTH_LOGOUT} from '../redux/types';
import {primary_color} from '../screen/styles';
import TransactionScreen from '../screen/transaction/TransactionScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

const ProfileDrawer = () => {
  const dispatch = useDispatch();
  const handleLogoutBtn = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: AUTH_LOGOUT});
  };
  return (
    <Drawer.Navigator
      drawerContent={(route) => {
        return (
          <DrawerContentScrollView>
            <DrawerItemList {...route} />
            <Button
              title="Logout"
              onPress={handleLogoutBtn}
              color={primary_color}
            />
          </DrawerContentScrollView>
        );
      }}
      drawerPosition="right">
      <Drawer.Screen name="Home" component={HomeNav} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Transaction" component={TransactionScreen} />
    </Drawer.Navigator>
  );
};

export default ProfileDrawer;

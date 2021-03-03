import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FeedScreen from '../screen/product/FeedScreen';
import DetailScreen from '../screen/product/DetailScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {View} from 'react-native';
import {background_color, text_color} from '../screen/styles';
// import ProfileDrawer from './ProfileDrawer';

const Stack = createStackNavigator();

const ProductStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="ProductList">
      <Stack.Screen
        name="ProductList"
        component={FeedScreen}
        options={{
          title: '',
          headerRight: () => (
            <View>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Icon name="view-headline" type="material" color={text_color} />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            backgroundColor: background_color,
          },
        }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
      {/* <Stack.Screen name="ProfileDrawer" component={ProfileDrawer} /> */}
    </Stack.Navigator>
  );
};

export default ProductStack;

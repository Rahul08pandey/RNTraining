import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import SearchFeed from '../screens/SearchFeed';
import SearchUser from '../screens/SearchUser';
import DeleteAccount from '../screens/DeleteAccount';
import Logout from '../screens/Logout';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: () => <FontAwesome name="home" size={22} color="black" />,
        }}
      />

      <Drawer.Screen
        name="Search Feed"
        component={SearchFeed}
        options={{
          drawerIcon: () => (
            <FontAwesome name="search" size={22} color="black" />
          ),
        }}
      />

      <Drawer.Screen
        name="Search User"
        component={SearchUser}
        options={{
          drawerIcon: () => <FontAwesome name="user" size={22} color="black" />,
        }}
      />

      <Drawer.Screen
        name="Delete Account"
        component={DeleteAccount}
        options={{
          drawerIcon: () => <FontAwesome name="trash" size={22} color="red" />,
        }}
      />

      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerIcon: () => (
            <FontAwesome name="sign-out" size={22} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
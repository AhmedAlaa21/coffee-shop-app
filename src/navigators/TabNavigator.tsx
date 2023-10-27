import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//screens
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import CartScreen from '../screens/CartScreen';
import OrderHistory from '../screens/OrderHistoryScreen';
import CustomIcon from '../components/CustomIcon';

import {COLORS} from '../theme/theme';
import {BlurView} from '@react-native-community/blur';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={5}
            style={styles.BlurViewStyles}
          />
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <CustomIcon
                name="home"
                size={25}
                color={
                  focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <CustomIcon
                name="cart"
                size={25}
                color={
                  focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <CustomIcon
                name="like"
                size={25}
                color={
                  focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={OrderHistory}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <CustomIcon
                name="bell"
                size={25}
                color={
                  focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                }
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default TabNavigator;

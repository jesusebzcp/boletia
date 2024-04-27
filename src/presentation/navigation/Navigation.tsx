import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '@pr/screens/HomeScreen';

import {MainStackParamList, SCREEN_NAME} from './types';

const MainStack = createStackNavigator<MainStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={SCREEN_NAME.SPLASH_SCREEN}>
        <MainStack.Screen
          name={SCREEN_NAME.SPLASH_SCREEN}
          component={HomeScreen}
        />
        <MainStack.Screen
          name={SCREEN_NAME.PERMISSIONS_CONTACT}
          component={HomeScreen}
        />
        <MainStack.Screen name={SCREEN_NAME.HOME} component={HomeScreen} />
        <MainStack.Screen
          name={SCREEN_NAME.CONTACT_DETAIL}
          component={HomeScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

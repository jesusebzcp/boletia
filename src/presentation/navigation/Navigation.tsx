import 'react-native-gesture-handler';
import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '@pr/screens/HomeScreen';

import {MainStackParamList, SCREEN_NAME} from './types';
import {useContacts} from '@app/context/ContactContext';
import {PermissionsContactScreen} from '@pr/screens/PermissionsContactScreen';
import {SplashScreen} from '@pr/screens/SplashScreen';
import {ContactDetailScreen} from '@pr/screens/ContactDetailScreen';

const MainStack = createStackNavigator<MainStackParamList>();

export const Navigation = () => {
  const {permissionsActive} = useContacts();

  const showScreen = useMemo(() => {
    if (!permissionsActive) {
      return (
        <MainStack.Screen
          name={SCREEN_NAME.PERMISSIONS_CONTACT}
          component={PermissionsContactScreen}
        />
      );
    }

    return (
      <>
        <MainStack.Screen name={SCREEN_NAME.HOME} component={HomeScreen} />
        <MainStack.Screen
          name={SCREEN_NAME.CONTACT_DETAIL}
          component={ContactDetailScreen}
        />
      </>
    );
  }, [permissionsActive]);
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={SCREEN_NAME.SPLASH_SCREEN}>
        <MainStack.Screen
          name={SCREEN_NAME.SPLASH_SCREEN}
          component={SplashScreen}
        />
        {showScreen}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

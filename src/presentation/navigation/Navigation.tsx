import 'react-native-gesture-handler';
import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {MainStackParamList, SCREEN_NAME} from './types';
import {PermissionsContactScreen} from '@pr/screens/PermissionsContactScreen';
import {SplashScreen} from '@pr/screens/SplashScreen';
import {ContactDetailScreen} from '@pr/screens/ContactDetailScreen';
import {useContacts} from '@app/context';
import {BottomNavigation} from './BottomNavigation';

const MainStack = createStackNavigator<MainStackParamList>();

export const Navigation = () => {
  const {permissionsActive} = useContacts();

  const showScreen = useMemo(() => {
    if (permissionsActive) {
      return (
        <>
          <MainStack.Screen
            name={SCREEN_NAME.SPLASH_SCREEN}
            component={SplashScreen}
          />
          <MainStack.Screen
            name={SCREEN_NAME.HOME}
            component={BottomNavigation}
          />
          <MainStack.Screen
            name={SCREEN_NAME.CONTACT_DETAIL}
            component={ContactDetailScreen}
          />
        </>
      );
    }
    return (
      <MainStack.Screen
        name={SCREEN_NAME.PERMISSIONS_CONTACT}
        component={PermissionsContactScreen}
      />
    );
  }, [permissionsActive]);

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={SCREEN_NAME.SPLASH_SCREEN}>
        {showScreen}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

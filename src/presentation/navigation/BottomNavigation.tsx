import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '@pr/screens/HomeScreen';
import {GroupsScreen} from '@pr/screens/GroupsScreen';
import {SvgHome} from '@pr/assets/svg/SvgHome';
import {SvgGroups} from '@pr/assets/svg/SvgGroups';
import {COLORS} from '@pr/theme';

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  const _tabBarIconHome = useCallback(
    ({color}: {focused: boolean; color: string; size: number}) => (
      <SvgHome stroke={color} />
    ),
    [],
  );
  const _tabBarIconGroups = useCallback(
    ({color}: {focused: boolean; color: string; size: number}) => (
      <SvgGroups stroke={color} />
    ),
    [],
  );
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarIcon: _tabBarIconHome,
        }}
      />
      <Tab.Screen
        name="Grupos"
        component={GroupsScreen}
        options={{
          tabBarIcon: _tabBarIconGroups,
        }}
      />
    </Tab.Navigator>
  );
};

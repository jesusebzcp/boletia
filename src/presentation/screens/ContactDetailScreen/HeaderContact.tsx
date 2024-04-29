import {AppText, Avatar} from '@pr/components';
import {MainStackParamList, SCREEN_NAME} from '@pr/navigation/types';
import {METRICS} from '@pr/theme';
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const SIZE_AVATAR = METRICS.screenWidth * 0.3;

export const HeaderContact = () => {
  const route = useRoute<
    RouteProp<
      {
        params: MainStackParamList[SCREEN_NAME.CONTACT_DETAIL];
      },
      'params'
    >
  >();

  return (
    <View style={styles.header}>
      <Avatar
        size={SIZE_AVATAR}
        alt={route.params.contact.displayName}
        image={route.params.contact.thumbnailPath}
      />
      <AppText.H2>{route.params.contact.displayName}</AppText.H2>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React, {PropsWithChildren} from 'react';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';

import {IMAGES, METRICS} from '@pr/theme';

export const Container = ({children}: PropsWithChildren) => {
  return (
    <ImageBackground source={IMAGES.background_home} style={styles.background}>
      <SafeAreaView style={styles.safeAreaView} />
      {children}
      <SafeAreaView style={styles.safeAreaView} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    opacity: 0,
  },
  background: {
    height: null,
    width: METRICS.screenWidth,
    resizeMode: 'cover',
    overflow: 'hidden',
    flex: 1,
    paddingHorizontal: METRICS.spacingHorizontal,
  },
});

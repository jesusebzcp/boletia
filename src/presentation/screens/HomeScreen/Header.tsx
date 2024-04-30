import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';

import {SvgLogo} from '@pr/assets/svg/SvgLogo';
import {COLORS, IMAGES, METRICS} from '@pr/theme';
import {AppText} from '@pr/components';

import {SearchBar} from './SearchBar';

const SIZE_LOTTIE = METRICS.screenHeight * 0.5;

export const Header = () => {
  return (
    <View style={styles.content}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View style={styles.subHeader}>
        <SvgLogo />
        <View style={styles.svgImage}>
          <LottieView
            source={IMAGES.home_animation}
            style={styles.lottie}
            autoPlay
            resizeMode="contain"
            loop
          />
        </View>
      </View>
      <AppText.H5 color={COLORS.text_dark}>{'Bienvenido,'}</AppText.H5>
      <AppText.H3 weight="BOLD" color={COLORS.text_dark}>
        {'Usuario'}
      </AppText.H3>
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  lottie: {
    width: SIZE_LOTTIE,
    height: SIZE_LOTTIE,
  },
  svgImage: {
    position: 'absolute',
    transform: [{rotate: '220deg'}],
    top: -METRICS.screenHeight * 0.28,
    right: -METRICS.screenWidth * 0.32,
  },
  content: {
    paddingTop: METRICS.spacingVertical * 2,
  },
});

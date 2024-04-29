import React from 'react';
import {View, StyleSheet, StatusBar, Platform} from 'react-native';

import {SvgLogo} from '@pr/assets/svg/SvgLogo';
import {SvgMessage} from '@pr/assets/svg/SvgMessage';
import {AppText} from '@pr/components';
import {COLORS, METRICS} from '@pr/theme';
import {SearchBar} from './SearchBar';

export const Header = () => {
  return (
    <View style={styles.content}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={styles.subHeader}>
        <SvgLogo />
        <View style={styles.svgImage}>
          <SvgMessage />
        </View>
      </View>
      <View>
        <AppText.H5 color={COLORS.text_dark}>{'Bienvenido,'}</AppText.H5>
        <AppText.H3 weight="BOLD" color={COLORS.text_dark}>
          {'Usuario'}
        </AppText.H3>
        <SearchBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  svgImage: {
    position: 'absolute',
    right: -METRICS.screenWidth * 0.1,
    top: -METRICS.screenHeight * 0.1,
  },
  content: {
    paddingTop: Platform.select({
      ios: 0,
      android: 20,
    }),
  },
});

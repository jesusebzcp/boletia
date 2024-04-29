import {COLORS, METRICS} from '@pr/theme';
import React, {useMemo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {AppText} from '../AppText';
import type {AvatarProps} from './props';

const SIZE = METRICS.screenWidth * 0.14;

export const Avatar = ({alt, image, size = SIZE}: AvatarProps) => {
  const radius = useMemo(() => size / 2, [size]);
  const showImage = useMemo(() => {
    if (typeof image === 'undefined') {
      return (
        <AppText
          nativeProps={{
            adjustsFontSizeToFit: true,
            numberOfLines: 1,
            minimumFontScale: 0.1,
          }}>
          {alt.length > 0 ? alt[0] : 'A'}
        </AppText>
      );
    }
    return (
      <Image
        source={{
          uri: image,
        }}
      />
    );
  }, [alt, image]);

  return (
    <View
      style={[
        styles.circle,
        {
          width: size,
          height: size,
          borderRadius: radius,
        },
      ]}>
      {showImage}
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    backgroundColor: COLORS.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

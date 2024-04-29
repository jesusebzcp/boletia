/* eslint-disable no-bitwise */
import {COLORS, METRICS} from '@pr/theme';
import React, {useMemo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {AppText} from '../AppText';
import {AVATAR_COLORS} from './colors';
import type {AvatarProps} from './props';

const SIZE = METRICS.screenWidth * 0.12;

export const Avatar = ({alt, image, size = SIZE}: AvatarProps) => {
  const backgroundColor = useMemo(() => {
    const randomColorIndex = Math.floor(Math.random() * AVATAR_COLORS.length);
    const randomColor = AVATAR_COLORS[randomColorIndex];
    return randomColor;
  }, []);

  const textColor = useMemo(() => {
    const color = backgroundColor.substring(1);
    const rgb = parseInt(color, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    return luminance > 128 ? COLORS.text_dark : COLORS.text_light;
  }, [backgroundColor]);

  const radius = useMemo(() => size / 2, [size]);
  const showImage = useMemo(() => {
    if (typeof image === 'undefined' || !image?.trim()) {
      return (
        <AppText
          weight="BOLD"
          color={textColor}
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
        style={[
          styles.imageAvatar,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
          },
        ]}
        source={{
          uri: image,
        }}
      />
    );
  }, [alt, image, size, textColor]);

  return (
    <View
      style={[
        styles.circle,
        {
          width: size,
          height: size,
          borderRadius: radius,
          backgroundColor,
        },
      ]}>
      {showImage}
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageAvatar: {
    resizeMode: 'contain',
  },
});

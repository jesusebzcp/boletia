import {COLORS} from '@pr/theme';
import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {normalize} from './normalize';
import type {TextAppProps} from './props';

export const SIZE_TEXT = {
  H1: 24,
  H2: 20,
  H3: 18,
  H4: 16,
  H5: 14,
  H6: 12,
  TINI: 10,
};

const WEIGHT = {
  BOLD: 'bold',
  MEDIUM: 400,
  REGULAR: 'black',
};

export const AppText = ({
  children = '',
  style: styleProps = {},
  weight = 'REGULAR',
  align = 'auto',
  color,
  nativeProps,
}: TextAppProps) => {
  return (
    <Text
      style={[
        styleProps,
        {
          fontWeight: WEIGHT[weight] as any,
          textAlign: align,
          color: color ?? COLORS.text_dark,
        },
      ]}
      {...nativeProps}>
      {children}
    </Text>
  );
};

const textStyles = StyleSheet.create({
  h1: {
    fontSize: normalize(SIZE_TEXT.H1),
  },
  h2: {
    fontSize: normalize(SIZE_TEXT.H2),
  },
  h3: {
    fontSize: normalize(SIZE_TEXT.H3),
  },
  h4: {
    fontSize: normalize(SIZE_TEXT.H4),
  },
  h5: {
    fontSize: normalize(SIZE_TEXT.H5),
  },
  h6: {
    fontSize: normalize(SIZE_TEXT.H6),
    lineHeight: 18,
  },
  tini: {
    fontSize: normalize(SIZE_TEXT.TINI),
  },
});

const withDefaultStyle =
  (defaultStyle: TextStyle) =>
  (Component: React.FC<TextAppProps>) =>
  ({style, ...props}: TextAppProps) =>
    <Component style={[defaultStyle, style as any]} {...props} />;

AppText.H1 = withDefaultStyle(textStyles.h1)(AppText);
AppText.H2 = withDefaultStyle(textStyles.h2)(AppText);
AppText.H3 = withDefaultStyle(textStyles.h3)(AppText);
AppText.H4 = withDefaultStyle(textStyles.h4)(AppText);
AppText.H5 = withDefaultStyle(textStyles.h5)(AppText);
AppText.H6 = withDefaultStyle(textStyles.h6)(AppText);
AppText.TINI = withDefaultStyle(textStyles.tini)(AppText);
AppText.WEIGHT = WEIGHT;
AppText.SIZE = SIZE_TEXT;

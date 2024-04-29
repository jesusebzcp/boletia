import React from 'react';

import {COLORS} from '@pr/theme';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {AppText} from '../AppText';
import {AppButtonProps} from './props';

export const AppButton = ({
  children,
  customStyles = {},
  onPress,
  colorText = COLORS.text_light,
}: AppButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, customStyles]} onPress={onPress}>
      <AppText.H4 color={colorText} weight="MEDIUM">
        {children}
      </AppText.H4>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 46,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 12,
  },
});

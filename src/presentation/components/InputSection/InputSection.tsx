import {COLORS} from '@pr/theme';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from '../AppText';
import {InputSectionProps} from './props';

export const InputSection = ({label, value}: InputSectionProps) => {
  return (
    <View style={styles.content}>
      <AppText.H6 color={COLORS.gray}>{label}</AppText.H6>
      <AppText.H5>{value}</AppText.H5>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 18,
    borderColor: COLORS.grayInput,
    marginVertical: 10,
  },
});

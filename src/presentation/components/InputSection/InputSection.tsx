import {COLORS} from '@pr/theme';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {AppText} from '../AppText';
import {InputSectionProps} from './props';

export const InputSection = ({label, value, action}: InputSectionProps) => {
  return (
    <TouchableOpacity style={styles.content} onPress={action}>
      <AppText.H6 color={COLORS.gray}>{label}</AppText.H6>
      <AppText.H5>{value}</AppText.H5>
    </TouchableOpacity>
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

import {COLORS} from '@pr/theme';
import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {AppInputProps} from './props';

export const AppInput = ({
  ph,
  iconRight,
  nativeProps,
  onChangeText,
  value,
}: AppInputProps) => {
  return (
    <View style={styles.containerInput}>
      {iconRight}
      <TextInput
        {...nativeProps}
        style={styles.input}
        placeholder={ph}
        placeholderTextColor={COLORS.grayInput}
        selectionColor={COLORS.primary}
        value={value}
        onChangeText={onChangeText}
        cursorColor={COLORS.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    height: 56,
    borderRadius: 14,
    backgroundColor: COLORS.text_light,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingHorizontal: 10,
  },
  input: {
    height: 56,
  },
});

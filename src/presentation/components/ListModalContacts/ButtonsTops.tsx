import {COLORS} from '@pr/theme';
import React, {useCallback} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {AppButton} from '../AppButton';

export enum SELECT_BUTTON {
  RECENT,
  ALL,
}

type ButtonTopsProps = {
  select: SELECT_BUTTON;
  onChange(select: SELECT_BUTTON): void;
};

export const ButtonTops = ({onChange, select}: ButtonTopsProps) => {
  const onSelect = useCallback(
    (selectButton: SELECT_BUTTON) => onChange(selectButton),
    [onChange],
  );
  const activeOpacity = useCallback(
    (button: SELECT_BUTTON): ViewStyle => ({
      ...styles.button,
      ...(button !== select && {
        borderWidth: 1,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.bg_screen,
      }),
    }),
    [select],
  );
  const activeTextOpacity = useCallback(
    (button: SELECT_BUTTON): string =>
      button !== select ? COLORS.primary : COLORS.text_light,
    [select],
  );

  return (
    <View style={styles.content}>
      <AppButton
        colorText={activeTextOpacity(SELECT_BUTTON.RECENT)}
        customStyles={activeOpacity(SELECT_BUTTON.RECENT)}
        onPress={() => onSelect(SELECT_BUTTON.RECENT)}>
        {'Recientes'}
      </AppButton>
      <AppButton
        colorText={activeTextOpacity(SELECT_BUTTON.ALL)}
        customStyles={activeOpacity(SELECT_BUTTON.ALL)}
        onPress={() => onSelect(SELECT_BUTTON.ALL)}>
        {'Todos'}
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  button: {
    height: 36,
    marginHorizontal: 10,
  },
});

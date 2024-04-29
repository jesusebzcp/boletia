import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
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
    (button: SELECT_BUTTON) => ({
      ...styles.button,
      opacity: button === select ? 1 : 0.5,
    }),
    [select],
  );

  return (
    <View style={styles.content}>
      <AppButton
        customStyles={activeOpacity(SELECT_BUTTON.RECENT)}
        onPress={() => onSelect(SELECT_BUTTON.RECENT)}>
        {'Recientes'}
      </AppButton>
      <AppButton
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

import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {AppText} from '@pr/components';
import {COLORS} from '@pr/theme';

const SIZE_BUTTON = 40;

type Action = {
  label: string;
  action(): void;
  Svg: React.ReactNode;
};

type ListActionProps = {
  actions: Action[];
};

export const ListAction = ({actions}: ListActionProps) => {
  return (
    <View style={styles.container}>
      {actions.map(action => (
        <View style={styles.item} key={action.label}>
          <TouchableOpacity style={styles.button} onPress={action.action}>
            {action.Svg}
          </TouchableOpacity>
          <AppText.H6 style={styles.label}>{action.label}</AppText.H6>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  button: {
    height: SIZE_BUTTON,
    width: SIZE_BUTTON,
    borderRadius: SIZE_BUTTON * 0.3,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.grayInput,
    padding: 10,
  },
  item: {
    alignItems: 'center',
  },
  label: {
    marginTop: 8,
  },
});

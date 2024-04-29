import {COLORS} from '@pr/theme';
import {METRICS} from '@pr/theme/metrics';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {AppText} from '../AppText';
import {AppHeaderProps} from './props';
import {SvgArrowBack} from './SvgArrowBack';

export const AppHeader = ({title}: AppHeaderProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
        <SvgArrowBack />
      </TouchableOpacity>
      <AppText.H2 color={COLORS.text_dark} weight="MEDIUM">
        {title}
      </AppText.H2>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: METRICS.spacingVertical,
  },
  button: {
    height: 36,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    borderRadius: 8,
    marginRight: 20,
  },
});

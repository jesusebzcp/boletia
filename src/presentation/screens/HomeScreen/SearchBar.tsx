import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';

import {AppInput} from '@pr/components/AppInput';
import {SvgSearch} from '@pr/assets/svg/SvgSearch';

export const SearchBar = () => {
  const _iconRight = useMemo(() => <SvgSearch />, []);
  return (
    <View style={styles.content}>
      <AppInput
        ph={'Buscar cualquier numero'}
        nativeProps={{
          keyboardType: 'name-phone-pad',
        }}
        iconRight={_iconRight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginVertical: 10,
  },
});

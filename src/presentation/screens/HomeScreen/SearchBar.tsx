import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';

import {AppInput} from '@pr/components/AppInput';
import {SvgSearch} from '@pr/assets/svg/SvgSearch';
import {useSearch} from '@app/context/SearchContext';

export const SearchBar = () => {
  const {searchQuery, setSearchQuery} = useSearch();
  const _iconRight = useMemo(() => <SvgSearch />, []);
  return (
    <View style={styles.content}>
      <AppInput
        ph={'Buscar cualquier numero'}
        nativeProps={{
          keyboardType: 'name-phone-pad',
        }}
        iconRight={_iconRight}
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginVertical: 20,
    zIndex: 3,
  },
});

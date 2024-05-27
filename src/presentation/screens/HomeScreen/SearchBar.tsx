import React, {useMemo} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {AppInput} from '@pr/components';
import {SvgSearch} from '@pr/assets/svg/SvgSearch';
import {useContacts, useSearch} from '@app/context';
import {COLORS} from '@pr/theme';

export const SearchBar = () => {
  const {searchQuery, setSearchQuery} = useSearch();
  const {isLoadingQueryContacts} = useContacts();
  const _iconRight = useMemo(() => <SvgSearch />, []);
  const _iconLeft = useMemo(
    () =>
      isLoadingQueryContacts ? (
        <ActivityIndicator animating color={COLORS.primary} />
      ) : null,
    [isLoadingQueryContacts],
  );
  return (
    <View style={styles.content}>
      <AppInput
        ph={'Buscar cualquier numero'}
        nativeProps={{
          keyboardType: 'name-phone-pad',
        }}
        iconRight={_iconRight}
        iconLeft={_iconLeft}
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

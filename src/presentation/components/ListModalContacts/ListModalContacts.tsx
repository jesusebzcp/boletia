import React, {useCallback, useMemo, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Contact as ContactType} from 'react-native-contacts';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';

import {useSearch} from '@app/context/SearchContext';
import {COLORS, METRICS} from '@pr/theme';

import {ButtonTops, SELECT_BUTTON} from './ButtonsTops';
import {ListModalContactsProps} from './props';

import {AppText} from '../AppText';
import {Contact} from '../Contact';

const cleanKeyword = (keyword: string) => keyword?.toLowerCase()?.trim();

export const ListModalContacts = ({
  contacts,
  recentList,
}: ListModalContactsProps) => {
  const sheetRef = useRef<BottomSheet>(null);
  const {searchQuery} = useSearch();

  const [selectButton, setSelectButton] = useState(SELECT_BUTTON.RECENT);

  const snapPoints = useMemo(() => ['40%', '60%'], []);

  const ItemSeparatorComponent = useCallback(
    () => <View style={styles.separator} />,
    [],
  );

  const renderItem = useCallback(({item}) => <Contact {...item} />, []);
  const keyExtractor = useCallback((_, i) => i, []);
  const ListEmptyComponent = useCallback(
    () => (
      <View style={styles.emptyContent}>
        <AppText>{'No hay nada por aquí.'}</AppText>
      </View>
    ),
    [],
  );

  const filterSearch = useCallback(
    (contactsList: ContactType[]) => {
      if (searchQuery.length > 2) {
        return contactsList.filter(c =>
          cleanKeyword(c.displayName)?.includes(cleanKeyword(searchQuery)),
        );
      }
      return contactsList;
    },
    [searchQuery],
  );

  const contactsFilter = useMemo(() => {
    if (selectButton === SELECT_BUTTON.ALL) {
      return contacts;
    }
    return recentList;
  }, [contacts, recentList, selectButton]);

  return (
    <BottomSheet ref={sheetRef} snapPoints={snapPoints} style={styles.content}>
      <AppText.H4 weight="BOLD">{'Mis contactos'}</AppText.H4>
      <ButtonTops select={selectButton} onChange={setSelectButton} />
      <BottomSheetFlatList
        data={filterSearch(contactsFilter)}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListEmptyComponent={ListEmptyComponent}
        maxToRenderPerBatch={20}
        initialNumToRender={10}
        removeClippedSubviews
      />
    </BottomSheet>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
  content: {
    paddingHorizontal: METRICS.spacingHorizontal,
  },
  separator: {
    marginVertical: 10,
    borderColor: COLORS.gray,
  },
  emptyContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
});

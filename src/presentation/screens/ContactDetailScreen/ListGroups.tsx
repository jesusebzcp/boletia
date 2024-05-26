import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Group} from '../GroupsScreen/components/Molecules/Group';
import {COLORS} from '@pr/theme';
import {AppText} from '@pr/components';
import {GROUPS} from '@app/constants';

type ListGroupsProps = {
  onSelect(id: string): void;
};

export const ListGroups = ({onSelect}: ListGroupsProps) => {
  return (
    <View style={styles.content}>
      <View style={styles.badge} />
      <AppText.H3 weight="BOLD" style={styles.title}>
        {'Selecciona un grupo'}
      </AppText.H3>

      <FlatList
        data={GROUPS}
        renderItem={({item}) => (
          <Group title={item.title} onSelect={() => onSelect(item.title)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: COLORS.bg_screen,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingBottom: 20,
  },
  badge: {
    backgroundColor: COLORS.grayInput,
    height: 8,
    width: 40,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 40,
    marginBottom: 10,
  },
  title: {
    marginLeft: 10,
  },
});

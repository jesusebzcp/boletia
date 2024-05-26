import React, {useCallback, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useContacts} from '@app/context';
import {AppText, Avatar} from '@pr/components';
import {COLORS} from '@pr/theme';
import {useFocusEffect} from '@react-navigation/native';

export type GroupProps = {
  title: string;
  onSelect(): void;
};

export const Group = ({title, onSelect}: GroupProps) => {
  const {findContactByGroups} = useContacts();
  const [contacts, setContacts] = useState([]);

  const handleSelect = useCallback(() => {
    onSelect();
  }, [onSelect]);

  useFocusEffect(
    React.useCallback(() => {
      findContactByGroups(title).then(setContacts);
    }, [findContactByGroups, title]),
  );

  return (
    <TouchableOpacity style={styles.group} onPress={handleSelect}>
      <Avatar alt={title} />
      <View>
        <AppText.H4 weight="MEDIUM" style={styles.title}>
          {title}
        </AppText.H4>
        <AppText.H6 weight="MEDIUM" style={styles.title}>
          {contacts.length > 0
            ? `${contacts.length} participante`
            : 'No hay participantes 😪'}
        </AppText.H6>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  group: {
    backgroundColor: COLORS.bg_screen,
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
  },
});

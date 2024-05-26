import React from 'react';
import {FlatList} from 'react-native';
import {Group} from '../Molecules/Group';
import {Title} from '../Atoms/Title';

const groups = [
  {
    title: 'Familia',
    contacts: [],
  },
  {
    title: 'Amigos',
    contacts: [],
  },
  {
    title: 'Trabajo',
    contacts: [],
  },
];

export const GroupsOrganisms = () => {
  return (
    <FlatList
      ListHeaderComponent={Title}
      data={groups}
      renderItem={({item}) => (
        <Group
          onSelect={function (): void {
            throw new Error('Function not implemented.');
          }}
          {...item}
        />
      )}
    />
  );
};

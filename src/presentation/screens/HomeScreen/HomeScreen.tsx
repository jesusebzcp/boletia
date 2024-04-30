import React from 'react';
import {Container, ListModalContacts} from '@pr/components';
import {useContacts} from '@app/context';

import {Header} from './Header';

export const HomeScreen = () => {
  const {contacts, recentContacts} = useContacts();
  return (
    <Container>
      <Header />
      <ListModalContacts recentList={recentContacts} contacts={contacts} />
    </Container>
  );
};

import React from 'react';
import {Container} from '@pr/components/Container';

import {Header} from './Header';
import {ListModalContacts} from '@pr/components';
import {useContacts} from '@app/context/ContactContext';

export const HomeScreen = () => {
  const {contacts, recentContacts} = useContacts();
  return (
    <Container>
      <Header />
      <ListModalContacts recentList={recentContacts} contacts={contacts} />
    </Container>
  );
};

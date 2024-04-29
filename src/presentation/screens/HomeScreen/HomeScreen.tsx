import React from 'react';
import {Container} from '@pr/components/Container';

import {Header} from './Header';
import {ListModalContacts} from '@pr/components';
import {useContacts} from '@app/context/ContactContext';

export const HomeScreen = () => {
  const {contacts} = useContacts();
  return (
    <Container>
      <Header />
      <ListModalContacts contacts={contacts} />
    </Container>
  );
};

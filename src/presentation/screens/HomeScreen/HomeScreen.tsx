import React from 'react';
import {Container} from '@pr/components/Container';

import {Header} from './Header';
import {ListModalContacts} from '@pr/components';

export const HomeScreen = () => {
  return (
    <Container>
      <Header />
      <ListModalContacts />
    </Container>
  );
};

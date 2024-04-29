import React from 'react';
import {Navigation} from '@pr/navigation/Navigation';
import {ContactProvider} from '@app/context';

export default function App() {
  return (
    <ContactProvider>
      <Navigation />
    </ContactProvider>
  );
}

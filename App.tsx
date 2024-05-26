import React from 'react';
import {Navigation} from '@pr/navigation/Navigation';
import {ContactProvider, SearchProvider} from '@app/context';

export default function App() {
  return (
    <SearchProvider>
      <ContactProvider>
        <Navigation />
      </ContactProvider>
    </SearchProvider>
  );
}

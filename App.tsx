import React from 'react';
import {Navigation} from '@pr/navigation/Navigation';
import {ContactProvider} from '@app/context/ContactContext';
import {SearchProvider} from '@app/context/SearchContext';

export default function App() {
  return (
    <ContactProvider>
      <SearchProvider>
        <Navigation />
      </SearchProvider>
    </ContactProvider>
  );
}

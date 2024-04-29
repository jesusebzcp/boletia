import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
  useMemo,
  useContext,
  useCallback,
} from 'react';
import {Contact} from 'react-native-contacts';
import {ContactContextType} from './props';
import {usePermissionsContacts} from '@app/hooks/usePermissionsContacts';

export const ContactContext = createContext<ContactContextType | undefined>(
  undefined,
);

export const ContactProvider = ({children}: PropsWithChildren) => {
  const [contacts] = useState<Contact[]>([]);
  const [permissionsActive, setPermissionsActive] = useState(false);
  const {checkPermissionsContacts, requestPermissionsContacts} =
    usePermissionsContacts();

  const requestPermissionsContact = useCallback(() => {
    requestPermissionsContacts(setPermissionsActive);
  }, [requestPermissionsContacts]);

  useEffect(() => {
    checkPermissionsContacts(setPermissionsActive);
  }, [checkPermissionsContacts]);

  const valueContext = useMemo(
    () => ({
      contacts,
      permissionsActive,
      requestPermissionsContact,
    }),
    [contacts, permissionsActive, requestPermissionsContact],
  );

  return (
    <ContactContext.Provider value={valueContext}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContacts = (): ContactContextType => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContacts must be used within a FavoriteEventsProvider');
  }
  return context;
};

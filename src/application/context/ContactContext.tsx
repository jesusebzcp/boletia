import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
  useMemo,
  useContext,
  useCallback,
} from 'react';
import {Alert} from 'react-native';
import Contacts, {Contact} from 'react-native-contacts';
import {usePermissionsContacts} from '@app/hooks/usePermissionsContacts';

import {ContactContextType} from './props';

export const ContactContext = createContext<ContactContextType | undefined>(
  undefined,
);

export const ContactProvider = ({children}: PropsWithChildren) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [permissionsActive, setPermissionsActive] = useState(false);

  const {checkPermissionsContacts, requestPermissionsContacts} =
    usePermissionsContacts();

  const handleFindContacts = useCallback(async () => {
    try {
      const response = await Contacts.getAll();
      setContacts(response);
    } catch (error) {
      Alert.alert(
        'Ups',
        'Ocurrió un error inesperado en obtener los contactos',
      );
    }
  }, []);

  const requestPermissionsContact = useCallback(() => {
    requestPermissionsContacts(setPermissionsActive);
  }, [requestPermissionsContacts]);

  useEffect(() => {
    checkPermissionsContacts(setPermissionsActive);
  }, [checkPermissionsContacts]);

  useEffect(() => {
    if (permissionsActive) {
      handleFindContacts();
    }
  }, [handleFindContacts, permissionsActive]);

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

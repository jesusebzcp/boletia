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
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as _ from 'lodash';
import dayjs from 'dayjs';

import {usePermissionsContacts} from '@app/hooks/usePermissionsContacts';

import {ContactContextType} from './props';
import {Contact, getContacts} from '@jesusebzcp/react-native-rncalendar';
import {useSearch} from '../SearchContext';

export const ContactContext = createContext<ContactContextType | undefined>(
  undefined,
);

const CONTACT_KEY = 'contacts';

export const ContactProvider = ({children}: PropsWithChildren) => {
  const {searchQuery} = useSearch();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [recentContacts, setRecentContacts] = useState<Contact[]>([]);
  const [permissionsActive, setPermissionsActive] = useState(false);

  const {checkPermissionsContacts, requestPermissionsContacts} =
    usePermissionsContacts();

  const handleFindContacts = useCallback(async () => {
    try {
      const response = await getContacts(searchQuery);
      console.log('response', response);
      setContacts(response);
    } catch (error) {
      Alert.alert(
        'Ups',
        'Ocurrió un error inesperado en obtener los contactos',
      );
    }
  }, [searchQuery]);

  const requestPermissionsContact = useCallback(() => {
    requestPermissionsContacts(setPermissionsActive);
  }, [requestPermissionsContacts]);

  const loadRecent = useCallback(async () => {
    const dataString = await AsyncStorage.getItem(CONTACT_KEY);
    const allContactRecent =
      typeof dataString === 'undefined'
        ? []
        : (JSON.parse(dataString) as Contact[]);
    setRecentContacts(_.orderBy(allContactRecent, 'createAt', 'desc'));
  }, []);

  const updateContactRecent = useCallback(
    async (parsedContacts: Contact[], newContact: Contact) => {
      const cleanContact = parsedContacts.filter(c => c.id !== newContact.id);
      const updateContacts = [
        ...cleanContact,
        {...newContact, createAt: dayjs().toDate()},
      ];
      await AsyncStorage.setItem(CONTACT_KEY, JSON.stringify(updateContacts));
      loadRecent();
      return;
    },
    [loadRecent],
  );

  const saveRecent = useCallback(
    async (newContact: Contact) => {
      //Load contacts
      const currentContacts = await AsyncStorage.getItem(CONTACT_KEY);
      const parsedContacts = (JSON.parse(currentContacts) as Contact[]) || [];
      const findContact = parsedContacts.find(c => c.id === newContact.id);

      if (findContact) {
        updateContactRecent(parsedContacts, newContact);
        return;
      }

      const updateContacts = [
        ...parsedContacts,
        {...newContact, createAt: dayjs().toDate()},
      ];
      await AsyncStorage.setItem(CONTACT_KEY, JSON.stringify(updateContacts));
      loadRecent();
    },
    [loadRecent, updateContactRecent],
  );

  useEffect(() => {
    checkPermissionsContacts(setPermissionsActive);
    loadRecent();
  }, [checkPermissionsContacts, loadRecent]);

  useEffect(() => {
    if (permissionsActive) {
      handleFindContacts();
    }
  }, [handleFindContacts, permissionsActive]);

  const valueContext = useMemo(
    () => ({
      contacts,
      recentContacts,
      permissionsActive,
      requestPermissionsContact,
      saveRecent,
    }),
    [
      contacts,
      permissionsActive,
      recentContacts,
      requestPermissionsContact,
      saveRecent,
    ],
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

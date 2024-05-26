import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
  useMemo,
  useContext,
  useCallback,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as _ from 'lodash';
import dayjs from 'dayjs';

import {usePermissionsContacts} from '@app/hooks/usePermissionsContacts';

import {ContactContextType} from './props';
import {Contact} from '@jesusebzcp/rn-contacts';
import {useSearch} from '../SearchContext';
import {useContactsQuery} from '@infra/useContactsQuery';

export const ContactContext = createContext<ContactContextType | undefined>(
  undefined,
);

const CONTACT_KEY = 'contacts';

export const ContactProvider = ({children}: PropsWithChildren) => {
  const {searchQuery} = useSearch();
  const [recentContacts, setRecentContacts] = useState<Contact[]>([]);

  const {
    permissionsActive,
    isLoadingCheck,
    checkPermissionsContacts,
    requestPermissionsContacts,
  } = usePermissionsContacts();

  const {contacts, isLoadingQueryContacts} = useContactsQuery({
    searchQuery,
    permissionsActive,
  });

  const requestPermissionsContact = useCallback(() => {
    requestPermissionsContacts();
  }, [requestPermissionsContacts]);

  //Recants

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

  //Groups
  const saveContactByGroup = useCallback(
    async (groupId: string, contact: Contact) => {
      const allContactByGroupsString = await AsyncStorage.getItem(groupId);
      const allContactByGroups = JSON.parse(allContactByGroupsString) || [];
      const updateGroups = [...allContactByGroups, contact];
      await AsyncStorage.setItem(groupId, JSON.stringify(updateGroups));
    },
    [],
  );
  const findContactByGroups = useCallback(
    async (groupId: string): Promise<Contact[]> => {
      const allContactByGroupsString = await AsyncStorage.getItem(groupId);
      const allContactByGroups = JSON.parse(allContactByGroupsString) || [];
      return allContactByGroups;
    },
    [],
  );

  useEffect(() => {
    loadRecent();
  }, [checkPermissionsContacts, loadRecent]);

  const valueContext = useMemo(
    () => ({
      contacts,
      recentContacts,
      permissionsActive,
      isLoadingQueryContacts,
      isLoadingCheck,
      requestPermissionsContact,
      saveRecent,

      saveContactByGroup,
      findContactByGroups,
    }),
    [
      contacts,
      recentContacts,
      permissionsActive,
      isLoadingQueryContacts,
      isLoadingCheck,
      requestPermissionsContact,
      saveRecent,
      saveContactByGroup,
      findContactByGroups,
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

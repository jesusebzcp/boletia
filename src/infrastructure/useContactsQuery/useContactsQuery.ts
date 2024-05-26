import {useCallback, useEffect, useState} from 'react';
import {Contact, getContacts} from '@jesusebzcp/rn-contacts';
import {Alert} from 'react-native';

type useContactsQueryProps = {
  searchQuery: string;
  permissionsActive: boolean;
};

export const useContactsQuery = ({searchQuery}: useContactsQueryProps) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFindContacts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getContacts(searchQuery);
      console.log('response', response);
      setContacts(response);
    } catch (error) {
      Alert.alert(
        'Ups',
        'Ocurrió un error inesperado en obtener los contactos',
      );
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    handleFindContacts();
  }, [handleFindContacts]);

  return {
    contacts,
    isLoadingQueryContacts: loading,
  };
};

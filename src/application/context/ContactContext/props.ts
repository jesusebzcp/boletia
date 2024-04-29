import {ReactNode} from 'react';
import {Contact} from 'react-native-contacts';

export type ContactContextType = {
  contacts: Contact[];
  recentContacts: Contact[];
  permissionsActive: boolean;
  requestPermissionsContact(): void;
  saveRecent(contact: Contact): void;
};
export type ContactProvider = {
  children?: ReactNode[] | undefined;
};

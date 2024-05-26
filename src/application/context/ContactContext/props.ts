import {Contact} from '@jesusebzcp/react-native-rncalendar';
import {ReactNode} from 'react';

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

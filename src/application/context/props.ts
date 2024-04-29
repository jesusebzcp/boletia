import {ReactNode} from 'react';
import {Contact} from 'react-native-contacts';

export type ContactContextType = {
  contacts: Contact[];
  permissionsActive: boolean;
  requestPermissionsContact(): void;
};
export type ContactProvider = {
  children?: ReactNode[] | undefined;
};

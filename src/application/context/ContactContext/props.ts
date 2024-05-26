import {Contact} from '@jesusebzcp/rn-contacts';
import {ReactNode} from 'react';

export type ContactContextType = {
  contacts: Contact[];
  recentContacts: Contact[];
  permissionsActive: boolean;
  isLoadingQueryContacts: boolean;
  isLoadingCheck: boolean;

  requestPermissionsContact(): void;
  saveRecent(contact: Contact): void;

  saveContactByGroup(groupId: string, contact: Contact): void;
  findContactByGroups(groupId: string): Promise<Contact[]>;
};
export type ContactProvider = {
  children?: ReactNode[] | undefined;
};

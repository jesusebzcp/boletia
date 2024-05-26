import {useCallback} from 'react';

import {
  checkPermissions,
  requestContactsPermission,
} from '@jesusebzcp/react-native-rncalendar';

export const usePermissionsContacts = () => {
  const checkPermissionsContacts = useCallback(
    async (setValue: (value: boolean) => void) => {
      const permissions = await checkPermissions();
      console.log('permissions', permissions);
      setValue(permissions);
    },
    [],
  );
  const requestPermissionsContacts = useCallback(
    async (setValue: (value: boolean) => void) => {
      const permissions = await requestContactsPermission();
      setValue(permissions);
    },
    [],
  );

  return {
    checkPermissionsContacts,
    requestPermissionsContacts,
  };
};

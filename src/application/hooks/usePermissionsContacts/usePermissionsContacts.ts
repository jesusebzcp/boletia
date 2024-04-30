import {useCallback} from 'react';
import {Platform} from 'react-native';

import {PERMISSIONS, check, request} from 'react-native-permissions';

export const usePermissionsContacts = () => {
  const checkPermissionsContacts = useCallback(
    async (setValue: (value: boolean) => void) => {
      try {
        const checkPermissions = Platform.select({
          android: () => check(PERMISSIONS.ANDROID.READ_CONTACTS),
          ios: () => check(PERMISSIONS.IOS.CONTACTS),
        });
        const response = (await checkPermissions()) as PermissionState;
        setValue(response === 'granted');
      } catch (error) {
        setValue(false);
      }
    },
    [],
  );
  const requestPermissionsContacts = useCallback(
    async (setValue: (value: boolean) => void) => {
      try {
        const requestPermissions = Platform.select({
          android: () => request(PERMISSIONS.ANDROID.READ_CONTACTS),
          ios: () => request(PERMISSIONS.IOS.CONTACTS),
        });
        const response = (await requestPermissions()) as PermissionState;
        console.log('response', response);
        setValue(response === 'granted');
      } catch (error) {
        console.log('error', error);
        setValue(false);
      }
    },
    [],
  );

  return {
    checkPermissionsContacts,
    requestPermissionsContacts,
  };
};

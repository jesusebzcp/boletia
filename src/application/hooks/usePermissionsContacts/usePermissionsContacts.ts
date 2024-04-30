import {useCallback} from 'react';
import {Platform} from 'react-native';

import {PERMISSIONS, check, request} from 'react-native-permissions';

export const usePermissionsContacts = () => {
  const checkPermissionsContacts = useCallback(
    async (set: (value: boolean) => void) => {
      try {
        const checkPermissions = Platform.select({
          android: () => check(PERMISSIONS.ANDROID.READ_CONTACTS),
          ios: () => check(PERMISSIONS.IOS.CONTACTS),
        });
        const response = (await checkPermissions()) as PermissionState;
        set(response === 'granted');
      } catch (error) {
        set(false);
      }
    },
    [],
  );
  const requestPermissionsContacts = useCallback(
    async (set: (value: boolean) => void) => {
      try {
        const requestPermissions = Platform.select({
          android: () => request(PERMISSIONS.ANDROID.READ_CONTACTS),
          ios: () => request(PERMISSIONS.IOS.CONTACTS),
        });
        const response = (await requestPermissions()) as PermissionState;
        console.log('response', response);
        set(response === 'granted');
      } catch (error) {
        console.log('error', error);
        set(false);
      }
    },
    [],
  );

  return {
    checkPermissionsContacts,
    requestPermissionsContacts,
  };
};
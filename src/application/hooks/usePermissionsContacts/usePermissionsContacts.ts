import {useCallback, useEffect, useState} from 'react';

import {
  checkPermissions,
  requestContactsPermission,
} from '@jesusebzcp/rn-contacts';

export const usePermissionsContacts = () => {
  const [permissionsActive, setPermissionsActive] = useState(false);
  const [isLoadingCheck, setIsLoadingCheck] = useState(false);

  const checkPermissionsContacts = useCallback(async () => {
    try {
      setIsLoadingCheck(true);
      const permissions = await checkPermissions();
      setPermissionsActive(permissions);
    } catch (error) {
      setPermissionsActive(false);
    } finally {
      setIsLoadingCheck(false);
    }
  }, []);

  const requestPermissionsContacts = useCallback(async () => {
    const permissions = await requestContactsPermission();
    setPermissionsActive(permissions);
  }, []);

  useEffect(() => {
    checkPermissionsContacts();
  }, [checkPermissionsContacts]);

  return {
    checkPermissionsContacts,
    requestPermissionsContacts,
    permissionsActive,
    isLoadingCheck,
  };
};

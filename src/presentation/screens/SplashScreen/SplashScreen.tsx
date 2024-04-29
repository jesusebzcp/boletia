import React, {useCallback, useEffect} from 'react';
import {AppText} from '@pr/components';
import {SplashScreenProps} from './props';
import {SCREEN_NAME} from '@pr/navigation/types';
import {useContacts} from '@app/context/ContactContext/ContactContext';

export const SplashScreen = ({navigation}: SplashScreenProps) => {
  const {permissionsActive} = useContacts();

  const handleNavigate = useCallback(() => {
    setTimeout(() => {
      navigation.navigate(
        permissionsActive ? SCREEN_NAME.HOME : SCREEN_NAME.PERMISSIONS_CONTACT,
      );
    }, 2000);
  }, [navigation, permissionsActive]);

  useEffect(() => {
    handleNavigate();
  }, [handleNavigate]);

  return <AppText>{'SplashScreen'}</AppText>;
};

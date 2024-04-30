import React, {useCallback, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

import {IMAGES, METRICS} from '@pr/theme';
import {AppText} from '@pr/components';
import {useContacts} from '@app/context';
import {SCREEN_NAME} from '@pr/navigation/types';

import {SplashScreenProps} from './props';

const WIDTH_LOTTIE = METRICS.screenWidth * 0.3;

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

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <LottieView
          source={IMAGES.splash_screen_animation}
          style={styles.lottie}
          autoPlay
          loop
        />
        <AppText align="center" style={styles.phrase}>
          {'Si nunca se habla de una cosa, es como si nunca fuera sucedido💖'}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: WIDTH_LOTTIE,
    height: WIDTH_LOTTIE,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  phrase: {
    marginHorizontal: METRICS.spacingHorizontal * 2,
  },
});

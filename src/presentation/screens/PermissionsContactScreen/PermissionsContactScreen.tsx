import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import {AppButton, AppText} from '@pr/components';
import {SvgContact} from '@pr/assets/svg/SvgContact';
import {useContacts} from '@app/context/ContactContext';
import {COLORS, METRICS} from '@pr/theme';

export const PermissionsContactScreen = () => {
  const {requestPermissionsContact} = useContacts();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <SvgContact />
        </View>
        <View style={styles.body}>
          <AppText.H2 weight="BOLD">{'Permisos'}</AppText.H2>
          <View style={styles.separator} />
          <AppText.H5>
            {
              'Para continuar necesitamos permisos para acceder a tus contactos y poder usar esta aplicación.'
            }
          </AppText.H5>
        </View>
        <View style={styles.footer}>
          <AppButton onPress={requestPermissionsContact}>
            {'Obtener permisos'}
          </AppButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg_screen,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: METRICS.spacingHorizontal,
  },
  footer: {
    height: METRICS.screenHeight * 0.1,
    paddingBottom: 10,
  },
  separator: {
    marginVertical: 10,
  },
});

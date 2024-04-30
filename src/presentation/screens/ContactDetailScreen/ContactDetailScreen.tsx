import React, {useCallback, useMemo} from 'react';
import {Linking, Platform, SafeAreaView, StyleSheet, View} from 'react-native';
import Share from 'react-native-share';

import {AppHeader, InputSection} from '@pr/components';
import {METRICS} from '@pr/theme';

import {SvgCall} from '@pr/assets/svg/SvgCall';
import {SvgShared} from '@pr/assets/svg/SvgShared';
import {SvgMessage} from '@pr/assets/svg/SvgMessage';

import {HeaderContact} from './HeaderContact';
import {ListAction} from './ListAction';

import {ContactDetailScreenProps} from './props';

export const ContactDetailScreen = ({route}: ContactDetailScreenProps) => {
  const contact = route.params.contact;

  const onCall = useCallback(() => {
    Linking.openURL(`tel:${contact.phoneNumbers[0].number}`);
  }, [contact.phoneNumbers]);

  const onSendSMSMessage = useCallback(async () => {
    const separator = Platform.OS === 'ios' ? '&' : '?';
    const message = 'Esta prueba esta buena.';
    const url = `sms:${contact.phoneNumbers[0].number}${separator}body=${message}`;
    Linking.openURL(url);
  }, [contact.phoneNumbers]);

  const onSharedContact = useCallback(async () => {
    Share.open({
      message: `Mira este contacto => ${contact.displayName} ${contact.phoneNumbers[0].number}`,
    });
  }, [contact.displayName, contact.phoneNumbers]);

  const listActions = useMemo(
    () => [
      {
        label: 'Llamar',
        action: onCall,
        Svg: <SvgCall />,
      },
      {
        label: 'Enviar mensaje',
        action: onSendSMSMessage,
        Svg: <SvgMessage />,
      },
      {
        label: 'Compartir',
        action: onSharedContact,
        Svg: <SvgShared />,
      },
    ],
    [onCall, onSendSMSMessage, onSharedContact],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <AppHeader title={'Detalle de contacto'} />
        <HeaderContact />
        <ListAction actions={listActions} />
        {contact.phoneNumbers.map((phoneNumber, index) => {
          return (
            <InputSection
              key={phoneNumber.number}
              label={`Numero celular ${index + 1}`}
              value={phoneNumber.number}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: METRICS.spacingHorizontal,
  },
});

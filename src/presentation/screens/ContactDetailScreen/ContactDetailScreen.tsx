import React, {useCallback, useMemo, useState} from 'react';
import {Linking, Platform, SafeAreaView, StyleSheet, View} from 'react-native';
import Share from 'react-native-share';

import {AppHeader, InputSection} from '@pr/components';
import {COLORS, METRICS} from '@pr/theme';

import {SvgShared} from '@pr/assets/svg/SvgShared';
import {SvgMessage} from '@pr/assets/svg/SvgMessage';
import {SvgGroups} from '@pr/assets/svg/SvgGroups';

import {HeaderContact} from './HeaderContact';
import {ListAction} from './ListAction';

import {ContactDetailScreenProps} from './props';
import {ModalGroups} from './ModalGroups';
import {useContacts} from '@app/context';

export const ContactDetailScreen = ({route}: ContactDetailScreenProps) => {
  const {saveContactByGroup} = useContacts();
  const contact = route.params.contact;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const switchModal = useCallback(() => {
    setIsModalOpen(prev => !prev);
  }, []);

  const onCall = useCallback(() => {
    Linking.openURL(`tel:${contact.phoneNumber}`);
  }, [contact.phoneNumber]);

  const onSendSMSMessage = useCallback(async () => {
    const separator = Platform.OS === 'ios' ? '&' : '?';
    const message = 'Esta prueba esta buena.';
    const url = `sms:${contact.phoneNumber}${separator}body=${message}`;
    Linking.openURL(url);
  }, [contact.phoneNumber]);

  const onSharedContact = useCallback(async () => {
    Share.open({
      message: `Mira este contacto => ${contact.name} ${contact.phoneNumber}`,
    });
  }, [contact.name, contact.phoneNumber]);

  const addGroup = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const listActions = useMemo(
    () => [
      {
        label: 'Agregar a grupo',
        action: addGroup,
        Svg: <SvgGroups stroke={COLORS.primary} />,
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
    [addGroup, onSendSMSMessage, onSharedContact],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <AppHeader title={'Detalle de contacto'} />
        <HeaderContact />
        <ListAction actions={listActions} />
        <InputSection
          key={contact.phoneNumber}
          label={'Numero celular'}
          value={contact.phoneNumber}
          action={onCall}
        />
        <ModalGroups
          isVisible={isModalOpen}
          onSelect={function (id: string): void {
            saveContactByGroup(id, contact);
          }}
          close={switchModal}
        />
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

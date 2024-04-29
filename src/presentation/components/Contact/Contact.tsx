import React, {useCallback, useMemo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';

import {MainStackParamList, SCREEN_NAME} from '@pr/navigation/types';
import {SvgRight} from '@pr/assets/svg/SvgRight';
import {COLORS} from '@pr/theme';

import {AppText} from '../AppText';
import {Avatar} from '../Avatar';
import {ContactProps} from './props';
import {useContacts} from '@app/context/ContactContext/ContactContext';

export const Contact = (props: ContactProps) => {
  const {saveRecent} = useContacts();
  const {displayName, phoneNumbers, thumbnailPath} = props;

  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const navigateToDetail = useCallback(() => {
    saveRecent(props);
    navigation.navigate(SCREEN_NAME.CONTACT_DETAIL, {
      contact: props,
    });
  }, [navigation, props, saveRecent]);

  const phoneNumber = useMemo(() => {
    if (phoneNumbers.length > 0) {
      const mainPhoneNumber = phoneNumbers[0];
      return `📞 ${mainPhoneNumber.number} ● ${
        props.createAt
          ? dayjs(props.createAt).format('DD/MM/YYYY hh:mm')
          : mainPhoneNumber?.label.toUpperCase()
      }`;
    }
    return '';
  }, [phoneNumbers, props.createAt]);

  return (
    <TouchableOpacity style={styles.content} onPress={navigateToDetail}>
      <Avatar alt={displayName} image={thumbnailPath} />
      <View style={styles.information}>
        <AppText weight="BOLD">{displayName}</AppText>
        <AppText color={COLORS.gray}>{phoneNumber}</AppText>
      </View>
      <View>
        <SvgRight />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  information: {
    marginLeft: 10,
    flex: 1,
  },
});

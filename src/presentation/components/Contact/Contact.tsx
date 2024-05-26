import React, {useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {useContacts} from '@app/context';
import {MainStackParamList, SCREEN_NAME} from '@pr/navigation/types';

import {SvgRight} from '@pr/assets/svg/SvgRight';
import {COLORS} from '@pr/theme';

import {AppText} from '../AppText';
import {Avatar} from '../Avatar';
import {ContactProps} from './props';

export const Contact = (props: ContactProps) => {
  const {saveRecent} = useContacts();
  const {image, name, phoneNumber} = props;

  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const navigateToDetail = useCallback(() => {
    saveRecent(props);
    navigation.navigate(SCREEN_NAME.CONTACT_DETAIL, {
      contact: props,
    });
  }, [navigation, props, saveRecent]);

  return (
    <TouchableOpacity style={styles.content} onPress={navigateToDetail}>
      <Avatar alt={name} image={image} />
      <View style={styles.information}>
        <AppText weight="BOLD">{name}</AppText>
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

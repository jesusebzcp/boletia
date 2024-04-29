import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Contact as ContactType} from 'react-native-contacts';
import {SvgRight} from '@pr/assets/svg/SvgRight';

import {AppText} from '../AppText';
import {Avatar} from '../Avatar';

export const Contact = ({
  displayName,
  phoneNumbers,
  thumbnailPath,
}: ContactType) => {
  const phoneNumber = useMemo(() => {
    if (phoneNumbers.length > 0) {
      const mainPhoneNumber = phoneNumbers[0];
      return `📞 ${
        mainPhoneNumber.number
      } ● ${mainPhoneNumber?.label.toUpperCase()}`;
    }
    return '';
  }, [phoneNumbers]);
  return (
    <View style={styles.content}>
      <Avatar alt={displayName} image={thumbnailPath} />
      <View style={styles.information}>
        <AppText weight="BOLD">{displayName}</AppText>
        <AppText>{phoneNumber}</AppText>
      </View>
      <View>
        <SvgRight />
      </View>
    </View>
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

import {SvgRight} from '@pr/assets/svg/SvgRight';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from '../AppText';
import {Avatar} from '../Avatar';

export const Contact = () => {
  return (
    <View style={styles.content}>
      <Avatar alt={'Jesus Bri'} />
      <View style={styles.information}>
        <AppText>{'Jesus'}</AppText>
        <AppText>{'📞 Jesus'}</AppText>
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

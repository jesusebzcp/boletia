import {Contact} from '@jesusebzcp/react-native-rncalendar';

export enum SCREEN_NAME {
  SPLASH_SCREEN = 'SPLASH_SCREEN',
  PERMISSIONS_CONTACT = 'PERMISSIONS_CONTACT',
  HOME = 'HOME',
  CONTACT_DETAIL = 'CONTACT_DETAIL',
}
export type MainStackParamList = {
  [SCREEN_NAME.SPLASH_SCREEN]?: {};
  [SCREEN_NAME.PERMISSIONS_CONTACT]?: {};
  [SCREEN_NAME.HOME]?: {};
  [SCREEN_NAME.CONTACT_DETAIL]?: {
    contact: Contact;
  };
};

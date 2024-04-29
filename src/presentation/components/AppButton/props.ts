import {ViewStyle} from 'react-native/types';

export type AppButtonProps = {
  children: string;
  colorText?: string;
  customStyles?: ViewStyle;
  onPress(): void;
};

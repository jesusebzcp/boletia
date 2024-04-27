import {TextProps, TextStyle} from 'react-native/types';

export interface TextAppProps {
  children?: React.ReactNode;
  color?: string;
  style?: TextStyle | TextStyle[];
  weight?: 'BOLD' | 'MEDIUM' | 'REGULAR';
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  nativeProps?: TextProps;
}

import {Contact} from 'react-native-contacts';

export interface ContactProps extends Contact {
  createAt?: Date;
}

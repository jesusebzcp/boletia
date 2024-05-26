import {NativeModules, Platform} from 'react-native';

const LINKING_ERROR =
  "The package 'react-native-rncontacts' doesn't seem to be linked. Make sure: \n\n" +
  Platform.select({ios: "- You have run 'pod install'\n", default: ''}) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const RNContacts = NativeModules.RNContacts
  ? NativeModules.RNContacts
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      },
    );

export type Contact = {
  name: string;
  phoneNumber: string;
  image: string;
};

type RequestContactsPermission = () => Promise<boolean>;
type GetContacts = (search?: string) => Promise<Contact[]>;

export const requestContactsPermission: RequestContactsPermission =
  async () => {
    try {
      const granted = await RNContacts.requestContactsPermission();
      console.log('granted', granted, Platform.OS);
      return granted;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

export const getContacts: GetContacts = async (search?: string) => {
  const valueSearch = search || '';
  try {
    const contacts = await RNContacts.getContacts(valueSearch);
    return contacts;
  } catch (error) {
    console.error(error);
    return [];
  }
};

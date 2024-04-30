import {useEffect, useState} from 'react';
import {Keyboard, KeyboardEventListener} from 'react-native';

export const useKeyboard = () => {
  const [shown, setShown] = useState(false);

  const handleKeyboardDidShow: KeyboardEventListener = () => {
    setShown(true);
  };

  const handleKeyboardDidHide: KeyboardEventListener = () => {
    setShown(false);
  };

  useEffect(() => {
    const subscriptions = [
      Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow),
      Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide),
    ];

    return () => {
      subscriptions.forEach(subscription => subscription.remove());
    };
  }, []);

  return {
    keyboardShown: shown,
  };
};

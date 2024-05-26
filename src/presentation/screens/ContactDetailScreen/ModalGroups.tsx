import React, {useCallback} from 'react';
import Modal from 'react-native-modal';
import {ListGroups} from './ListGroups';
import {StyleSheet} from 'react-native';

type ModalGroupsProps = {
  isVisible: boolean;
  onSelect(id: string): void;
  close(): void;
};

export const ModalGroups = ({isVisible, onSelect, close}: ModalGroupsProps) => {
  const handleSelect = useCallback(
    (id: string) => {
      onSelect(id);
      close();
    },
    [close, onSelect],
  );

  return (
    <Modal isVisible={isVisible} onBackdropPress={close} style={styles.modal}>
      <ListGroups onSelect={handleSelect} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
});

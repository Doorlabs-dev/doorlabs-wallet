import React from 'react';
import RNModal from 'react-native-modal';
import styled from 'styled-components/native';
import colors from '@styles/colors';
import IconClose from '@assets/svg/icon_close.svg';

type Props = {
  visible: boolean;
  onClose: () => void;
  children: any;
};

const Modal = styled(RNModal)`
  margin: 0 16px;
`;

const Float = styled.TouchableOpacity`
  position: absolute;
  top: 24px;
  right: 24px;
`;

const ModalContainer = styled.View`
  align-self: center;
  width: 100%;
  border-radius: 12px;
  background-color: ${colors.greyScale800};
  padding: 24px 24px;
`;

const PopupModal = ({ visible, onClose, children }: Props) => {
  return (
    <Modal
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating
      isVisible={visible}
      animationIn="fadeIn"
      animationOut="fadeOut"
      onBackdropPress={onClose}
    >
      <ModalContainer>
        {children}
        <Float onPress={onClose}>
          <IconClose />
        </Float>
      </ModalContainer>
    </Modal>
  );
};

export default PopupModal;

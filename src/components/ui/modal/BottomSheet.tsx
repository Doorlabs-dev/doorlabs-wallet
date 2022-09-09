import Modal from 'react-native-modal';
import React from 'react';
import styled from 'styled-components/native';
import colors from '@styles/colors';

type Props = {
  visible: boolean;
  onClose: () => void;
  children: any;
};

const BottomModal = styled(Modal)`
  justify-content: flex-end;
  margin: 0;
`;

const ModalContainer = styled.View`
  width: 100%;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: ${colors.greyScale800};
  padding: 0px 24px;
`;

const Indicator = styled.View`
  width: 80px;
  height: 7px;
  border-radius: 26px;
  margin: 16px 0px;
  background-color: ${colors.greyScale600};
  align-self: center;
`;

const Footer = styled.View`
  height: 34px;
`;

const BottomSheet = ({ visible, onClose, children }: Props) => {
  return (
    <BottomModal
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating
      isVisible={visible}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection={['down']}
      animationIn="slideInUp"
      animationOut="slideOutDown"
    >
      <ModalContainer>
        <Indicator />
        {children}
        <Footer />
      </ModalContainer>
    </BottomModal>
  );
};

export default BottomSheet;

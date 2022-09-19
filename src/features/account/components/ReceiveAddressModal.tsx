import React from 'react';
import BottomSheet from '@components/ui/modal/BottomSheet';
import QRCode from 'react-native-qrcode-svg';
import { Spacer } from '@components/layout';
import { ShortAddress } from '@components/ui';
import styled from 'styled-components/native';
import colors from '@styles/colors';

type Props = {
  visible: boolean;
  onClose: () => void;
  address: string;
  exploreUrl: string;
};

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

const ReceiveAddressModal = ({
  visible,
  onClose,
  address,
  exploreUrl,
}: Props) => {
  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <Wrapper>
        <Spacer height={36} />
        <QRCode size={200} value={exploreUrl} />
        <Spacer height={16} />
        <ShortAddress color={colors.white} address={address} />
        <Spacer height={20} />
      </Wrapper>
    </BottomSheet>
  );
};

export default ReceiveAddressModal;

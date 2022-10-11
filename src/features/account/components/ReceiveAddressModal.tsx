import React, { useMemo } from 'react';
import BottomSheet from '@components/ui/modal/BottomSheet';
import QRCode from 'react-native-qrcode-svg';
import { Spacer } from '@components/layout';
import { ShortAddress } from '@components/ui';
import styled from 'styled-components/native';
import colors from '@styles/colors';
import { getChecksumAddress } from '@utils/getChecksumAddress';

type Props = {
  visible: boolean;
  onClose: () => void;
  address: string;
};

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

const QRBox = styled.View`
  width: 250px;
  height: 250px;
  background-color: ${colors.white};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

const ReceiveAddressModal = ({ visible, onClose, address }: Props) => {
  const checksumAddress = useMemo(() => {
    return getChecksumAddress(address);
  }, [address]);
  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <Wrapper>
        <Spacer height={36} />
        <QRBox>
          <QRCode size={200} value={checksumAddress} />
        </QRBox>
        <Spacer height={16} />
        <ShortAddress color={colors.white} address={address} />
        <Spacer height={20} />
      </Wrapper>
    </BottomSheet>
  );
};

export default ReceiveAddressModal;

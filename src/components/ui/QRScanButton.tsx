import React from 'react';
import styled from 'styled-components/native';
import QRScannerIcon from '@assets/svg/qr_scanner.svg';
import useCameraPermission from '@hooks/useCameraPermission';
import useModal from '@hooks/useModal';
import QrScannerModal from './QrScannerModal';

type Props = {
  onQRFound: (code: string | undefined) => void;
};

const ScanButton = styled.TouchableOpacity`
  position: absolute;
  top: 0px;
  right: 16px;
  bottom: 0px;
  justify-content: center;
  align-items: center;
`;

const QRScanButton = ({ onQRFound }: Props) => {
  const { checkPermission } = useCameraPermission();
  const { visible, open, close } = useModal();

  const openScanner = async () => {
    if (await checkPermission()) {
      open();
    }
  };

  return (
    <>
      <ScanButton onPress={openScanner}>
        <QRScannerIcon />
      </ScanButton>
      <QrScannerModal
        visible={visible}
        onClose={close}
        onQRFound={(code) => {
          close();
          onQRFound(code);
        }}
      />
    </>
  );
};

export default React.memo(QRScanButton);

import React from 'react';
import { CustomModalProps } from '@hooks/useModal';
import {
  Camera,
  useCameraDevices,
  useFrameProcessor,
} from 'react-native-vision-camera';
import { BarcodeFormat, scanBarcodes } from 'vision-camera-code-scanner';
import { runOnJS } from 'react-native-reanimated';
import { Dimensions, StyleSheet, View } from 'react-native';
import RNModal from 'react-native-modal';
import styled from 'styled-components/native';
import IconClose from '@assets/svg/icon_close.svg';
import QRPlaceholder from '@assets/svg/qr_placeholder.svg';

type Props = {
  onQRFound: (code: string | undefined) => void;
} & CustomModalProps;

const Modal = styled(RNModal)`
  margin: 0;
`;

const { height } = Dimensions.get('window');

const Container = styled.View`
  width: 100%;
  height: ${height - 50}px;
`;

const Float = styled.TouchableOpacity`
  position: absolute;
  top: 24px;
  right: 24px;
`;

const QrScannerModal = ({ visible, onClose, onQRFound }: Props) => {
  const devices = useCameraDevices();
  const device = devices.back;

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet';
    const detectedBarcodes = scanBarcodes(frame, [BarcodeFormat.QR_CODE], {
      checkInverted: true,
    });

    if (detectedBarcodes.length) {
      runOnJS(onQRFound)(detectedBarcodes[0]?.rawValue);
    }
  }, []);

  return (
    <Modal
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating
      isVisible={visible}
      animationIn="fadeIn"
      animationOut="fadeOut"
      onBackdropPress={onClose}
      style={{ margin: 0 }}
    >
      <Container>
        {!!device && (
          <Camera
            isActive={visible}
            device={device}
            style={StyleSheet.absoluteFill}
            frameProcessor={frameProcessor}
            frameProcessorFps={5}
          />
        )}
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <QRPlaceholder />
        </View>

        <Float onPress={onClose}>
          <IconClose />
        </Float>
      </Container>
    </Modal>
  );
};

export default QrScannerModal;

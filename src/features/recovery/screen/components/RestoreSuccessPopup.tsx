import React from 'react';
import PopupModal from '@components/ui/modal/PopupModal';
import { CustomModalProps } from '@hooks/useModal';
import { Column, Spacer } from '@components/layout';
import { PrimaryButton, Text } from '@components/ui';
import colors from '@styles/colors';
import { Image } from 'react-native';

type Props = CustomModalProps & {};

const RestoreSuccessPopup = (props: Props) => {
  return (
    <PopupModal {...props}>
      <Column alignItems="center">
        <Image
          source={require('assets/images/recovery/icon_shield.png')}
          style={{ width: 60, height: 60 }}
        />
        <Text color={colors.white} size={20} lineHeight={30}>
          Wallet has been restored successfully!
        </Text>
        <Spacer height={24} />
        <PrimaryButton label="OK" onPress={() => props.onClose()} />
      </Column>
    </PopupModal>
  );
};

export default RestoreSuccessPopup;

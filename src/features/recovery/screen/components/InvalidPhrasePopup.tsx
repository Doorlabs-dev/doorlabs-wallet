import React from 'react';
import PopupModal from '@components/ui/modal/PopupModal';
import IconWarning from '@assets/svg/onboarding/icon_warning.svg';
import { CustomModalProps } from '@hooks/useModal';
import { Column, Spacer } from '@components/layout';
import { PrimaryButton, Text } from '@components/ui';
import colors from '@styles/colors';
import { Image } from 'react-native';

type Props = CustomModalProps & {};

const InvalidPhrasePopup = (props: Props) => {
  return (
    <PopupModal {...props}>
      <Column alignItems="center">
        <Image
          source={require('assets/images/icon_danger.png')}
          style={{ width: 65, height: 45 }}
        />
        <Spacer height={20} />
        <Text color={colors.white} size={20} lineHeight={30}>
          Error
        </Text>
        <Spacer height={16} />
        <Text color={colors.white} size={16} lineHeight={24}>
          Invalid Recovery Phrase
        </Text>
        <Spacer height={24} />
        <PrimaryButton label="OK" onPress={() => props.onClose()} />
      </Column>
    </PopupModal>
  );
};

export default InvalidPhrasePopup;

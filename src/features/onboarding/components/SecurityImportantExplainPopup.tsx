import React from 'react';
import { CustomModalProps } from '@hooks/useModal';
import PopupModal from '@components/ui/modal/PopupModal';
import { Column, Spacer } from '@components/layout';
import IconProtect from '@assets/svg/onboarding/icon_protect.svg';
import { Text } from '@components/ui';
import colors from '@styles/colors';
import { Image } from 'react-native';

type Props = CustomModalProps & {};

const SecurityImportantExplainPopup = (props: Props) => {
  return (
    <PopupModal {...props}>
      <Column alignItems="center">
        <Image
          source={require('assets/images/onboarding/icon_protect.png')}
          style={{ width: 75, height: 75 }}
        />
        <Spacer height={16} />
        <Text
          weight={600}
          textAlign="center"
          color={colors.white}
          size={20}
          lineHeight={30}
        >
          Protect your wallet
        </Text>
        <Spacer height={24} />
        <Text size={16} lineHeight={24} color={colors.greyScale300}>
          Don't risk losing your funds. Protect your wallet by saving your
          Secret Recovery Phrase in a place you trust. It's the only way to
          recover your wallet if you get locked out of the app or get a new
          device.
        </Text>
      </Column>
    </PopupModal>
  );
};

export default SecurityImportantExplainPopup;

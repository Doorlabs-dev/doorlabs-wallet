import React, { useState } from 'react';
import PopupModal from '@components/ui/modal/PopupModal';
import { CustomModalProps } from '@hooks/useModal';
import IconWarning from '@assets/svg/onboarding/icon_warning.svg';
import { Column, Row, Spacer } from '@components/layout';
import { PrimaryButton, SecondaryButton, Text } from '@components/ui';
import colors from '@styles/colors';
import { Checkbox } from '@components/ui/Checkbox';
import { View } from 'react-native';
import styled from 'styled-components/native';

type Props = CustomModalProps & {
  onSkip: () => void;
};

const Flex = styled.View`
  flex: 1;
`;

const SkipVerifyPhrasePopup = (props: Props) => {
  const [checked, setChecked] = useState(false);

  return (
    <PopupModal {...props}>
      <Column alignItems="center">
        <IconWarning />
        <Text color={colors.white} size={20} lineHeight={30}>
          Skip Account Securiry
        </Text>
        <Spacer height={24} />
        <Row alignItems="flex-start">
          <View>
            <Spacer height={6} />
            <Checkbox checked={checked} onChange={setChecked} />
          </View>
          <Spacer width={16} />
          <Text size={16} lineHeight={24}>
            I understand that if I lose my{'\n'}Recovery Phrase I will not be
            able to{'\n'}access my wallet.
          </Text>
        </Row>
        <Spacer height={24} />
        <Row>
          <Flex>
            <SecondaryButton
              color={colors.white}
              title="Skip"
              onPress={() => {
                if (!checked) return;
                props.onSkip();
              }}
            />
          </Flex>
          <Spacer width={16} />
          <Flex>
            <PrimaryButton label="Secure now" onPress={() => props.onClose()} />
          </Flex>
        </Row>
      </Column>
    </PopupModal>
  );
};

export default SkipVerifyPhrasePopup;

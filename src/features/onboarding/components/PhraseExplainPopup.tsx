import React from 'react';
import PopupModal from '@components/ui/modal/PopupModal';
import { CustomModalProps } from '@hooks/useModal';
import { Column, Container, Spacer } from '@components/layout';
import styled from 'styled-components/native';
import { Text } from '@components/ui';
import colors from '@styles/colors';

type Props = CustomModalProps & {};

const Image = styled.Image`
  width: 64px;
  height: 54px;
`;

const PhraseExplainPopup = (props: Props) => {
  return (
    <PopupModal {...props}>
      <Column alignItems="center">
        <Image source={require('@assets/images/onboarding/information.png')} />
        <Spacer height={13} />
        <Text textAlign="center" color={colors.white} size={20} lineHeight={30}>
          What is a 'Secret Recovery{'\n'} Phrase'
        </Text>
        <Spacer height={24} />
        <Text size={16} lineHeight={24} color={colors.greyScale300}>
          A Secret Recovery Phrase is a set of twelve words that contains all
          the information about your wallet, including your funds. It's like a
          secret code used to access your entire wallet. You must keep your
          Secret Recovery Phrase secret and safe. If someone gets your Secret
          Recovery Phrase, they'll gain control over your accounts. Save it in a
          place where only you can access it. If you lose it, not even we can
          help you recover it.
        </Text>
      </Column>
    </PopupModal>
  );
};

export default PhraseExplainPopup;

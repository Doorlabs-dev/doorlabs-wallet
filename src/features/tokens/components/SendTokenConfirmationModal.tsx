import React from 'react';
import PopupModal from '@components/ui/modal/PopupModal';
import { CustomModalProps } from '@hooks/useModal';
import {
  PrimaryButton,
  SecondaryButton,
  ShortAddress,
  Text,
} from '@components/ui';
import { Account } from '@features/account/account.model';
import { Column, Row, Spacer } from '@components/layout';
import generateAccountName from '@utils/generateAccountName';
import { Token } from '@services/tokens/token.model';
import IconConfirmation from '@assets/svg/icon_confirmation.svg';
import colors from '@styles/colors';
import styled from 'styled-components/native';

type Props = CustomModalProps & {
  account?: Account;
  token: Token;
  amount: string;
  recipient: string;
  onApprove: () => void;
  isLoading?: boolean;
};

const Flex = styled.View`
  flex: 1;
`;

const SendTokenConfirmationModal = ({
  account,
  recipient,
  amount,
  token,
  onApprove,
  isLoading = false,
  ...rest
}: Props) => {
  return (
    <PopupModal closeIconVisible={false} {...rest}>
      <Column>
        <Row justifyContent="center">
          <IconConfirmation />
        </Row>
        <Row justifyContent="space-between">
          <Text size={16}>Account</Text>
          <Text size={16} color={colors.white}>
            {generateAccountName(account).name}
          </Text>
        </Row>
        <Spacer height={24} />
        <Row justifyContent="space-between">
          <Text size={16}>Network</Text>
          <Text size={16} color={colors.white}>
            {account?.network?.name}
          </Text>
        </Row>
        <Spacer height={24} />
        <Row justifyContent="space-between">
          <Text size={16}>Amount</Text>
          <Text size={16} color={colors.white}>
            {amount} ETH
          </Text>
        </Row>
        <Spacer height={24} />
        <Row alignItems="center" justifyContent="space-between">
          <Text>Recipient's address</Text>
          <ShortAddress
            size={16}
            lineHeight={24}
            color={colors.white}
            address={recipient}
          />
        </Row>
        <Spacer height={24} />

        <Row>
          <Flex>
            <SecondaryButton
              color={colors.white}
              title="Reject"
              onPress={isLoading ? () => null : rest.onClose}
            />
          </Flex>
          <Flex>
            <PrimaryButton
              loading={isLoading}
              label="Approve"
              onPress={async () => {
                await onApprove();
                rest.onClose();
              }}
            />
          </Flex>
        </Row>
      </Column>
    </PopupModal>
  );
};

export default SendTokenConfirmationModal;

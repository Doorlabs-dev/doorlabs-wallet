import React from 'react';
import { Container, Spacer } from '@components/layout';
import AddAccountSvg from '@assets/svg/account/add_account.svg';
import { Text } from '@components/ui';
import colors from '@styles/colors';
import AddAccountButton from './AddAccountButton';

type Props = {};

const NoAccount = (props: Props) => {
  return (
    <Container center={false} alignItems="center">
      <Spacer height={54} />
      <AddAccountSvg />
      <Spacer height={24} />
      <Text size={14} lineHeight={24} weight={400} color={colors.greyScale300}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a
      </Text>
      <Spacer height={24} />
      <AddAccountButton />
    </Container>
  );
};

export default NoAccount;
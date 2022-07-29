import React from 'react';
import { TextInput } from '../../components/form';
import { Container, Spacer } from '../../components/layout';
import { Button, Title } from '../../components/ui';

type Props = {};

const CreateWalletPasswordScreen = () => {
  return (
    <Container>
      <Title>Create your wallet password</Title>
      <Spacer height={32} />
      <TextInput secureTextEntry placeholder="Password" />
      <Spacer height={32} />
      <TextInput secureTextEntry placeholder="Password confirmation" />
      <Spacer height={32} />
      <Button>
        <Title size={20}>Confirm</Title>
      </Button>
    </Container>
  );
};

export default CreateWalletPasswordScreen;

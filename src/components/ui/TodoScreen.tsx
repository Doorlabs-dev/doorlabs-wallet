import React from 'react';
import { Container, SafeArea } from '@components/layout';
import Text from './Text';

type Props = {};

const TodoScreen = (props: Props) => {
  return (
    <SafeArea>
      <Container>
        <Text size={24}>TodoScreen</Text>
      </Container>
    </SafeArea>
  );
};

export default TodoScreen;

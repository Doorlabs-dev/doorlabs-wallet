import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { Container } from '../../components/layout';
import { colors } from '../../styles';

type Props = {};

const SplashScreen = (props: Props) => {
  return (
    <Container>
      <ActivityIndicator color={colors.white} />
    </Container>
  );
};

export default SplashScreen;

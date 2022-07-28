import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Container } from '../components/layout';
import useAccount from '../services/account';

const HomeScreen = () => {
  const { createAccount, isLoading, account } = useAccount();
  return (
    <Container>
      <Text>{account?.address}</Text>
      {isLoading && <ActivityIndicator />}
      <TouchableOpacity
        onPress={async () => {
          await createAccount();
        }}
      >
        <Text>Create Account</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default HomeScreen;

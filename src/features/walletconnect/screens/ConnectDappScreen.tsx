import React from 'react';
import { Column, Container, Row, Spacer } from '@components/layout';
import { useRecoilValue } from 'recoil';
import selectedAccountState from '@features/account/selected-account.state';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import generateAccountName from '@utils/generateAccountName';
import { PrimaryButton, ShortAddress, Text } from '@components/ui';
import styled from 'styled-components/native';
import OutlinedButton from '@components/ui/button/OutlinedButton';
import { DAppMeta } from '@services/walletconnect/walletconnect.action';
import colors from '@styles/colors';
import { ScreenNavigationProps } from '@router/navigation-props';
import { addNewDApp } from '@services/walletconnect/connectedDappsStore.store';
import Toast from 'react-native-root-toast';
import WalletConnectActionLinkHandler from '@services/walletconnect/walletConnectActionLinkHandler.service';

type Props = {};

type ParamsList = {
  'connect-dapp': {
    dAppMeta: DAppMeta;
  };
};

const Flex = styled.View`
  flex: 1;
`;

const ConnectDappScreen = (props: Props) => {
  const selectedAccount = useRecoilValue(selectedAccountState);
  const route = useRoute<RouteProp<ParamsList, 'connect-dapp'>>();
  const dAppMeta = route?.params?.dAppMeta;
  const navigation = useNavigation<ScreenNavigationProps<any>>();

  const onReject = async () => {
    navigation.goBack();
    await WalletConnectActionLinkHandler.respond(dAppMeta, {
      action: 'connect-dapp',
      result: {
        account: undefined,
        error: 'Connect request rejected',
      },
    });
  };

  const onApprove = async () => {
    await addNewDApp({
      meta: dAppMeta,
      account: {
        address: selectedAccount!.address,
        networkId: selectedAccount!.networkId,
      },
    });
    Toast.show('Successfully connected', {
      position: Toast.positions.CENTER,
    });
    navigation.goBack();
    await WalletConnectActionLinkHandler.respond(dAppMeta, {
      action: 'connect-dapp',
      result: {
        account: {
          address: selectedAccount?.address!,
          networkId: selectedAccount?.networkId!,
        },
      },
    });
  };

  if (!selectedAccount) return <Container />;

  return (
    <Container center={false}>
      <Spacer height={20} />
      <Row justifyContent="space-between">
        <Text color={colors.white} size={16} weight={500}>
          Account
        </Text>
        <Column alignItems="flex-end">
          <Text size={16}>{generateAccountName(selectedAccount).name}</Text>
          <ShortAddress
            size={16}
            color={colors.white}
            address={selectedAccount?.address || ''}
          />
        </Column>
      </Row>
      <Spacer height={16} />
      <Row justifyContent="space-between">
        <Text color={colors.white} size={16} weight={500}>
          Network
        </Text>
        <Text>{selectedAccount?.network.name}</Text>
      </Row>
      <Spacer height={16} />
      <Row justifyContent="space-between">
        <Text color={colors.white} size={16} weight={500}>
          App
        </Text>
        <Text>{dAppMeta.name}</Text>
      </Row>
      <Spacer height={20} />
      <Row>
        <Flex>
          <OutlinedButton label="Reject" onPress={onReject} />
        </Flex>
        <Spacer width={16} />
        <Flex>
          <PrimaryButton label="Approve" onPress={onApprove} />
        </Flex>
      </Row>
    </Container>
  );
};

export default ConnectDappScreen;

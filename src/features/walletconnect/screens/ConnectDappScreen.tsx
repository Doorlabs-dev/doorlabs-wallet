import React, { useEffect, useState } from 'react';
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
import ConnectAccountsListModal from '../components/ConnectAccountsListModal';
import useModal from '@hooks/useModal';
import DropdownIcon from '@assets/svg/icon_dropdown.svg';
import { TouchableOpacity } from 'react-native';
import { Account } from '@features/account/account.model';

type Props = {};

type ParamsList = {
  'connect-dapp': {
    dAppMeta: DAppMeta;
  };
};

const Flex = styled.View`
  flex: 1;
`;

const ConnectDappScreen = () => {
  const defaultSelectedAccount = useRecoilValue(selectedAccountState);
  const [selectedAccount, setSelectedAccount] = useState<Account>();

  const route = useRoute<RouteProp<ParamsList, 'connect-dapp'>>();
  const dAppMeta = route?.params?.dAppMeta;
  // const dAppMeta: DAppMeta = {
  //   name: 'Kaard',
  //   appId: 'com.kaard.app',
  //   redirectUrl: 'https://helloworld.com',
  // };
  const navigation = useNavigation<ScreenNavigationProps<any>>();
  const { visible, open, close } = useModal();

  useEffect(() => {
    if (!!defaultSelectedAccount) {
      setSelectedAccount(defaultSelectedAccount);
    }
  }, [defaultSelectedAccount?.address]);

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

  if (!selectedAccount || !dAppMeta) return <Container />;

  return (
    <Container center={false}>
      <Spacer height={20} />
      <Row justifyContent="space-between">
        <Text color={colors.white} size={16} weight={500}>
          Account
        </Text>
        <Column alignItems="flex-end">
          <TouchableOpacity onPress={open}>
            <Row justifyContent="space-between" alignItems="center">
              <Text size={16}>{generateAccountName(selectedAccount).name}</Text>
              <Spacer width={10} />
              <DropdownIcon />
            </Row>
          </TouchableOpacity>
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
        <Text>{dAppMeta?.name}</Text>
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
      <ConnectAccountsListModal
        networkId={selectedAccount.networkId}
        visible={visible}
        onClose={close}
        onSelectAccount={setSelectedAccount}
      />
    </Container>
  );
};

export default ConnectDappScreen;

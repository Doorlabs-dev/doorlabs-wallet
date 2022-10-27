import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Transaction } from '@services/transaction/transaction.type';
import { ShortAddress, Text } from '@components/ui';
import styled from 'styled-components/native';
import colors from '@styles/colors';
import { Row, Spacer } from '@components/layout';
import IconTransactionDeploy from '@assets/svg/transaction/icon_transaction_deploy.svg';
import IconTransactionTransfer from '@assets/svg/transaction/icon_transaction_transfer.svg';
import useTrackTransaction from '../hooks/useTrackTransaction';
import { Network } from '@services/network';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProps } from '@router/navigation-props';
import ScreenNames from '@router/screenNames';
import { getExploreTxUrl } from '@services/explore';

type Props = {
  network?: Network;
  transaction: Transaction;
  onTransactionSuccess: (transactions: Transaction[]) => void;
};

const IconByType = {
  deploy: IconTransactionDeploy,
  transfer: IconTransactionTransfer,
};

const Container = styled.View`
  width: 100%;
  background-color: ${colors.greyScale700};
  padding: 24px 16px;
  border-radius: 12px;
`;

const Right = styled.View`
  position: absolute;
  right: 16px;
`;

const PendingTransactionItem = ({
  network,
  transaction,
  onTransactionSuccess,
}: Props) => {
  useTrackTransaction({ transaction, onTransactionSuccess });
  const navigation = useNavigation<ScreenNavigationProps<any>>();

  const Icon = transaction.meta?.type
    ? IconByType[transaction.meta?.type]
    : IconByType.transfer;

  const viewOnStarkScan = () => {
    if (!network) return;

    navigation.navigate({
      name: ScreenNames.WEBVIEW,
      params: {
        url: getExploreTxUrl(network.explorerUrl, transaction.hash),
      },
    });
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={viewOnStarkScan}>
      <Container>
        <Row alignItems="center">
          <Icon />
          <Spacer width={16} />
          <View>
            <Text color={colors.white} size={16} lineHeight={24} weight={600}>
              {transaction.meta?.title ?? 'Pending transaction'}
            </Text>
            {transaction?.meta?.subTitle ? (
              <Text color={colors.white} size={16} lineHeight={24} weight={600}>
                {transaction.meta?.title ?? 'Pending transaction'}
              </Text>
            ) : (
              <ShortAddress
                color={colors.greyScale300}
                address={transaction.hash}
              />
            )}
          </View>
          <Right>
            <ActivityIndicator size={'small'} color={colors.white} />
          </Right>
        </Row>
      </Container>
    </TouchableOpacity>
  );
};

export default PendingTransactionItem;

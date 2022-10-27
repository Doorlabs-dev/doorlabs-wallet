import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Transaction } from '@services/transaction/transaction.type';
import { Text } from '@components/ui';
import styled from 'styled-components/native';
import colors from '@styles/colors';
import { Row, Spacer } from '@components/layout';
import IconTransactionDeploy from '@assets/svg/transaction/icon_transaction_deploy.svg';
import IconTransactionTransfer from '@assets/svg/transaction/icon_transaction_transfer.svg';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '@router/screenNames';
import { Network } from '@services/network';
import { ScreenNavigationProps } from '@router/navigation-props';
import { getExploreTxUrl } from '@services/explore';

type Props = {
  transaction: Transaction;
  network?: Network;
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

const TransactionItem = ({ transaction, network }: Props) => {
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
            <Text color={colors.white} size={16} weight={600}>
              {transaction.meta?.title ?? 'Transaction'}
            </Text>
            {transaction?.meta?.subTitle ? (
              <Text
                color={colors.greyScale300}
                size={16}
                lineHeight={24}
                weight={400}
              >
                {transaction.meta?.subTitle ?? ''}
              </Text>
            ) : (
              <Text
                color={colors.greyScale300}
                size={16}
                lineHeight={24}
                weight={400}
              >
                {new Date(transaction.timestamp * 1000).toDateString()}
              </Text>
            )}
          </View>
        </Row>
      </Container>
    </TouchableOpacity>
  );
};

export default TransactionItem;

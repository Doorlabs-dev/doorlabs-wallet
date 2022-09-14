import { FlatList, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import selectedAccountState from '@features/account/selected-account.state';
import { Token } from '@services/tokens/token.model';
import TokenItem from './TokenItem';
import { fetchTokensByNetwork } from '@services/tokens';
import { useIsFocused } from '@react-navigation/native';
import { Spacer } from '@components/layout';
import styled from 'styled-components/native';

type Props = {
  renderItem?: (token: Token) => JSX.Element;
  renderFooter?: () => React.ReactElement | null;
};

const TokenListWrapper = styled.View`
  flex: 1;
  align-items: center;
`;

const TokensList = ({ renderItem, renderFooter = () => null }: Props) => {
  const selectedAccount = useRecoilValue(selectedAccountState);
  const [tokens, setTokens] = useState<Token[]>([]);
  const isFocused = useIsFocused();

  const fetchTokens = async () => {
    if (!selectedAccount) return;
    const result = await fetchTokensByNetwork(selectedAccount?.networkId);
    setTokens(result || []);
  };

  useEffect(() => {
    if (!isFocused) return;

    fetchTokens();
  }, [isFocused]);

  return (
    <TokenListWrapper>
      <ScrollView contentContainerStyle={{ flex: 1 }} horizontal>
        <FlatList
          nestedScrollEnabled
          ItemSeparatorComponent={() => <Spacer height={16} />}
          keyExtractor={(item) => item.address}
          data={tokens}
          renderItem={({ item: t }) =>
            renderItem ? (
              renderItem(t)
            ) : (
              <TokenItem key={t.address} token={t} account={selectedAccount} />
            )
          }
          ListFooterComponent={renderFooter?.()}
        />
      </ScrollView>
    </TokenListWrapper>
  );
};

export default TokensList;

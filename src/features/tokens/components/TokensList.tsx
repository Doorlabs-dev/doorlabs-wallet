import { FlatList, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import selectedAccountState from '@features/account/selected-account.state';
import { Token } from '@services/tokens/token.model';
import TokenItem from './TokenItem';
import { fetchTokensByNetwork } from '@services/tokens';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Spacer } from '@components/layout';
import styled from 'styled-components/native';
import { ScreenNavigationProps } from '@router/navigation-props';

type Props = {
  renderItem?: (token: Token) => JSX.Element;
};

const TokenListWrapper = styled.View`
  flex: 1;
  align-items: center;
`;

const TokensList = ({ renderItem }: Props) => {
  const selectedAccount = useRecoilValue(selectedAccountState);
  const [tokens, setTokens] = useState<Token[]>([]);
  const navigation = useNavigation<ScreenNavigationProps<any>>();
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
        ></FlatList>
      </ScrollView>
    </TokenListWrapper>
  );
};

export default TokensList;

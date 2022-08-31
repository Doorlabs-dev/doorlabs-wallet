import React from 'react';
import { Container, Row, SafeArea, Spacer } from '@components/layout';
import styled from 'styled-components/native';
import colors from '@styles/colors';
import { useRecoilValue } from 'recoil';
import networkState from '@features/network/network.state';
import { getTokenInfo } from '@services/tokens';
import selectedAccountState from '@features/account/selected-account.state';
import SelectTokenItem from '../components/SelectTokenItem';
import { SearchBar, Text } from '@components/ui';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProps } from '@router/navigation-props';
import ScreenNames from '@router/screenNames';
import TokensList from '../components/TokensList';

type Props = {};

const SelectedTabButton = styled.TouchableOpacity`
  align-self: flex-start;
  padding: 8px;
  background-color: ${colors.orange};
  border-radius: 8px;
`;

const TabButton = styled(SelectedTabButton)`
  background-color: transparent;
  border-width: 1px;
  border-color: ${colors.orange};
`;

const SelectTokenScreen = (props: Props) => {
  const selectedNetwork = useRecoilValue(networkState);
  const selectedAccount = useRecoilValue(selectedAccountState);
  const ethToken = getTokenInfo('ETH', selectedNetwork.id);
  const navigation = useNavigation<ScreenNavigationProps<any>>();

  return (
    <SafeArea>
      <Container center={false}>
        <SearchBar />
        <Spacer height={24} />
        <Row>
          <SelectedTabButton>
            <Text size={16} lineHeight={24} weight={500}>
              Tokens
            </Text>
          </SelectedTabButton>
          <Spacer width={16} />
          <TabButton>
            <Text color={colors.orange} size={16} lineHeight={24} weight={500}>
              Collectibles
            </Text>
          </TabButton>
        </Row>
        <Spacer height={24} />

        <TokensList
          renderItem={(t) => (
            <SelectTokenItem
              token={t}
              account={selectedAccount}
              onPress={() =>
                navigation.navigate({
                  name: ScreenNames.TOKEN_SEND,
                  params: {
                    token: t,
                  },
                })
              }
            />
          )}
        />
      </Container>
    </SafeArea>
  );
};

export default SelectTokenScreen;

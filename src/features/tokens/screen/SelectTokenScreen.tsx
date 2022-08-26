import React from 'react';
import { Container, Row, SafeArea, Spacer } from '@components/layout';
import styled from 'styled-components/native';
import colors from '@styles/colors';
import { useRecoilValue } from 'recoil';
import networkState from '@features/network/network.state';
import { getTokenInfo } from '@services/tokens';
import selectedAccountState from '@features/account/selected-account.state';
import SelectTokenItem from '../components/SelectTokenItem';
import { SearchBar, SecondaryButton, Text } from '@components/ui';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProps } from '@router/navigation-props';
import ScreenNames from '@router/screenNames';

type Props = {};

const TokenListContainer = styled.View`
  padding: 24px 16px;
  background-color: ${colors.greyScale700};
  border-radius: 12px;
`;

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
        <TokenListContainer>
          <SelectTokenItem
            onPress={() =>
              navigation.navigate({ name: ScreenNames.TOKEN_SEND })
            }
            token={ethToken}
            account={selectedAccount}
          />
        </TokenListContainer>
        <SecondaryButton title="Add tokens" />
      </Container>
    </SafeArea>
  );
};

export default SelectTokenScreen;

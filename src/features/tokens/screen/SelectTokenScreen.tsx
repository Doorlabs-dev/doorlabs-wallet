import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Row, Spacer } from '@components/layout';
import colors from '@styles/colors';
import { useRecoilValue } from 'recoil';
import selectedAccountState from '@features/account/selected-account.state';
import SelectTokenItem from '../components/SelectTokenItem';
import { SearchBar, Text } from '@components/ui';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProps } from '@router/navigation-props';
import ScreenNames from '@router/screenNames';
import TokensList from '../components/TokensList';
import NftsList from '@features/nft/components/NftsList';

type Props = {};

const TabButton = ({
  selected,
  label,
  onPress,
}: {
  selected: boolean;
  label: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[styles.tabButton, selected ? styles.selectedTabButton : null]}
    >
      <Text style={[styles.text, selected ? styles.selectedText : null]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const SelectTokenScreen = (props: Props) => {
  const selectedAccount = useRecoilValue(selectedAccountState);
  const navigation = useNavigation<ScreenNavigationProps<any>>();
  const [selectedTab, setSelectedTab] = useState<0 | 1>(0);

  const tokenTabSelected = selectedTab == 0;

  return (
    <Container center={false}>
      <Spacer height={36} />
      <SearchBar />
      <Spacer height={24} />
      <Row>
        <TabButton
          onPress={() => setSelectedTab(0)}
          label="Tokens"
          selected={tokenTabSelected}
        />
        <Spacer width={16} />
        <TabButton
          onPress={() => setSelectedTab(1)}
          label="Collectibles"
          selected={!tokenTabSelected}
        />
      </Row>
      <Spacer height={24} />
      {tokenTabSelected ? (
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
      ) : (
        <NftsList />
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  selectedTabButton: {
    backgroundColor: `${colors.orange}`,
  },
  tabButton: {
    borderRadius: 8,
    padding: 8,
    alignSelf: 'flex-start',
    borderColor: `${colors.orange}`,
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: `${colors.orange}`,
    fontWeight: '500',
  },
  selectedText: {
    color: `${colors.white}`,
  },
});

export default SelectTokenScreen;

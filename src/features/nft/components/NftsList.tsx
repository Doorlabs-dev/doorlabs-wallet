import { View, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import useNfts from '../hooks/useNfts';
import { useRecoilValue } from 'recoil';
import selectedAccountState from '@features/account/selected-account.state';
import { Text } from '@components/ui';
import NftItem from './NftItem';
import { Container, Spacer } from '@components/layout';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { ScreenNavigationProps } from '@router/navigation-props';
import ScreenNames from '@router/screenNames';
import IconEmptySearch from '@assets/svg/icon_empty_search.svg';

type Props = {};

const NftsList = (props: Props) => {
  const selectedAccount = useRecoilValue(selectedAccountState);
  const { nfts, isValidating, mutate } = useNfts({ account: selectedAccount });
  const navigation = useNavigation<ScreenNavigationProps<any>>();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      mutate();
    }
  }, [isFocused]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={
          nfts.length
            ? { alignItems: 'flex-start' }
            : {
                flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }
        }
        data={nfts}
        renderItem={({ item: nft }) => (
          <>
            <NftItem
              nft={nft}
              onPress={() =>
                navigation.navigate({
                  name: ScreenNames.NFT_SEND_NFT,
                  params: {
                    nft,
                  },
                })
              }
            />
            <Spacer width={16} />
          </>
        )}
        keyExtractor={(item) => item.token_id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() =>
          isValidating ? (
            <Container>
              <ActivityIndicator />
            </Container>
          ) : (
            <Container>
              <IconEmptySearch />
              <Spacer height={16} />
              <Text size={16}>You do not have any nfts yet</Text>
            </Container>
          )
        }
        ItemSeparatorComponent={() => <Spacer height={16} />}
        ListFooterComponent={() => <Spacer height={100} />}
      />
    </View>
  );
};

export default NftsList;

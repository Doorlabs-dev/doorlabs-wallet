import { View, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import useNfts from '../hooks/useNfts';
import { useRecoilValue } from 'recoil';
import selectedAccountState from '@features/account/selected-account.state';
import { Text } from '@components/ui';
import NftItem from './NftItem';
import { Spacer } from '@components/layout';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProps } from '@router/navigation-props';
import ScreenNames from '@router/screenNames';

type Props = {};

const FloatingCenter = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const NftsList = (props: Props) => {
  const selectedAccount = useRecoilValue(selectedAccountState);
  const { nfts, isValidating } = useNfts({ account: selectedAccount });
  const navigation = useNavigation<ScreenNavigationProps<any>>();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={{
          alignItems: 'flex-start',
        }}
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
            <FloatingCenter>
              <ActivityIndicator />
            </FloatingCenter>
          ) : (
            <Text size={16}>You do not have any nfts yet</Text>
          )
        }
        ItemSeparatorComponent={() => <Spacer height={16} />}
        ListFooterComponent={() => <Spacer height={100} />}
      />
    </View>
  );
};

export default NftsList;

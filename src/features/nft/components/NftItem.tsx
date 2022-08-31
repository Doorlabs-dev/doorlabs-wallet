import { Spacer } from '@components/layout';
import { Text } from '@components/ui';
import { AspectNft, getNftPicture } from '@services/nft/aspect.service';
import colors from '@styles/colors';
import React from 'react';
import { Dimensions, Image } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View``;

type Props = {
  nft: AspectNft;
};

const { width } = Dimensions.get('window');

const imageWidth = (width - 32 - 16) / 2;

const NftItem = ({ nft }: Props) => {
  const nftPicUrl = getNftPicture(nft);

  return (
    <Container>
      <Image
        style={{ borderRadius: 8 }}
        source={{ uri: nftPicUrl, width: imageWidth, height: imageWidth }}
      />
      <Spacer height={8} />
      <Text size={20} color={colors.white}>
        {nft.name}
      </Text>
    </Container>
  );
};

export default NftItem;

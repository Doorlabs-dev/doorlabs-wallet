import { View, Image } from 'react-native';
import React from 'react';
import { AspectNft, getNftPicture } from '@services/nft/aspect.service';
import { Row, Spacer } from '@components/layout';
import { Text, Title } from '@components/ui';

type Props = {
  nft: AspectNft;
};

const NftInfoCard = ({ nft }: Props) => {
  const imageUrl = getNftPicture(nft);

  return (
    <View>
      <Row>
        <Image
          style={{ borderRadius: 8 }}
          source={{ uri: imageUrl, width: 164, height: 164 }}
        />
        <Spacer width={16} />
        <View>
          <Title size={16} lineHeight={24}>
            {nft.name}
          </Title>
          <Spacer height={5} />
          <Text size={16} lineHeight={20}>
            {nft.description || 'No description'}
          </Text>
        </View>
      </Row>
    </View>
  );
};

export default NftInfoCard;

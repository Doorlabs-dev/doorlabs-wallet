import { Spacer } from '@components/layout';
import { Text } from '@components/ui';
import { AspectNft, getNftPicture } from '@services/nft/aspect.service';
import colors from '@styles/colors';
import React from 'react';
import { Dimensions, Image, TouchableOpacity } from 'react-native';

type Props = {
  nft: AspectNft;
  onPress: () => void;
};

const { width } = Dimensions.get('window');

const imageWidth = (width - 32 - 16) / 2;

const NftItem = ({ nft, onPress }: Props) => {
  const nftPicUrl = getNftPicture(nft);

  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={{ borderRadius: 8 }}
        source={{ uri: nftPicUrl, width: imageWidth, height: imageWidth }}
      />
      <Spacer height={8} />
      <Text size={16} color={colors.white}>
        {nft.name}
      </Text>
    </TouchableOpacity>
  );
};

export default NftItem;

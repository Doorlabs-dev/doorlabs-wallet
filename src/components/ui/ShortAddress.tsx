import Toast from 'react-native-root-toast';
import { TouchableOpacity } from 'react-native';
import { setStringAsync } from 'expo-clipboard';
import colors from '@styles/colors';
import Text from './Text';
import IconCopy from '@assets/svg/icon_copy.svg';
import { Row, Spacer } from '@components/layout';
import { getChecksumAddress } from '@utils/getChecksumAddress';
import { useMemo } from 'react';

const ShortAddress = ({
  address,
  color,
  size,
  lineHeight,
}: {
  address: string;
  color?: string;
  size?: number;
  lineHeight?: number;
}) => {
  const checksumAddress = useMemo(() => getChecksumAddress(address), [address]);

  if (!address) {
    return null;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={async () => {
        await setStringAsync(checksumAddress);
        Toast.show('Copied');
      }}
    >
      <Row alignItems="center">
        <Text
          color={color || colors.periwinkle}
          size={size || 18}
          lineHeight={lineHeight || 28}
        >
          {address.substring(0, 6)} ... {address.substring(address.length - 4)}
        </Text>
        <Spacer width={8} />
        <IconCopy />
      </Row>
    </TouchableOpacity>
  );
};

export default ShortAddress;

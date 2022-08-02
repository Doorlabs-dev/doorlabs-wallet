import { ToastAndroid, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { setStringAsync } from 'expo-clipboard';

const ShortAddressText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  border-radius: 13px;
  padding: 4px 12px;
  background-color: rgba(255, 255, 255, 0.15);
  overflow: hidden;
`;

const ShortAddress = ({ address }: { address: string }) => {
  if (!address) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={async () => {
        await setStringAsync(address);
        ToastAndroid.show('Copied', 1000);
      }}
    >
      <ShortAddressText>
        {address.substring(0, 6)} ... {address.substring(address.length - 4)}
      </ShortAddressText>
    </TouchableOpacity>
  );
};

export default ShortAddress;

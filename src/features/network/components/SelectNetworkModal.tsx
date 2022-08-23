import { TouchableOpacity } from 'react-native';
import React from 'react';
import BottomSheet from '@components/ui/modal/BottomSheet';
import { Network } from '@services/network';
import { Text } from '@components/ui';
import styled from 'styled-components/native';
import { Row } from '@components/layout';
import IconCheck from '@assets/svg/icon_check.svg';

type Props = {
  visible: boolean;
  onClose: () => void;
  networks: Network[];
  onPress: (network: Network) => void;
  selectedNetwork: Network;
};

const ItemContainer = styled.View`
  padding: 24px 0px;
`;

const NetworkItem = ({
  network,
  onPress,
  selected = false,
}: {
  network: Network;
  onPress: (network: Network) => void;
  selected?: boolean;
}) => {
  return (
    <TouchableOpacity onPress={() => onPress(network)}>
      <ItemContainer>
        <Row justifyContent="space-between">
          <Text size={16} lineHeight={24} weight={400}>
            {network.name}
          </Text>
          {selected && <IconCheck />}
        </Row>
      </ItemContainer>
    </TouchableOpacity>
  );
};

const SelectNetworkModal = ({
  visible,
  onClose,
  networks,
  onPress,
  selectedNetwork,
}: Props) => {
  return (
    <BottomSheet visible={visible} onClose={onClose}>
      {networks.map((network) => (
        <NetworkItem
          key={network.id}
          selected={selectedNetwork.id === network.id}
          network={network}
          onPress={onPress}
        />
      ))}
    </BottomSheet>
  );
};

export default SelectNetworkModal;

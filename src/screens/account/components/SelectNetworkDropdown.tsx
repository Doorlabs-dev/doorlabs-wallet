import React, { useEffect, useState } from 'react';
import { useNetwork } from '../../../hooks';
import { Text } from '../../../components/ui';
import styled from 'styled-components/native';
import { colors } from '../../../styles';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const TopPosition = styled.View`
  position: absolute;
  top: 0px;
  right: 16px;
  width: 170px;
  z-index: 1000;
`;

const SelectNetworkDropdown = () => {
  const { selectNetwork, selectedNetwork, getNetworks } = useNetwork();
  const [showDropdown, setShowDropdown] = useState(false);
  const [chosenNetworkId, setChosenNetworkId] = useState(selectedNetwork.id);

  useEffect(() => {
    if (chosenNetworkId == null) return;

    const foundNetwork = getNetworks().find(
      (item) => item.id == chosenNetworkId
    );
    if (foundNetwork != null) {
      selectNetwork(foundNetwork);
    }
  }, [chosenNetworkId]);

  return (
    <TopPosition>
      <DropDownPicker
        open={showDropdown}
        value={chosenNetworkId}
        items={getNetworks().map((item) => ({
          value: item.id,
          label: item.name,
        }))}
        setOpen={setShowDropdown}
        setValue={setChosenNetworkId}
        style={{
          borderRadius: showDropdown ? 10 : 100,
          backgroundColor: colors.gold,
        }}
        textStyle={{
          fontWeight: '600',
        }}
        dropDownContainerStyle={{
          backgroundColor: colors.gold,
          zIndex: 1000,
        }}
      />
    </TopPosition>
  );
};

export default SelectNetworkDropdown;

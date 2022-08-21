import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { colors } from '../../../styles';
import DropDownPicker from 'react-native-dropdown-picker';
import useNetwork from '../hooks/useNetwork';
import { StackActions, useNavigation } from '@react-navigation/native';
import { ScreenNavigationProps } from '../../../router/navigation-props';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getNetwork, Network } from '../../../services/network';
import ScreenNames from '../../../router/screenNames';
import useSelectedAccount from '../../account/hooks/useSelectedAccount';
import IconDropdown from '@assets/svg/icon_dropdown.svg';

const DropdownContainer = styled.View`
  max-width: 180px;
  z-index: 1000;
`;

const Dot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${colors.white};
`;

const SelectNetworkDropdown = () => {
  const insets = useSafeAreaInsets();
  const { selectNetwork, selectedNetwork, getNetworks } = useNetwork();
  const [showDropdown, setShowDropdown] = useState(false);
  const [chosenNetworkId, setChosenNetworkId] = useState(selectedNetwork.id);
  const { selectedAccount } = useSelectedAccount();
  const navigation = useNavigation<ScreenNavigationProps<any>>();

  useEffect(() => {
    if (selectedAccount) {
      const network = getNetwork(selectedAccount.networkId);
      setChosenNetworkId(network.id);
    }
  }, [selectedAccount?.networkId]);

  useEffect(() => {
    if (chosenNetworkId == null) return;

    const foundNetwork = getNetworks().find(
      (item: Network) => item.id == chosenNetworkId
    );
    if (foundNetwork != null) {
      selectNetwork(foundNetwork);
    }
  }, [chosenNetworkId]);

  return (
    <DropdownContainer>
      <DropDownPicker
        open={showDropdown}
        value={chosenNetworkId}
        items={getNetworks().map((item) => ({
          value: item.id,
          label: item.name,
        }))}
        onSelectItem={(item) => {
          const nextNetworkId = item.value;

          if (nextNetworkId === chosenNetworkId) return;
          setTimeout(() => {
            navigation.dispatch(
              StackActions.replace(ScreenNames.ACCOUNTS_LIST)
            );
          }, 0);
        }}
        setOpen={setShowDropdown}
        setValue={setChosenNetworkId}
        ArrowUpIconComponent={() => <IconDropdown />}
        ArrowDownIconComponent={() => <IconDropdown />}
        TickIconComponent={() => <Dot />}
        style={{
          borderRadius: showDropdown ? 10 : 50,
          backgroundColor: colors.orange,
          borderColor: 'transparent',
          padding: 0,
          height: 32,
        }}
        textStyle={{
          fontSize: 14,
          lineHeight: 20,
          fontWeight: '500',
          color: colors.white,
        }}
        dropDownContainerStyle={{
          borderColor: 'transparent',
          backgroundColor: colors.orange,
          zIndex: 1000,
        }}
      />
    </DropdownContainer>
  );
};

export default SelectNetworkDropdown;

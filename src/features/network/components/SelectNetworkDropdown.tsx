import IconDropdown from "@assets/svg/icon_dropdown.svg";
import { Row } from "@components/layout";
import { Text } from "@components/ui";
import useAccounts from "@features/account/hooks/useAccounts";
import useModal from "@hooks/useModal";
import React, { useEffect } from "react";
import styled from "styled-components/native";
import { Network } from "../../../services/network";
import { colors } from "../../../styles";
import useSelectedAccount from "../../account/hooks/useSelectedAccount";
import useNetwork from "../hooks/useNetwork";
import SelectNetworkModal from "./SelectNetworkModal";

const DropdownContainer = styled.TouchableOpacity`
  width: 160px;
  height: 32px;
  z-index: 1000;
  padding: 6px 8px;
  background-color: ${colors.orange};
  justify-content: center;
  border-radius: 24px;
`;

const SelectNetworkDropdown = () => {
  const { selectNetwork, selectedNetwork, getNetworks } = useNetwork();
  const { selectAccount } = useSelectedAccount(false);
  const { getDefaultAccountByNetwork } = useAccounts();
  const { visible, open, close } = useModal();

  useEffect(() => {
    if (selectedNetwork.id) {
      getDefaultAccountByNetwork(selectedNetwork.id).then((defaultAcc) =>
        selectAccount(defaultAcc)
      );
    }
  }, [selectedNetwork?.id]);

  const onSelectNetwork = (network: Network) => {
    close();
    selectNetwork(network);
  };

  return (
    <>
      <DropdownContainer onPress={open}>
        <Row justifyContent="space-between">
          <Text size={14} weight={500}>
            {selectedNetwork?.name}
          </Text>
          <IconDropdown />
        </Row>
      </DropdownContainer>
      <SelectNetworkModal
        selectedNetwork={selectedNetwork}
        visible={visible}
        onClose={close}
        networks={getNetworks()}
        onPress={onSelectNetwork}
      />
    </>
  );
};

export default SelectNetworkDropdown;

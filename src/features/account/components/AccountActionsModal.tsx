import Modal from 'react-native-modal';
import React, { Fragment } from 'react';
import styled from 'styled-components/native';

import { Text } from '@components/ui';
import colors from '@styles/colors';
import BottomSheet from '@components/ui/modal/BottomSheet';
import { TouchableOpacity } from 'react-native';

type Action = {
  label: string;
  onPress: () => void;
};

type Props = {
  visible: boolean;
  onClose: () => void;
  actions: Action[];
};

const ItemContainer = styled.View`
  padding: 24px 0px;
`;

const ActionItem = ({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) => (
  <TouchableOpacity onPress={onPress}>
    <ItemContainer>
      <Text size={16} lineHeight={24} weight={400}>
        {label}
      </Text>
    </ItemContainer>
  </TouchableOpacity>
);

const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${colors.greyScale700};
`;

const AccountActionsModal = ({ visible, onClose, actions }: Props) => {
  return (
    <BottomSheet visible={visible} onClose={onClose}>
      {actions.map((action, index) => (
        <Fragment key={index}>
          <ActionItem onPress={() => action.onPress()} label={action.label} />
          {index != actions.length - 1 && <Line />}
        </Fragment>
      ))}
    </BottomSheet>
  );
};

export default AccountActionsModal;

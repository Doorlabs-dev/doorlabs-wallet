import React, { useState } from 'react';
import { PrimaryButton, RoundButton } from '@components/ui';
import useAccounts from '../hooks/useAccounts';
import { useRecoilValue } from 'recoil';
import networkState from '@features/network/network.state';
import useSelectedAccount from '../hooks/useSelectedAccount';
import colors from '@styles/colors';
import IconAddWhite from '@assets/svg/icon_add_white.svg';

type Props = {
  shape: 'default' | 'round';
};

const AddAccountButton = ({ shape = 'default' }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { addNewAccount } = useAccounts();
  const { selectAccount } = useSelectedAccount();
  const selectedNetwork = useRecoilValue(networkState);

  const onAddNewAccount = async () => {
    setIsLoading(true);
    const newAccount = await addNewAccount(selectedNetwork?.id);
    setIsLoading(false);
    await selectAccount(newAccount);
  };

  if (shape === 'round') {
    return (
      <RoundButton
        loading={isLoading}
        icon={<IconAddWhite />}
        color={colors.orange}
        onPress={onAddNewAccount}
      />
    );
  }

  return (
    <PrimaryButton
      loading={isLoading}
      label="Add account"
      onPress={() => onAddNewAccount()}
    />
  );
};

export default AddAccountButton;

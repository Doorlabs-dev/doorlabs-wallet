import React, { useState } from 'react';
import { PrimaryButton } from '@components/ui';
import useAccounts from '../hooks/useAccounts';
import { useRecoilValue } from 'recoil';
import networkState from '@features/network/network.state';
import useSelectedAccount from '../hooks/useSelectedAccount';

type Props = {};

const AddAccountButton = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { addNewAccount } = useAccounts();
  const { selectAccount } = useSelectedAccount(false);
  const selectedNetwork = useRecoilValue(networkState);

  const onAddNewAccount = async () => {
    setIsLoading(true);
    const newAccount = await addNewAccount(selectedNetwork?.id);
    await selectAccount(newAccount);
    setIsLoading(false);
  };

  return (
    <PrimaryButton
      loading={isLoading}
      label="Add account"
      onPress={() => onAddNewAccount()}
    />
  );
};

export default AddAccountButton;

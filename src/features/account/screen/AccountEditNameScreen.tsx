import React from 'react';
import { Container, Spacer } from '@components/layout';
import { FieldValues, useForm } from 'react-hook-form';
import { TextInput } from '@components/form';
import { PrimaryButton } from '@components/ui';
import colors from '@styles/colors';
import useSelectedAccount from '../hooks/useSelectedAccount';
import generateAccountName from '@utils/generateAccountName';
import { useNavigation } from '@react-navigation/native';

type Props = {};

const AccountEditNameScreen = (props: Props) => {
  const { selectedAccount, changeAccountName } = useSelectedAccount();
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      name: selectedAccount?.name || generateAccountName(selectedAccount).name,
    },
  });

  return (
    <Container center={false}>
      <Spacer height={16} />
      <TextInput
        label="Name"
        name="name"
        control={control}
        rules={{ required: true }}
      />
      <PrimaryButton
        textColor={colors.white}
        label="Save changes"
        onPress={handleSubmit(async (values) => {
          await changeAccountName(values.name);
          navigation.goBack();
        })}
      />
    </Container>
  );
};

export default AccountEditNameScreen;

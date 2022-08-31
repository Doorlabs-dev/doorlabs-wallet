import React from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { AspectNft } from '@services/nft/aspect.service';
import selectedAccountState from '@features/account/selected-account.state';
import { useRecoilValue } from 'recoil';
import { Container, SafeArea, Spacer } from '@components/layout';
import { PrimaryButton, Text } from '@components/ui';
import { FieldValues, useForm } from 'react-hook-form';
import { TextInput } from '@components/form';
import NftInfoCard from '../components/NftInfoCard';
import { isValidAddress } from '@utils/validator';
import { executeTransaction } from '@services/transaction/transactionExecution';
import { stark } from 'starknet';
import { getUint256CalldataFromBN } from '@services/transaction';
import { BigNumber } from 'ethers';
import { ScreenNavigationProps } from '@router/navigation-props';

type Props = {};

type Params = {
  'send-nft': {
    nft: AspectNft;
  };
};

const SendNftScreen = (props: Props) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FieldValues>({
    defaultValues: {
      recipient: '',
      // '0x0303664190A1Fa7a74Cd4D977d34cad2b40fa61980d3876FD268Dd815c71bfc5',
    },
    mode: 'onChange',
  });
  const route = useRoute<RouteProp<Params, 'send-nft'>>();
  const nft = route.params.nft;
  const selectedAccount = useRecoilValue(selectedAccountState);
  const navigation = useNavigation<ScreenNavigationProps<any>>();

  const submit = () =>
    handleSubmit(async (values) => {
      try {
        await executeTransaction({
          account: selectedAccount!,
          transactions: {
            contractAddress: nft.contract_address,
            entrypoint: 'transferFrom',
            calldata: stark.compileCalldata({
              from_: selectedAccount?.address!,
              to: values.recipient,
              tokenId: getUint256CalldataFromBN(BigNumber.from(nft.token_id)),
            }),
          },
        });
        navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    });

  if (!selectedAccount || !nft)
    return (
      <SafeArea>
        <Container>
          <Text>No account or nft found</Text>
        </Container>
      </SafeArea>
    );

  return (
    <SafeArea>
      <Container center={false}>
        <NftInfoCard nft={nft} />
        <Spacer height={24} />
        <TextInput
          name="recipient"
          control={control}
          label="Recipient's address"
          placeholder="Input address"
          rules={{
            required: 'Required',
            validate: {
              isValidAddress,
            },
          }}
          errorMessages={{
            isValidAddress: 'Invalid address',
          }}
        />
        <PrimaryButton loading={isSubmitting} label="Next" onPress={submit()} />
      </Container>
    </SafeArea>
  );
};

export default SendNftScreen;

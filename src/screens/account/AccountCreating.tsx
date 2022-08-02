import React, { useState } from 'react'
import { Image } from 'react-native'
import { Container, Row, Spacer } from '../../components/layout'
import { Button, ShortAddress, Title } from '../../components/ui'
import useAccount from '../../services/account'
import { deployAccountStarkNet, deployAccountEth } from '../../services/wallet'

const AccountCreating = () => {
  const [isCreatingEthAccount, setIsCreatingEthAccount] = useState(false)
  const [isCreatingStarkAccount, setIsCreatingStarkAccount] = useState(false)

  const createAccountEth = async () => {
    setIsCreatingEthAccount(true)
    await deployAccountEth()
    setIsCreatingEthAccount(false)
  }
  const createAccountStarkNet = async () => {
    setIsCreatingStarkAccount(true)
    await deployAccountStarkNet()
    setIsCreatingStarkAccount(false)
  }
  return (
    <Container>
      <Title>Create Account</Title>
      <Spacer height={32} />

      <Row alignItems="center">
        <Image
          resizeMode="contain"
          source={{
            width: 30,
            height: 30,
            uri: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Ethereum-ETH-icon.png'
          }}
        />
        <Spacer width={10} />
      </Row>

      <Spacer height={32} />

      <Button
        width={250}
        height={36}
        onPress={createAccountEth}
        disabled={isCreatingEthAccount}
      >
        <Title size={16}>Create ETH Account</Title>
      </Button>
      <Spacer height={20} />
      <Button
        width={250}
        height={36}
        onPress={createAccountStarkNet}
        disabled={isCreatingStarkAccount}
      >
        <Title size={16}>Create StarkNet Account</Title>
      </Button>
    </Container>
  )
}

export default AccountCreating

import React from 'react'
import { Image } from 'react-native'
import { Container, Row, Spacer } from '../../components/layout'
import { Button, ShortAddress, Title } from '../../components/ui'
import useAccount from '../../services/account'

const AccountCreating = () => {

  const { createAccount, isLoading, account } = useAccount()

  const showAddress = () => {
    console.log(account?.address)
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
            uri: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Ethereum-ETH-icon.png',
          }}
        />
        <Spacer width={10} />
        {isLoading && <Title size={24}>Creating...</Title>}
        {account?.address && <ShortAddress address={account.address} />}
      </Row>
      
      <Spacer height={32} />

      <Row>
        <Button width={100} height={36} onPress={createAccount}>
          <Title size={16}>Create</Title>
        </Button>
        <Spacer width={10} />
        <Button width={100} height={36} onPress={showAddress}>
          <Title size={16}>Address</Title>
        </Button>
      </Row>
    </Container>
  )
}

export default AccountCreating

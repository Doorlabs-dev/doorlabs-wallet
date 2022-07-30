import React from 'react'
import { Image } from 'react-native'
import { hexToDecimalString } from 'starknet/dist/utils/number'
import useSWR from 'swr'
import { Container, Row, Spacer } from '../../components/layout'
import { Button, ShortAddress, Title } from '../../components/ui'

const AccountCreating = () => {
  return (
    <Container>
      <Title>Create Account</Title>
    </Container>
  )
}

export default AccountCreating

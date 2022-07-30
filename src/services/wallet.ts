// using etherjs in react native https://docs.ethers.io/v5/cookbook/react-native/

// Import the crypto getRandomValues shim (**BEFORE** the shims)
import 'react-native-get-random-values'

// Import the the ethers shims (**BEFORE** ethers)
import '@ethersproject/shims'

// Import the ethers library
import { ethers } from 'ethers'


export const createRandomWallet = () => {
  const etherWallet = ethers.Wallet.createRandom({})
  return etherWallet
}
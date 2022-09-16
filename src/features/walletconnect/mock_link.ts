import { parseAmount } from '@services/tokens/amount';
import { getUint256CalldataFromBN } from '@services/transaction';
import { REQUEST_SCHEME } from '@services/walletconnect/walletconnect.action';
import * as Linking from 'expo-linking';
import { getChecksumAddress, stark } from 'starknet';

export function testConnectLink() {
  const testConnectLink = Linking.createURL('', {
    scheme: REQUEST_SCHEME,
    queryParams: {
      action: 'connect-dapp',
      data: JSON.stringify({
        meta: {
          appId: 'mydapp',
          name: 'Dapp Shit',
        },
        account: {
          address:
            '0xe3a491f1de4d976e183e0c1b0306c96d8951b0a0a2a8d36ec9619919157036',
          networkId: 'goerli-alpha',
        },
      }),
    },
  });
  Linking.openURL(testConnectLink);
}

export function testExecuteLink() {
  const testConnectLink = Linking.createURL('', {
    scheme: REQUEST_SCHEME,
    queryParams: {
      action: 'execute-transaction',
      data: JSON.stringify({
        meta: {
          appId: 'mydapp',
          name: 'Dapp Shit',
        },
        account: {
          address:
            '0xe3a491f1de4d976e183e0c1b0306c96d8951b0a0a2a8d36ec9619919157036',
          networkId: 'goerli-alpha',
        },
        transactions: {
          contractAddress:
            '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
          entrypoint: 'transfer',
          calldata: stark.compileCalldata({
            recipient: getChecksumAddress(
              '0x001C64B40875EcE24c6E57136007F32FBc7eB25965A22629160aedbaA91A4f1a'
            ),
            amount: getUint256CalldataFromBN(parseAmount('0.0001')),
          }),
        },
      }),
    },
  });

  Linking.openURL(testConnectLink);
}

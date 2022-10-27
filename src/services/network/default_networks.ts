export const DEFAULT_NETWORKS = [
  {
    id: 'mainnet-alpha',
    name: 'Ethereum Mainnet',
    chainId: 'SN_MAIN',
    baseUrl: 'https://alpha-mainnet.starknet.io',
    explorerUrl: 'https://starkscan.co',
    accountClassHash:
      '0x3e327de1c40540b98d05cbcb13552008e36f0ec8d61d46956d2f9752c294328',
    multicallAddress:
      '0x0740a7a14618bb7e4688d10059bc42104d22c315bb647130630c77d3b6d3ee50',
    readonly: true,
  },
  {
    id: 'goerli-alpha',
    name: 'Goerli Testnet',
    chainId: 'SN_GOERLI',
    baseUrl: 'https://alpha4.starknet.io',
    explorerUrl: 'https://testnet.starkscan.co',
    accountClassHash:
      '0x3e327de1c40540b98d05cbcb13552008e36f0ec8d61d46956d2f9752c294328',
    multicallAddress:
      '0x042a12c5a641619a6c58e623d5735273cdfb0e13df72c4bacb4e188892034bd6',
    readonly: true,
  },
];

export const defaultNetwork = DEFAULT_NETWORKS[0];

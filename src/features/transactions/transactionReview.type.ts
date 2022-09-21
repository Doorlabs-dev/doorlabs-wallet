import { Token } from '@services/tokens/token.model';

export type SendTokenTransactionReview = {
  type: 'send';
  token?: Token;
  to: string;
  amount: string;
};

export type SendNFTTransactionReview = {
  type: 'sendNft';
  to: string;
  tokenId: string;
};

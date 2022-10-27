export const getExploreAccountURL = (
  baseExploreURL: string,
  address: string
) => {
  return `${baseExploreURL}/contract/${address}`;
};

export const getExploreTxUrl = (baseExploreURL: string, hash: string) => {
  return `${baseExploreURL}/tx/${hash}`;
};

export const getExploreAccountURL = (
  baseExploreURL: string,
  address: string
) => {
  return `${baseExploreURL}/contract/${address}`;
};

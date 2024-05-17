export interface ApiProps {
  id: string;
  industries: string;
  name: string;
  netWorth: number;
  squareImage: string;
}
export interface financialAssetsProps {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  exerciseOptionPrice: number;
  sharePrice: string;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
  currentPrice: number;
}

export interface ApiDetailProps {
  id?: string;
  state?: string;
  city?: string;
  name?: string;
  country?: string;
  position?: number;
  industries?: string;
  financialAssets?: financialAssetsProps[];
  thumbnail?: string;
  squareImage?: string;
  bio?: string;
  about?: string;
  netWorth?: string;
}

export async function fetchInfo(url: string) {
  return fetch(url).then((res) => res.json());
}

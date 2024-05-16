import { atom } from "recoil";
interface ApiProps {
  id: string;
  industries: [];
  name: string;
  netWorth: number;
  squareImage: string;
}

export const initDataState = atom<ApiProps[]>({
  key: "initDataState",
  default: [],
});

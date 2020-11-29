import { IApp } from "../../api/app";

export interface IAppState {
  items: IApp[];
  page: number;
  isLoading: boolean;
}

import { IApp } from "../../api/app";

export interface ISuggestionAppState {
  items: IApp[];
  page: number;
  isLoading: boolean;
}

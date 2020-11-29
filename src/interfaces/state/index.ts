import { Api } from '../api';
import { IAppState } from './apps';
import { ISuggestionAppState } from './suggestionApps';

export interface State {
  app: IAppState;
  suggestionApp: ISuggestionAppState;
}

export interface ConfigureOptions {
  context: StoreContext;
}

export interface StoreContext {
  api: Api;
}

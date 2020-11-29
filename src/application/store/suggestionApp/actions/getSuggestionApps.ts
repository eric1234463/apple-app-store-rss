import { IApp } from '../../../../interfaces/api/app';

const GET_SUGGESTION_APPS_REQUEST = 'GET_SUGGESTION_APPS_REQUEST';
const GET_SUGGESTION_APPS_SUCCEEDED = 'GET_SUGGESTION_APPS_SUCCEEDED';
const GET_SUGGESTION_APPS_FAILED = 'GET_SUGGESTION_APPS_FAILED';

export interface GetSuggestionAppssRequestAction {
  type: typeof GET_SUGGESTION_APPS_REQUEST;
  payload: {
    page: number;
  }
}

export interface GetSuggestionAppssSucceededAction {
  type: typeof GET_SUGGESTION_APPS_SUCCEEDED;
  payload: {
    data: IApp[];
    page: number;
  };
}

export interface GetSuggestionAppssFailedAction {
  type: typeof GET_SUGGESTION_APPS_FAILED;
  payload: string;
}

type GetSuggestionAppssActionTypes =
  | GetSuggestionAppssRequestAction
  | GetSuggestionAppssSucceededAction
  | GetSuggestionAppssFailedAction;

export default GetSuggestionAppssActionTypes;

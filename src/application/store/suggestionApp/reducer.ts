import { Reducer } from "redux";
import { State } from "../../../interfaces/state";
import GetAppsActionTypes from "./actions/getSuggestionApps";

type ActionTypes = GetAppsActionTypes;

const initialState: State["suggestionApp"] = {
  isLoading: false,
  items: [],
  page: 1,
};

const suggestionApp: Reducer<State["suggestionApp"], ActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'GET_SUGGESTION_APPS_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_SUGGESTION_APPS_FAILED':
      return {
        ...state,
        isLoading: false,
      };
    case 'GET_SUGGESTION_APPS_SUCCEEDED':
      return {
        ...state,
        items: action.payload.data,
        page: action.payload.page,
      }
    default:
      return { ...state };
  }
};

export default suggestionApp;

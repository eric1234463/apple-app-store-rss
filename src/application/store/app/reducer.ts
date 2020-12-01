import { Reducer } from "redux";
import { State } from "../../../interfaces/state";
import GetAppsActionTypes from "./actions/getApps";

type ActionTypes = GetAppsActionTypes;

const initialState: State["app"] = {
  isLoading: false,
  items: [],
  page: 1,
};

const app: Reducer<State["app"], ActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "GET_APPS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_APPS_FAILED":
      return {
        ...state,
        isLoading: false,
      };
    case "GET_APPS_SUCCEEDED":
      return {
        ...state,
        items: action.payload.data,
        page: action.payload.page,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};

export default app;

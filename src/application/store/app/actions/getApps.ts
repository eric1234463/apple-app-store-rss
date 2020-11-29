import { IApp } from "../../../../interfaces/api/app";

const GET_APPS_REQUEST = "GET_APPS_REQUEST";
const GET_APPS_SUCCEEDED = "GET_APPS_SUCCEEDED";
const GET_APPS_FAILED = "GET_APPS_FAILED";

export interface GetAppsRequestAction {
  type: typeof GET_APPS_REQUEST;
  payload: {
    page: number;
  };
}

export interface GetAppsSucceededAction {
  type: typeof GET_APPS_SUCCEEDED;
  payload: {
    data: IApp[];
    page: number;
  };
}

export interface GetAppsFailedAction {
  type: typeof GET_APPS_FAILED;
  payload: string;
}

type GetAppsActionTypes =
  | GetAppsRequestAction
  | GetAppsSucceededAction
  | GetAppsFailedAction;

export default GetAppsActionTypes;

import { call, put, getContext, takeLatest } from "../../effects";
import { Api, Response } from "../../../../interfaces/api";
import { GetAppsRequestAction } from "../actions/getApps";
import { IApp } from "../../../../interfaces/api/app";

export function* getAppsApi(page: number) {
  const api: Api = yield getContext("api");
  return yield call(api.get, `apps`, { params: { page } });
}

export function* getApp(action: GetAppsRequestAction) {
  try {
    const result: Response<IApp[]> = yield call(
      getAppsApi,
      action.payload.page
    );

    yield put({
      type: "GET_APPS_SUCCEEDED",
      payload: {
        data: result.data,
        page: action.payload.page,
      },
    });
  } catch (e) {
    if (process.env.NODE_ENV !== "production") {
      console.error(e);
    }

    yield put({
      type: "GET_APPS_FAILED",
      payload: e.message,
    });
  }
}

export default function* takeGetApp() {
  yield takeLatest("GET_APPS_REQUEST", getApp);
}

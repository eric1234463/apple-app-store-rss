import { call, put, getContext, takeLatest } from "../../effects";
import { Api, Response } from "../../../../interfaces/api";
import { GetSuggestionAppssRequestAction } from "../actions/getSuggestionApps";
import { IApp } from "../../../../interfaces/api/app";

export function* getAppsApi(page: number) {
  const api: Api = yield getContext("api");
  return yield call(api.get, `suggestion_apps`, { params: { page } });
}

export function* getSuggestionApp(action: GetSuggestionAppssRequestAction) {
  try {
    const result: Response<IApp[]> = yield call(
      getAppsApi,
      action.payload.page
    );

    yield put({
      type: "GET_SUGGESTION_APPS_SUCCEEDED",
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
      type: "GET_SUGGESTION_APPS_FAILED",
      payload: e.message,
    });
  }
}

export default function* takeGetSuggestionApp() {
  yield takeLatest("GET_SUGGESTION_APPS_REQUEST", getSuggestionApp);
}

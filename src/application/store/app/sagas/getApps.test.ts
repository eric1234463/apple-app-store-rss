import { put, takeLatest, call, getContext } from "../../effects";
import takeGetApp, { getApp, getAppsApi } from "./getApps";

describe("[App Sagas/getApp]", () => {
  const api = {
    get: jest.fn()
  };

  const action = {
    payload: {
      page: 1
    }
  }

  const result = {
    data: []
  }

  const error = {
    message: 'Error'
  }
  it("should call createToast with CREATE_UI_TOAST_SUCCESS only", () => {
    const gen = getAppsApi(action.payload.page);

    expect(gen.next().value).toEqual(getContext('api'));
    expect(gen.next(api).value).toEqual(call(api.get, `apps`, { params: { page: action.payload.page } }));

    expect(gen.next().done);
  });

  it("should call getApp with GET_APPS_SUCCEEDED", () => {
    const generator = getApp(action);

    expect(generator.next().value).toEqual(call(getAppsApi, action.payload.page));
    expect(generator.next(result).value).toEqual(
      put({
        type: "GET_APPS_SUCCEEDED",
        payload: {
          data: result.data,
          page: action.payload.page
        },
      })
    );

    expect(generator.next().done);
  });

  it("should call getApp with GET_APPS_SUCCEEDED", () => {
    const generator = getApp(action);

    expect(generator.next().value).toEqual(call(getAppsApi, action.payload.page));
    expect(generator.throw(error).value).toEqual(
      put({
        type: "GET_APPS_FAILED",
        payload: error.message
      })
    );

    expect(generator.next().done);
  });

  it("should call takeGetApp with GET_APPS_REQUEST", () => {
    const generator = takeGetApp();

    expect(generator.next().value).toEqual(
      takeLatest("GET_APPS_REQUEST", getApp)
    );
    expect(generator.next().done);
  });
});

import { spawn } from './effects';
import appSagas from './app/sagas';
import suggestionAppSagas from './suggestionApp/sagas';

export function* rootSaga() {
  yield spawn(appSagas);
  yield spawn(suggestionAppSagas);
}

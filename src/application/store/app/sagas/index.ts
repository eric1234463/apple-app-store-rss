import { spawn } from '../../effects';
import takeGetApp from './getApps';

export default function* appSagas() {
  yield spawn(takeGetApp);
}

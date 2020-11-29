import { spawn } from '../../effects';
import takeGetSuggestionApp from './getSuggestionApp';

export default function* suggestionAppSagas() {
  yield spawn(takeGetSuggestionApp);
}

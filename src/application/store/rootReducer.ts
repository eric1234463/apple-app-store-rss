import { combineReducers } from 'redux';
import { State } from '../../interfaces/state';

import app from './app/reducer';
import suggestionApp from './suggestionApp/reducer'

const rootReducer = combineReducers<State>({
  app,
  suggestionApp
})

export default rootReducer;

import { combineReducers } from 'redux';

import { TODO } from '../actions';
import { todosReducer } from './todos';

export interface StoreState {
  todos: TODO[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});

import { TODO, ActionTypes, Action } from '../actions';

export const todosReducer = (state: TODO[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: TODO) => todo.id !== action.payload);
    default:
      return state;
  }
};

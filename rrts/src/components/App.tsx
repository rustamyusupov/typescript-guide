import { FC, ReactElement, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { TODO, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface Props {
  todos: TODO[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

type Fetching = boolean;

const _App: FC<Props> = ({ todos, fetchTodos, deleteTodo }): ReactElement => {
  const [fetching, setFetching] = useState<Fetching>(false);

  useEffect(() => {
    if (fetching && todos.length) {
      setFetching(false);
    }
  }, [fetching, todos]);

  const handleButtonClick = (): void => {
    setFetching(true);
    fetchTodos();
  };
  const handleTodoClick = (id: number): void => {
    deleteTodo(id);
  };

  const renderList = (): JSX.Element[] =>
    todos.map((todo: TODO) => (
      <div key={todo.id} onClick={() => handleTodoClick(todo.id)}>
        {todo.title}
      </div>
    ));

  return (
    <div>
      <button onClick={handleButtonClick}>Fetch</button>
      {fetching ? 'Loading...' : null}
      {renderList()}
    </div>
  );
};

const mapStateToProps = ({ todos }: StoreState): { todos: TODO[] } => ({
  todos,
});

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);

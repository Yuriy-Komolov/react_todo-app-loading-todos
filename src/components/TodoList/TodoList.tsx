import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';

type Props = {
  visibleTodos: Todo[];
};

export const TodoList: React.FC<Props> = ({ visibleTodos }) => (
  <section className="todoapp__main" data-cy="TodoList">
    {visibleTodos.map(todo => (
      <TodoItem todo={todo} key={todo.id} />
    ))}
  </section>
);

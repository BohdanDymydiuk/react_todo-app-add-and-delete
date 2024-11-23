/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem';

interface Props {
  filteredTodos: Todo[];
  tempTodos: Todo[];
  onDelete: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  onSelect: (id: number, todo: Todo) => void;
}

export const TodoList: React.FC<Props> = React.memo(
  ({ filteredTodos, tempTodos, onDelete, onSelect }) => {
    return (
      <section className="todoapp__main" data-cy="TodoList">
        {/* This todo is an active todo */}
        {filteredTodos.map(todo => {
          const { id } = todo;

          return (
            <TodoItem
              key={id}
              todo={todo}
              tempTodos={tempTodos}
              onDelete={onDelete}
              onSelect={onSelect}
            />
          );
        })}

        {/* This form is shown instead of the title and remove button */}
        {/* <form>
        <input
          data-cy="TodoTitleField"
          type="text"
          className="todo__title-field"
          placeholder="Empty todo will be deleted"
          value="Todo is being edited now"
        />
      </form> */}
      </section>
    );
  },
);

TodoList.displayName = 'TodoList';

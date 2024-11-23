/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import React from 'react';
import { Todo } from '../../types/Todo';

interface Props {
  todo: Todo;
  tempTodos: Todo[];
  onDelete: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  onSelect: (id: number, todo: Todo) => void;
}

export const TodoItem: React.FC<Props> = React.memo(
  ({ todo, tempTodos, onDelete, onSelect }) => {
    const { completed, title, id } = todo;
    const isCurrentTemporary = tempTodos.some(tTodo => tTodo.id === id);

    return (
      <div
        data-cy="Todo"
        className={classNames('todo', {
          completed: completed && !isCurrentTemporary,
        })}
      >
        <label className="todo__status-label">
          <input
            data-cy="TodoStatus"
            type="checkbox"
            className="todo__status"
            checked={completed ? true : false}
            onChange={() => onSelect(id, { ...todo, completed: !completed })}
          />
        </label>

        <span data-cy="TodoTitle" className="todo__title">
          {title}
        </span>
        <button
          type="button"
          className="todo__remove"
          data-cy="TodoDelete"
          onClick={event => onDelete(event, id)}
        >
          ×
        </button>
        {/* 'is-active' class puts this modal on top of the todo */}
        <div
          data-cy="TodoLoader"
          className={classNames('modal', 'overlay', {
            'is-active': isCurrentTemporary,
          })}
        >
          <div className="modal-background has-background-white-ter" />
          <div className="loader" />
        </div>
      </div>
    );
  },
);

TodoItem.displayName = 'TodoItem';

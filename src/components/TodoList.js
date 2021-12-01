import React from 'react';
import TodoListItem from './TodoListItem';
import style from '../TodoListItem.module.css';

const TodoList = ({ todoList, onRemoveTodo }) => {

  return (
    <div>
      <ul className={style.unorderedTodoList}>
        {todoList.map(function (item) {
          return (<TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo} />)
         })
        }
      </ul>
    </div>
  )
}
export default TodoList;
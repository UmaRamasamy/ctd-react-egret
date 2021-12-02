import React from 'react';
import TodoListItem from './TodoListItem';
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const TodoList = ({ todoList, onRemoveTodo }) => {

  TodoList.propTypes = {
    todoList: PropTypes.array,
    onRemoveTodo: PropTypes.func
  }

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
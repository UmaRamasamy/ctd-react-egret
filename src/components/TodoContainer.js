import React, { useState, useEffect } from 'react';
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm';
import PropTypes from 'prop-types';


function TodoContainer({ tableName }) {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${encodeURIComponent(tableName)}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,

        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setTodoList(data.records)
        setIsLoading(false)
      })

  }, [tableName]);

  /*useEffect(() => {
    if (isLoading === false) {
      window.localStorage.setItem('savedTodoList', todoList)
      localStorage.setItem('savedTodoList', JSON.stringify(todoList))
    }
  }, [isLoading, todoList]) */
  const addTodo = (newTodo) => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${encodeURIComponent(tableName)}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setTodoList([...todoList, data])
      })
  }
  const removeTodo = (id) => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${encodeURIComponent(tableName)}?records[]=${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setTodoList(todoList.filter((item) => item.id !== id))
      })
  };
  TodoContainer.propTypes = {
    tableName: PropTypes.string
  }
 
  return (
    <>
      <h1 >{tableName}</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
    </>
  );
}

export default TodoContainer;

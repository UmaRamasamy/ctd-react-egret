import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'


function App() {

  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: { todoList: localStorage.getItem('savedTodoList') ? JSON.parse(localStorage.getItem('savedTodoList')) : [] } })
      }, 2000)
    }).then((result) => {
      setTodoList(result.data.todoList)
      setIsLoading(false)
    })

  }, [])

  useEffect(() => {
    if (isLoading === false) {
      window.localStorage.setItem('savedTodoList', todoList)
      localStorage.setItem('savedTodoList', JSON.stringify(todoList))
    }
  }, [isLoading, todoList])
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }
  function removeTodo(id) {
    const newArr = todoList.filter(function (item) {
      return item.id !== id
    })
    setTodoList(newArr)

  }
  return (
    <>
      <h1>To Do List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
    </>
  );
}

export default App;

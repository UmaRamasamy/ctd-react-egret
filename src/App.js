import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'


function App() {

  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  console.log(process.env)
  console.log(process.env.REACT_APP_AIRTABLE_API_KEY)
  useEffect(() => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`

        }
      })
      .then((response) => response.json())
      .then((data) => {
        setTodoList(data.records)
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
    
      fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
           {
             method:'POST',
             headers:{
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
              'Content-type': 'application/json'
             },
             body: JSON.stringify(newTodo)
             
           }).then(response =>response.json())
           .then(data => setTodoList([...todoList,data]))
          }
    //setTodoList([...todoList, newTodo])

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


  export default App

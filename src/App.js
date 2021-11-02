import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'
import { BrowserRouter, Switch, Route,Link } from 'react-router-dom'


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
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          'Content-type': 'application/json'
        },
        body: JSON.stringify(newTodo)

      }).then(response => response.json())
      .then(data => setTodoList([...todoList, data]))
  }
  
  
  //setTodoList([...todoList, newTodo])

  function removeTodo(id) {
    const newArr = todoList.filter(function (item) {
      return item.id !== id
    })
    setTodoList(newArr)

  }
  return (
    <BrowserRouter>
    
    <nav>
      <ul>
        <li><Link to="/">List 1</Link></li>
        <li><Link to="/new">List 2</Link></li>
      </ul>
    </nav>
      <Switch>
        <Route exact path="/">
          <>
            <h1>To Do List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
          </>
        </Route>
        <Route path="/new" >
          <h1>New Todo List</h1>
        </Route>
      </Switch>
     
    </BrowserRouter>

  );
}


export default App

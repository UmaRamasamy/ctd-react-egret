import React from 'react';
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'
function App() {
  return (
    <>
     <h1>To Do List</h1>
     <AddTodoForm/>
     <TodoList/>
     
    </>
  );
}

export default App;

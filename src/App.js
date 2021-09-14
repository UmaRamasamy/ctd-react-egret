import React,{useState} from 'react';
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'

function App() {
   const[newTodo,setNewTodo]  = useState('')
  return (
    <>
     <h1>To Do List</h1>
     <AddTodoForm onAddTodo ={setNewTodo}/>
     <p>{newTodo}</p>
     <TodoList/>
     
    </>
  );
}

export default App;

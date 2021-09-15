import React,{useState} from 'react';
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'

function App() {
   const[todoList,setTodoList] = useState([]);
   const addTodo =(newTodo) =>{
     setTodoList([...todoList,newTodo])
    }  
  return (
    <>
     <h1>To Do List</h1>
     <AddTodoForm onAddTodo ={addTodo} />
     <TodoList todoList={todoList}/> 
    </>
  );
}

export default App;

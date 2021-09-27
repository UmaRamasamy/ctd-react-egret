import React,{useState,useEffect} from 'react';
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'

function useSemiPersistentState(){
  const[todoList,setTodoList] = useState(localStorage.getItem('savedTodoList')? JSON.parse(localStorage.getItem('savedTodoList')):[])
     
    useEffect(() => {
      window.localStorage.setItem('savedTodoList',todoList)
      localStorage.setItem('savedTodoList',JSON.stringify(todoList))
    },[todoList] )
   
     return [todoList,setTodoList] 
}

function App() {
  const[todoList,setTodoList] = useSemiPersistentState([]);
   
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

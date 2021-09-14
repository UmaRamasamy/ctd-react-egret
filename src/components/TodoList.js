import React from 'react';
import TodoListItem from './TodoListItem'
const todoList = [
    {
      id:1,
       title: "Car Service"
    },
  
    {
      id:2,
      title: "School Conference"
    },
    {
      id:3,
      title: "Dental Appointment"
    }
  
  ];

const TodoList = () => {

    return (
      <>
       <ul>
       {todoList.map(function(item){
         return (<TodoListItem key = {item.id} todo={item}/>)
         
       }) }
      </ul>
    </>
    )
}
export default TodoList
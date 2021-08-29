import React from 'react';
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
        <ul>
       {todoList.map(function(item){
         return <li key={item.objectID} >{item.title}</li>
       })}
     </ul>

    )
}
export default TodoList
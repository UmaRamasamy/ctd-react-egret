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
function App() {
  return (
    <>
     <h1>To Do List</h1>
     <ul>
       {todoList.map(function(item){
         return <li key={item.objectID} >{item.title}</li>
       })}
     </ul>
    </>
  );
}

export default App;

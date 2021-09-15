
import React,{useState} from 'react';

const AddTodoForm = ({onAddTodo}) => {
    const[todoTitle, setTodoTitle] = useState('')
    const handleTitleChange = (event) =>{
        const newTodoTitle = event.target.value
        setTodoTitle(newTodoTitle)
    }
    const handleAddTodo = (event) =>{
       event.preventDefault()
       //let todoTitle = event.target.title.value
       //console.log(todoTitle)

       onAddTodo({ title:todoTitle, id: Date.now() } )
       setTodoTitle('')
       //event.target.reset()    
    }

     return(
       <div>
          <form onSubmit={handleAddTodo} >
              <label htmlFor ="todoTitle">Title: </label>
              <input value={todoTitle} onChange={handleTitleChange} name= "title" type = "text" id ="todoTitle"></input>
              <button type="Submit"> Add</button>
              
          </form> 
       </div>
      )
}
export default AddTodoForm
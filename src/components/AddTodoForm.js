import React from 'react'

const AddTodoForm = (props) => {
   const handleAddTodo = (event) =>{
       event.preventDefault()
       let todoTitle = event.target.title.value
       console.log(todoTitle)

       props.onAddTodo(todoTitle)
       event.target.reset()
       
   }
     return(
       <div>
          <form onSubmit={handleAddTodo} >
              <label htmlFor ="todoTitle">Title: </label>
              <input name= "title" type = "text" id ="todoTitle"></input>
              <button type="Submit"> Add</button>
          </form> 
       </div>
    )
}
export default AddTodoForm
import React from 'react'

const AddTodoForm = () => {
   
     return(
       <div>
          <form>
              <label htmlFor ="todoTitle">Title: </label>
              <input type = "text" id ="todoTitle"></input>
              <button type="Submit"> Add</button>
          </form> 
       </div>
    )
}
export default AddTodoForm
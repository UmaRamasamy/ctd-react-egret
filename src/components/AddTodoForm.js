
import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import style from '../AddTodoForm.module.css';
import { SiAddthis } from "react-icons/si";


const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState('');
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle)
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    //let todoTitle = event.target.value
    //console.log(todoTitle)

    onAddTodo({ fields: { Title: todoTitle } })
    setTodoTitle('');
    //event.target.reset()    
  }
  return (
    <>
      <div>
        <form onSubmit={handleAddTodo}>
          <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>
            Title:
          </InputWithLabel>
          &nbsp;
          <button className={style.addBtn}
            type="Submit">
            <SiAddthis size={20} style={{ fill: 'brown' }} />
          </button>
        </form>
      </div>
    </>
  )
};
export default AddTodoForm;
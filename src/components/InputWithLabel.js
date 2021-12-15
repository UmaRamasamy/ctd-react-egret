//import { any } from 'prop-types';
import React, { useRef, useEffect } from 'react';
import style from './AddTodoForm.module.css';
import PropTypes from 'prop-types';


function InputWithLabel(props) {
  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current) { inputRef.current.focus() }
  })

  InputWithLabel.propTypes = {
    children: PropTypes.string,
    todoTitle: PropTypes.string,
    handleTitleChange: PropTypes.func
  }
  
  return (
    <>
      <label className={StyleSheet.formLabel} htmlFor="todoTitle">
        {props.children}
      </label>
      <input className={style.inputfiled} value={props.todoTitle} onChange={props.handleTitleChange} name="title" type="text" id="todoTitle" ref={inputRef}>
      </input>
    </>
  )
  
}
export default InputWithLabel;

import React, { useRef, useEffect } from 'react';
import style from '../AddTodoForm.module.css';

function InputWithLabel(props) {
  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current) { inputRef.current.focus() }
  })
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

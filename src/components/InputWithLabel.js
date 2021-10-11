import React, {useRef,useEffect} from 'react'

function InputWithLabel(props) {
 const inputRef = useRef();
  useEffect (()=>{
    if(inputRef.current){inputRef.current.focus()} 
  })
  return (
   <>
    <label htmlFor ="todoTitle">{props.children} </label>
    <input value={props.todoTitle} onChange={props.handleTitleChange} name= "title" type = "text" id ="todoTitle" ref={inputRef}></input>  
   </>
  )
}

export default InputWithLabel

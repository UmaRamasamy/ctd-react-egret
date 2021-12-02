import React, { useState } from 'react';
import style from './TodoListItem.module.css';
import { AiFillDelete } from "react-icons/ai";
//import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';


const TodoListItem = ({ todo, onRemoveTodo }) => {
  const [checked, setChecked] = useState({ labelChecked: false });
  const labelRef = React.createRef();

  const handleClick = e => {
    if (checked.labelChecked === false) {
      labelRef.current.style.textDecoration = "line-through";
    } else {
      labelRef.current.style.textDecoration = "none";
    }
    setChecked({ labelChecked: !checked.labelChecked });
  };
 TodoListItem.propTypes = {
   todo: PropTypes.object,
   onRemoveTodo: PropTypes.func

 }
  return (
    <div >
      <li className={style.ListItem}>
        {/*<input type="checkbox" checked={checked} onChange={onHandleChecked}className={style.checkbox1}  />*/}

        <label ref={labelRef} htmlFor="strikethrough">
          <input type="checkbox" id="strikethrough" name="strikethrough" onClick={handleClick} className={style.checkbox1} />
          &nbsp;&nbsp;
          {todo.fields.Title}
        </label>
        <button className={style.removeButton} type="button" onClick={() => onRemoveTodo(todo.id)}>
          <AiFillDelete size={20} style={{ fill: 'brown' }} />
        </button>
      </li>
    </div>
  )
};
export default TodoListItem;

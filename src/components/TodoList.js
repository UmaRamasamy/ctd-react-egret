import React from 'react';
import TodoListItem from './TodoListItem';
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';
import { sortBy } from 'lodash';
import { FaSort} from "react-icons/fa";


const SORTS ={
  NONE: (todoList) => todoList,
  TITLE: (todoList) => sortBy(todoList,'title').reverse(),
  ID:  (todoList)  => sortBy(todoList,'id').reverse(),
}; 


const TodoList = ({ todoList, onRemoveTodo }) => {
  const [sort, setSort] = React.useState({sortKey:'NONE', isReverse:false,});

   const handleSort =(sortKey)=>{
     const isReverse=sort.sortKey ===sortKey && !sort.isReverse;
     setSort({sortKey:sortKey,isReverse:isReverse});
   }
   const sortFunction = SORTS[sort.sortKey];
   const sortedList = sort.isReverse ? sortFunction(todoList).reverse():sortFunction(todoList);
   
  
   TodoList.propTypes = {
    todoList: PropTypes.array,
    onRemoveTodo: PropTypes.func
  }

  return (
    <> 
    <div>
        <span >
          <button className={style.sortBtn} type="button" onClick={()=>handleSort('TITLE')}>
            <FaSort />
          </button>
        </span>
      
        {/*<span>
        <button className={style.sortBtn1} type="button" onClick={()=>handleSort('ID')}>SortById</button>
        </span> */}
      </div> 
      
      <ul className={style.unorderedTodoList}>
        {sortedList.map(function (item) {
          return (<TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo} />)
         })
        }
        
      </ul>
    </>
  )
}
export default TodoList;
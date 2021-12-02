import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import style from './App.module.css';
import TodoContainer from './components/TodoContainer';
import { MdAssignment, MdAddShoppingCart } from "react-icons/md";

function App() {
  return (
    <div className={style.container}>
      <BrowserRouter>
        <nav >
          <ul className={style.navBar}>
            <li className={style.navlistitem} >
              <Link to="/list-1" className={style.navHref}>
                List-1
                <MdAssignment />
              </Link>
            </li>
            <li className={style.navlistitem}>
              <Link to="/list-2" className={style.navHref}>
                List-2
                <MdAddShoppingCart />
              </Link>
            </li>
          </ul>
        </nav>

        <div className={style.headlinePrimary}>
          <Switch>
            <Route path="/list-1">
              <TodoContainer tableName="List 1" />
            </Route>
            <Route path="/list-2" >
              <TodoContainer tableName="List 2" />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;

import React from 'react';

import Auth from '../auth/auth.js';
import { useState, useReducer } from 'react';
import styles from './todo.module.scss';


const Todo = props => {
  
  const initialState = { toDoItems: [] };
  
  const reducer = (state, {type, payload}) => {
    switch(type) {
      case 'TODO_LIST':
        let newItem = ({ title: item, status: false });
        return { toDoItems: [...state.toDoItems, newItem] }
      case 'TOGGLE':
        let newToDoItems = state.toDoItems.map( (item,idx) =>
          idx === payload ? {title:item.title, status:!item.status} : item
        );
        return { toDoItems: newToDoItems }
      default:
        return state
    }
  }

  const [item, handleItem] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleForm = (event) => {
    event.preventDefault();
    event.target.reset();
    dispatch({type: 'TODO_LIST', payload: null});
  };

  const handleChange = (event) => {
    handleItem(event.target.value);
  }

  const toggle = (e,id) => {
    e.preventDefault();
    dispatch({type: 'TOGGLE', payload: id});
  };

  return (
    <section className={styles.todo}>

      <Auth capability="read">
        {state.toDoItems.map((item, idx) =>
          <div key={idx} onClick={(e) => toggle(e, idx)}>
            <span className={styles[`complete-${item.status}`]}> {item.title} </span>
          </div>
        )}
      </Auth>

      <Auth capability="create">
        <form onSubmit={(event) => {handleForm(event)}}>
          <input
            onChange={(event) => {handleChange(event)}}
            name="item"
            placeholder="Add To Do List Item Here"
          />
        </form>
      </Auth>

    </section>
  );
};

export default Todo;

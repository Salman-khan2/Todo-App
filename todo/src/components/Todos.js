import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './Todo.css';


import { removeTodo } from '../redux/todoApp/actions';

export const Todos = () => {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // getting todos from the store
  const todos = useSelector((state)=>state.operationsReducer);
  return todos.map((todo)=>(
    <div className='todo-list'>
    <div key={todo.id} className='todo-box'>
      <input type='checkbox' className='checkbox'></input>
      <div className='content'>
            <p>
                {todo.todo}
            </p>
      </div>

        <div className='remove-box'>  
        <i class="fa-solid fa-trash" onClick={()=>dispatch(removeTodo(todo.id))} ></i>   
        </div>

    </div>
    </div>
  ))
}
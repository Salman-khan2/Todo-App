import React,{useState} from 'react'
import { useDispatch } from 'react-redux';


import { addTodo } from '../redux/todoApp/actions';

import './Form.css';

export const Form = () => {

  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // todo value state for normal add todo form
  const [todoValue, setTodoValue]=useState('');

  // normal add todo submit
  const handleSubmit=(e)=>{
      e.preventDefault();
      let date = new Date();
      let time = date.getTime();
      let todoObj={
          id: time,
          todo: todoValue,
          completed: false
      }
      setTodoValue('');
      dispatch(addTodo(todoObj))
  }
  return (
    <>
    <h1 className='task-details'>Task Details</h1>
    <div className='Task-Tittle'>
        <h2 className='Tittle'>Task tittle</h2>
        <h1>NFT Web App Prototype</h1>
    </div>

    <div className='Description'>
        <h2 className='Desc'>Description</h2>
        <p>Last year was a fantastic year for NFTs,With the marcket reaching a $40 billion valuation for the first time.In addition, more than $10 billion worth of NFTs are new sold every week-with NFT..</p>
    </div>
    <h2 className='task-list'>Task List</h2>
    <div className='helloyrr'>
        <form className='Task-List-Container' >
          <div className='input-and-btn'>
              <i class="fa-solid fa-plus add-btn"  onClick={handleSubmit}></i>
              <input type="text" className='input-text-container' required
              value={todoValue} onChange={(e)=>setTodoValue(e.target.value)} placeholder='Add Task' />
          </div>
        </form>
</div>
    </>
  )
}
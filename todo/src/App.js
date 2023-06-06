import {useState} from 'react';
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import {useDispatch,} from 'react-redux';
import { deleteAll } from './redux/todoApp/actions';
import './App.css';
function App() {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // getting todos state for conditional rendering
 

  // update form visibility state
   const [editFormVisibility, setEditFormVisibility]=useState(false);
    return (
      <>
      <Form/>

      <Todos  editFormVisibility={editFormVisibility}/>
      <div className='delete-all'>
        <button className='delete-btn'
        onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
      </div>
    </>
  );
}

export default App;
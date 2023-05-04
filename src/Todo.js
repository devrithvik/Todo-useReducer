import React, {useState,useReducer} from 'react'
import { Activities } from './Activities';
const ACTIONS = {
    ADD_TODO: 'addTodo',
    DELETE_TODO: 'deleteTodo'
}

export const Todo = () => {
    
    const [name,setName] = useState('');
    const [id,setId] = useState(0);


    const addTodo = (name) => {
        setId(id => id+1);
        return {id: id, name: name, completed: false};
    }

    
    const reducer = (state,action) => {  // the reducer function is totally dependent on " action.type "
        
        switch(action.type) {
        case ACTIONS.ADD_TODO: 
            return [...state, addTodo(action.payload.name)];
        case ACTIONS.DELETE_TODO:
            return state.filter((item) =>  item.id !== action.payload.itemId);
        default: 
            return [...state]                      
        }
    }
   
  
   
  // we have declared the reducer function and now we can use it in useReducer hook
  const [state, manupilate] = useReducer(reducer, []);
 
    const handleSubmit = (e) => {
        e.preventDefault();

        name.length!== 0 &&   manupilate({ type: ACTIONS.ADD_TODO, payload: { name:name } });
        setName('');
        
       
    }
    const handleDelete = (e,itemId) => {
        e.preventDefault();
        manupilate({ type: ACTIONS.DELETE_TODO, payload: { itemId: itemId } }); // we are providing the action value here.
        
    }
  
 

  return (
    <div className='w-full flex flex-col items-center mt-5  '> 
       <h1 className='mb-4 text-5xl font-thin'>TODO APP</h1>
    
        <form onSubmit={handleSubmit} className='max-w-[30vw] flex flex-col gap-y-4 justify-center bg-violet-400 p-4 rounded'>
            <input className='px-2'
             value={name} 
             onChange={(e) => setName(e.target.value)} 
             placeholder='next work todo..'></input>

            <button 
            className='bg-slate-200 bg-opacity-50 rounded-sm'
            type='submit'>SUBMIT</button>
        </form>
    {
     state.length !==0 &&  <Activities state={state} handleDelete={handleDelete} />
    }
    </div>
  
  )
  

}

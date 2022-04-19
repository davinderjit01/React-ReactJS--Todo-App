import { render } from '@testing-library/react';
//destructured usestate from react
import React, {useState} from 'react';

function TodoForm(){

    //use state is used to add state in a function component
const [input, setInput] = useState('')

return (
    <form className='todo-form'>
        <input 
            type="text" 
            placeholder = 'Add a todo' 
            value={input}
            name = 'text' className='todo-input'/>   
        <button className='todo-button'>Add todo</button>
    </form>
        
)}

export default TodoForm;


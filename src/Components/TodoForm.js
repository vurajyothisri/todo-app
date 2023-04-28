import React,{useState} from 'react'
import './App.css'
const TodoForm =({addTodo})=>{
    const [value,setvalue]=useState("");
    const handlesubmit=e=>{
        e.preventDefault();
        addTodo(value)
        setvalue("")
    }
    return(

        <form className='todoform' onSubmit={handlesubmit}>
            <input type="text" value={value} className='inputfield'  onChange={(e)=>setvalue(e.target.value)}  plaeceholder ="Enter the todo thing"/>
            <button type="submit">Add Todo</button>
        </form>
    );
}
export default TodoForm;
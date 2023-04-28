import React,{useState} from 'react'
import './App.css'
const EditTodo=({edittodo,task})=>{
    const [value,editvalue]=useState("");
    const handlesubmit=e=>{
        e.preventDefault();
        edittodo(value,task.id)
        // setvalue("")
    }
    return(

        <form className='todoform' onSubmit={handlesubmit}>
            <input type="text" value={value} plaeceholder ="update the todo" className='inputfield'  onChange={(e)=>editvalue(e.target.value)} />
            <button type="submit">Updata Todo</button>
        </form>
    );
}
export default EditTodo;
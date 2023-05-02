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

        <form className='todoform1' onSubmit={handlesubmit}>
            <input type="text" value={value} plaeceholder ="update the todo" className='inputfield1'  onChange={(e)=>editvalue(e.target.value)} />
            <button type="submit" className='editbutton'>Updata Todo</button>
        </form>
    );
}
export default EditTodo;
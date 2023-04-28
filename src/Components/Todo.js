import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"


const Todo=({task ,toggleComplete,deletetodo,edittodo})=>{
return(
    <div className="todo">
        <p onClick={()=>toggleComplete(task.id)} className={`${task.completed? 'completed':""}`}>{task.task}</p>
        <div className="font">
            <FontAwesomeIcon icon={faPenToSquare} onClick={()=>edittodo(task.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={()=>deletetodo(task.id)}/>
        </div>
    </div>
)
}
export default Todo
//
// 
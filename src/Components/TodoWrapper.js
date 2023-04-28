import React,{useState}from "react";
import  Todoform from "./TodoForm.js";
import {v4 as uuidv4} from 'uuid';
import Todo from "./Todo.js";
import EditTodo from "./Edittodoform.js";
uuidv4();
const TodoWrapper=()=>{
    const [todos,settodos]=useState([])
    const addTodo=todo=>{
        settodos([...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}])
        console.log(todos)
    }
    const toggleComplete=id=>{
        settodos(todos.map(todo=>todo.id===id?{...todo,completed:!todo.completed}:todo))
    }
    const deletetodo=id=>{
        settodos(todos.filter(todo=>todo.id!==id))
    }
    const edittodo=id=>{
        settodos(todos.map(todo=>todo.id===id?{...todo,isEditing:!todo.isEditing}:todo))
    }
    const edittask=(task,id)=>{
        settodos(todos.map(todo=>todo.id===id?{todo,task,isEditing:!todo.isEditing}:todo))
    }
    return(
        
        <div>
            <Todoform  addTodo={addTodo}/>
            {todos.map((todo,index)=>(
              todo.isEditing?(
                <EditTodo edittodo={edittask} task={todo}/>
              ):(
                <Todo task={todo}   key={index} toggleComplete={toggleComplete} deletetodo={deletetodo} edittodo={edittodo}/>
              )
             
            ))}
            
        
        </div>
    );
}
export default TodoWrapper
// 
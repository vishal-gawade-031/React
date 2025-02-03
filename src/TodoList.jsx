import { useState } from "react"
import {v4 as uuidv4 } from 'uuid';

export default function TodoList (){

    let [todos,Settodos]=useState([{task:"sample", id:uuidv4()}]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTodo=()=>{
            Settodos([...todos,{task:newTodo,id:uuidv4() }]);
            setNewTodo("")
    }

    let updateTodo=(event)=>{
       setNewTodo(event.target.value);
    }

    return(
        <div><h4>TodoList</h4>
        <input type="text" placeholder="enter Task" value={newTodo} onChange={updateTodo} />
        <button onClick={addNewTodo}>Add task</button>
        <br /><br /><br />
        <p>Task</p>
        <ul>
            {
                todos.map((todo)=>(
                    //key is the id for each element
                     <li key={todo.id}>{todo.task}</li>
                ))
                
            }
        </ul>
        </div>
    )
}
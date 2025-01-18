import { useState } from "react";
import './App.css'
function App(){
  let [todo,setTodo]=useState([])
  let [task,setTask]=useState("")
  const handleTodo=()=>{
    setTodo((pre)=>([...pre,task]))
    setTask("")
  }
  const handledelete=(index)=>{
    setTodo(todo.filter((data,ind)=>index!=ind))
  }
  const HandleEdit=(index)=>{
    let newTask = prompt("Enter new task",todo[index]);
    let newTodo=todo.map((data,ind)=>{
      if(index==ind){
        return newTask
      }else{
        return data
      }
    })
    setTodo(newTodo);
  }
  return(
    <>
    <div>
      <input type="text" onChange={(e)=>setTask(e.target.value)} placeholder="Task" value={task} />
      <button onClick={handleTodo}>Add</button>
    </div>
    <ul>
  {todo.map((td, ind) => (
    <li key={ind}>
    
      <div className="task-content">{td}</div>
      <button className="delete" onClick={() => handledelete(ind)}>Delete</button>
      <button className="edit" onClick={() => HandleEdit(ind)}>Edit</button>
    </li>
  ))}
</ul>

    </>
  )
}
export default App;
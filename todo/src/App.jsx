import { useEffect } from "react";
import { useState } from "react";

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
  return(
    <>
    <div>
      <input type="text" onChange={(e)=>setTask(e.target.value)} placeholder="Task" value={task} />
      <button onClick={handleTodo}>Add</button>
    </div>
     <ul>
      {
        todo.map((td,ind)=><li key={ind}>{td}<button onClick={()=>handledelete(ind)}>Delete</button></li>)
      }
     </ul>
    </>
  )
}
export default App;
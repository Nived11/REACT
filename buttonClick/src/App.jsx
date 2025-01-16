import { useState } from "react";

function App(){
  let [name,setName]=useState(0)
  const handleClick=()=>{
    setName(name+=1)
  }
  return(
    <>
    <button onClick={handleClick}>Click here</button>
    <h1>hello {name}</h1>
    </>
  )
}
export default App
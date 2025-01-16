import { useState } from "react";

function App(){
  let [value,setValue]=useState({name:"",cls:"",mark:""})
  let handleChange=(e)=>{
    setValue((pre)=>({...pre,[e.target.name]:e.target.value}))
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const {name,cls,mark}=value
    alert(`${name} ${mark} ${cls}`)
    setValue({name:"",mark:"",cls:""})
    console.log(useState);
    
    console.log(`Name:${value.name} Class:${value.cls} Mark:${value.mark}`);
  }
 
  
  return(
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={value.name} name="name" placeholder="Name"/>
      <input type="text" onChange={handleChange} value={value.mark} name="mark" placeholder="Mark"/>
      <input type="text" onChange={handleChange} value={value.cls}  name="cls" placeholder="Class"/>
      <input type="submit" value={"ADD DATA"} />
    </form>
    </>
  )
}
export default App;
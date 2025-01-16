import {useEffect} from "react"
import { useState } from "react"

function App(){
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((out)=>{
      setData([...out.products])
      return(()=>{console.log("unmound")})
    });

  },[])
  console.log(data);
  
  return(
    <>
     <ul>
      {
        data.map((dt,ind)=><li key={ind}>{dt.title}</li>)
      }
     </ul>
    </>
  )
}

export default App;
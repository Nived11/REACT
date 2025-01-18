import { useMemo, useState } from 'react'
import './App.css'
function App(){
  const [count,setCount] = useState(0)
  const [otherState,setOtherState] = useState(false)
  const expensiveCalculaton = useMemo(()=>{
    let sum = 0
    console.log('Expensive Calculaton');
    
    for(let i=0;i<1000000000;i++){
      sum+=i
    }
    return sum;
  },[count])
    
  return(
    <>
     <h1>Expensive Value {expensiveCalculaton}</h1>
     <button onClick={()=>setCount(count+1)}>Increment Value</button> 
     <button onClick={()=>setOtherState(!otherState)}>Toggle State</button>
    </>
  )
}
export default App
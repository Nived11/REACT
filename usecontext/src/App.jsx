import { createContext,useContext } from "react";

const UserContext=createContext();
function App(){
  const data="hello"
  return(
    <>
     <h1>Parent</h1>
     <UserContext.Provider value={data}>
      <Child1/>
      </UserContext.Provider>
    </>
  )
}
export default App;

function Child1(){
  return(
    <>
     <h1>Child1</h1>
     <Child2/>
    </>
  )
}

function Child2(){
  return(
    <>
     <h1>Child2</h1>
     <Child3/>
    </>
  )
}
function Child3(){
  return(
    <>
     <h1>Child3</h1>
      <Child4/>
    </>
  )
}

function Child4(){{
  const data=useContext(UserContext)
  return(
    <>
     <h1>Child4 {data}</h1>
    </>
  )
}
}
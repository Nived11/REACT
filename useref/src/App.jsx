import { useRef } from "react";

function App(){
  const inputref1 = useRef();
  const inputref2 = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${inputref1.current.value} your age is ${inputref2.current.value}`);
    console.log(inputref1.current.value);
    console.log(inputref2.current.value);
    inputref1.current.value = "";
    inputref2.current.value = "";
  }
  return(
    <>
    <form onSubmit={handleSubmit}>
    <input type="text" ref={inputref1} placeholder="Enter your name"/>
    <input type="text" ref={inputref2} placeholder="Enter your age"/>
    <input type="submit" />
    </form>
    </>
  )
}

export default App
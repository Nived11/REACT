import useCustomHook from "./Components/useCustomHook";
import "./App.css";
function App(){
  const {val,increment,decrement}=useCustomHook(0);
  return(
    <>
    <button onClick={decrement}>Decrement -</button>
    <span>{val}</span>
    <button onClick={increment}>Increment +</button>
   
    </>
  )
}
export default App;
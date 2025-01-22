import { useCallback , useState } from "react";
import "./App.css";

function App(){
  const [count, setCount] = useState(0);
  const [asd, setAsd] = useState(0);

  const increment = useCallback(() => {
    setCount((preCount) => preCount + asd);
  }, [asd]);
  console.log("function is re-rendered");
  

  return (
    <div>
      <p>Count {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={()=>setAsd (asd+1)}>incriment asd{asd}</button>
    </div>
  );
}
export default App;
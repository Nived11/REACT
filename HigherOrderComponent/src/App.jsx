import { useEffect , useState } from "react";
import "./App.css";
import withLoader from "./HOC";
import DataDisplay from "./BaseComponent";

const EnhancedDataDisplay = withLoader(DataDisplay);

function App() {
  const [data,setData] = useState([]);
  const[isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(["Item 1", "Item 2", "Item 3"]);
      setIsLoading(false);
    }, 5000);
  }, []);

  return <EnhancedDataDisplay data={data} isLoading={isLoading} />
}

export default App;
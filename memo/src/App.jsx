import About from "./Components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Contact from "./Components/Contact";
import PageNotFound from "./Components/PageNotFound";

function App(){
  return (
    <>
   
   <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" Component={About}/>
      <Route path="/contact/:id" Component={Contact}/>
      <Route path="*" Component={PageNotFound}/>

    </Routes>
   </BrowserRouter>
   </>
  )
}
export default App;
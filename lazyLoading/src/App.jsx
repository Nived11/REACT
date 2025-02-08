import React,{lazy, Suspense} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import withLoader from "./HOC";
// import DataDisplay from "./BaseComponent";


// const EnhanceDataDisplay = withLoader(DataDisplay);
function App() {
 const Hoc=lazy(()=>setData(import("./HOC")));
const Base=lazy(()=>setData(import("./BaseComponent")));
return(
  <div>
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Hoc />} />
      <Route path="/base" element={<Base />} />
    </Routes>
    </Suspense>
    </BrowserRouter>
  </div>
  )
}

export default App

async function setData(comp){
  await new Promise((res)=>{ setTimeout(res,3000)
    return comp
  })
}
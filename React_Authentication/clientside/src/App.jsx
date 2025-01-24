import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Registration/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  </BrowserRouter>
  )
}
export default App;
   

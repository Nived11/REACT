import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import AddEmp from './Components/AddEmp';
import Details from './Components/Details';
import EditEmp from './Components/EditEmp';
function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addemp' element={<AddEmp/>} />
        <Route path='/details/:id' element={<Details/>} />
        <Route path='/editemp/:id' element={<EditEmp/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
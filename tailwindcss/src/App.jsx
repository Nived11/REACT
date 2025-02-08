import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <div className="flex flex-wrap justify-center gap-4 mt-4 " >
      <div className="basis-64  border-2 border-purple-400 h-20 w-64 text-center">01</div>
      <div className="basis-64  border-2 blue-400  h-20 w-64 text-center">02</div>
      <div className="basis-64  border-2 border-red-500  h-20 w-64 text-center">03</div>
      <div className="basis-64  border-2 border-black-500  h-20 w-64 text-center">04</div>
      <div className="basis-64  border-2 border-yellow-500  h-20 w-64 text-center">05</div>
      <div className="basis-64  border-2 border-green-500  h-20 w-64 text-center">06</div>
      <div className="basis-64  border-2 border-orange-500  h-20 w-64 text-center">07</div>
      <div className="basis-64  border-2 border-pink-500  h-20 w-64 text-center">08</div>
    </div>
    
     <div>
      <div className="classname">Pading</div>
    </div>
    </>
  )
}

export default App

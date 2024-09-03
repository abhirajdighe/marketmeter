import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar"
import Home from "./Components/Home/index"
import MarketPrice from "./Components/MarketPrice"

function App() {

  return (
    <div className=' w-full bg-green-50'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prices" element={<MarketPrice />} />

      </Routes>


    </div>
  )
}

export default App

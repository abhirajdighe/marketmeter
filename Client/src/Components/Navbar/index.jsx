import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../asset/logos/MarketMeterlogo.png'

const Navbar = () => {
  return (
    <div className='h-[60px] w-[100%] flex justify-between items-center bg-green-300 font-mono'>
        <div className="logo pl-[20px] h-[50px]">
          <img className='h-full' src={logo} alt="" />
        </div>
        <div className="items w-[20%] justify-center pr-[20px] flex items-center text-xl">
          <div className='mr-[12px]'><Link to="/">Home</Link></div>
          <div className='mr-[12px]'><Link to="/prices">Market Rates</Link></div>
        </div>
    </div>
  )
}

export default Navbar
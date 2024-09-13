import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-[#134074] text-white h-[13vh]" >
      <div className="ml-20">
        <h1 className='text-3xl'>V O R K I N S T A</h1>
        <h6 className='text-sm text-gray-300'>WE BUILD ENTREPRENEURS</h6>
      </div>
      <div className="flex mr-20 text-lg font-normal">
        <ul className="flex ">
          <li><a className="ml-10 text-2xl font-bold border-b-4">HOME</a></li>
          <li><a className="ml-10 ">About Us</a></li>
          <li><a className="ml-10 ">FAQ</a></li>
        </ul>
        <Link to='/login'>
        <button className="ml-10  bg-white font-medium text-blue-950 px-4 rounded-lg" >Login</button></Link>
        <Link to='/signup'>
        <button className="ml-10 bg-white font-medium 
         text-blue-950 px-4 rounded-lg">Sign Up</button></Link>
      </div>
    </nav>

  )
}

export default Navbar;
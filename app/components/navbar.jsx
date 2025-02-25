'use client'

import React, { useState } from 'react'
import { IoMoon as Moon } from "react-icons/io5";
import { IoSunny as Sun } from "react-icons/io5";

function Navbar() {
  const [darkMode, setDarkMode] = useState(true)
  const HandleClick = () =>{
    setDarkMode(p=>!p)
  }
  return (
    <div className='w-[100%] flex items-center justify-center h-[60px] relative'>
        <div className='w-[100%] flex items-stretch justify-center gap-4 py-4 bg-green-100/90 shadow-sm fixed top-0 '>
            <a href='#' className='text-sm border-b-2 border-green-400 p-1 hover:border-green-800 text-green-800 transition-all ease-linear duration-300'>Home</a>
            <button className='text-lg p-1 border-b-2 border-green-400 hover:border-green-800 transition-all ease-linear duration-300' onClick={()=>{HandleClick()}}>{ darkMode?<Sun className='text-green-800'/>:<Moon className='text-green-800'/>}</button>
        </div>
    </div>
  )
}

export default Navbar
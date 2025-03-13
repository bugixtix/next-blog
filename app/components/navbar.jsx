'use client'

import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { IoMoon as Moon } from "react-icons/io5";
import { IoSunny as Sun } from "react-icons/io5";

function Navbar({darkMode = false,setDarkMode=()=>{}, darkModeSwitcher=false}) {
  useEffect(()=>{
    setDarkMode(Cookies.get("darkMode")==="true")
  },[])
  const HandleClick = () =>{
    setDarkMode(p=>!p)
  }
  return (
    <div className='w-[100%] flex items-center justify-center h-[60px] relative'>
        <div className='w-[100%] flex items-stretch justify-center gap-4 py-4 bg-green-800/90 shadow-sm fixed top-0 '>
            <a href='/' className='text-sm border-b-2 border-white p-1 hover:border-green-400 hover:text-green-400 text-white transition-all ease-linear duration-300'>Home</a>
            {darkModeSwitcher && <button className='group text-lg p-1 border-b-2 border-white hover:border-green-400 hover:text-green-400 transition-all ease-linear duration-300' onClick={()=>{HandleClick()}}>{ darkMode?<Sun className='group-hover:text-green-300 text-white transition-all duration-300 ease-linear'/>:<Moon className='text-white group-hover:text-green-300 transition-all duration-300 ease-linear'/>}</button>}
        </div>
    </div>
  )
}

export default Navbar
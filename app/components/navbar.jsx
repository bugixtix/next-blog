'use client'

import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { IoMoon as Moon } from "react-icons/io5";
import { IoSunny as Sun } from "react-icons/io5";

function Navbar({theme = false,setTheme=()=>{}, themeSwitcher=false}) {
  useEffect(()=>{
  },[])
  const HandleClick = () =>{
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme);
    Cookies.set("theme", newTheme, { expires: 365 });
  }

  const ITEMS = [
    // {
    //   id:0,
    //   text:"Startseite",
    //   href:"/",
    //   className:"text-lg font-semibold tracking-wide p-1 hover:text-green-500 text-[rgb(var(--forderground))] transition-all ease-linear duration-300"
    // },
    {
      id:1,
      text:"Artikel",
      href:"/",
      className:"text-lg font-semibold tracking-wide p-1 hover:text-purple-500 text-[rgb(var(--forderground))] transition-all ease-linear duration-300"
    },
    {
      id:2,
      text:"Über Mich",
      href:"/uebermich",
      className:"text-lg font-semibold tracking-wide p-1 hover:text-red-500 text-[rgb(var(--forderground))] transition-all ease-linear duration-300"
    },
    {
      id:3,
      text:"Kontakt",
      href:"/kontakt",
      className:"text-lg font-semibold tracking-wide p-1 hover:text-slate-500 text-[rgb(var(--forderground))] transition-all ease-linear duration-300",
    }
  ]
  return (
    <div className='w-[100%] flex items-center justify-center relative'>
        <div className='w-[100%] flex flex-wrap items-center justify-center gap-2 sm:gap-8 py-12'>
        {
          ITEMS.map((i,index)=>(<a key={index} href={i.href} className={i.className}>{i.text}</a>))
        }
            {<button disabled={!themeSwitcher} className='flex flex-wrap justify-center items-center group  transition-all ease-linear duration-300' onClick={()=>{HandleClick()}}>{ theme==="dark"?<Sun className={`${!themeSwitcher && 'opacity-0'} text-2xl group-hover:text-yellow-400 text-[rgb(var(--forderground))] transition-all duration-300 ease-linear`}/>:<Moon className={`${!themeSwitcher && 'opacity-0'} text-2xl text-[rgb(var(--forderground))] group-hover:text-blue-400 transition-all duration-300 ease-linear`}/>}</button>}
        </div>
    </div>
  )
}

export default Navbar
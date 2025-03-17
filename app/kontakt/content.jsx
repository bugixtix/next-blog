'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '@/app/components/navbar'
import Profile from '@/app/components/profile.jsx'
import Newsletter from '@/app/components/newsletter.jsx'
import Footer from '@/app/components/footer'
import { LiaLongArrowAltRightSolid as Arrow} from "react-icons/lia";

export function ContactForm(){
    const DoSubmit = () =>{
        console.log('submitted!')
    }
    return(
        <div>
            <form onSubmit={DoSubmit}>
                <div>
                    <label></label>
                    <input/>
                </div>
                <div>
                    <label></label>
                    <input/>
                </div>
                <div>
                    <label></label>
                    <input/>
                </div>
                <div>
                    <button className='flex flex-row gap-2 items-center text-xl'>Send Message <Arrow className='text-2xl'/> </button>
                </div>
            </form>
        </div>
    )
}
function Content() {
    const [theme, setTheme] = useState("light")
    useEffect(()=>{
        const newTheme = localStorage.getItem("theme")
        setTheme(newTheme)
    },[])
  return (
    <div className={`${theme==="dark"?'dark':'light'} bg-[rgb(var(--background))]`}> 
        <Navbar theme={theme} setTheme={setTheme}/>
        <Profile/>
        <ContactForm/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Content
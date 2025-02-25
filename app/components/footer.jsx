'use client'
import { IoLogoGithub as Cat} from "react-icons/io5";
import React from 'react'

function Footer() {
    const text = " © Haj-Ahmad Housam"
    const date = new Date()
    const year_ = date.getFullYear()
  return (
    <div className='w-[100%] flex items-center justify-center'>
        <div className='w-[100%] flex items-center justify-center gap-4 py-4 bg-green-100'>
            <a className='text-xs hover:underline cursor-pointer flex flex-wrap gap-1 items-center italic text-green-950' href="https://www.github.com/bugixtix" target="_blank" rel='noopener noreferrer' >{year_ + text}<span><Cat/></span></a>
            
        </div>
    </div>
  )
}

export default Footer
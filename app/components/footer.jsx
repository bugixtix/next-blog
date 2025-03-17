'use client'
import { IoLogoGithub as Cat} from "react-icons/io5";
import React from 'react'

function Footer() {
    const text = " © Haj-Ahmad Housam"
    const date = new Date()
    const year_ = date.getFullYear()
  return (
    <div className='w-[100%] flex items-center justify-center'>
        <div className='w-[100%] flex items-center justify-center gap-4 pt-8 pb-16'>
            <a className='text-sm hover:underline cursor-pointer flex flex-wrap gap-1 items-center text-[rgb(var(--footer))]' href="https://www.github.com/bugixtix" target="_blank" rel='noopener noreferrer' >{year_ + text}<span><Cat/></span></a>
        </div>
    </div>
  )
}

export default Footer
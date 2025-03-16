'use client'

import Image from 'next/image'
import React from 'react'
import pfp from '@/public/pfp.jpg'
function Profile({darkMode=false}) {

    const mainText = "Haj-Ahmad Housam"
    const descriptionText = "Webentwickler mit Fokus auf moderne und effiziente Lösungen."
  return (
    <div className='w-[100%] flex items-center justify-center'>
        <div className='w-[100%] md:w-[50%] flex flex-col items-center p-2 pt-4 md:pt-8 gap-1' >
            <Image className='shadow-lg w-[180px] sm:w-[240px] rounded-[100%] ' alt='Bild' src={pfp}/>
            <p className={`text-2xl/normal tracking-normal sm:text-3xl text-center font-bold pt-2 text-[rgb(var(--profile-title))]`}>{mainText}</p>
            <p className={`text-lg/normal sm:text-2xl text-center italic font-semibold text-[rgb(var(--forderground))]`}>{descriptionText}</p>
        </div>
    </div>
  )
}

export default Profile
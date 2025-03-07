'use client'

import Image from 'next/image'
import React from 'react'
import pfp from '@/public/pfp.jpg'
function Profile() {

    const mainText = "Willkommen auf meinem Blog! Hier findest du hilfreiche Tipps und Tricks rund um Next.js sowie allgemeine Programmierhinweise, die dir den Entwicklungsprozess erleichtern."
    const descriptionText = "Dieser Blog bietet praxisnahe Anleitungen, Best Practices und Problemlösungen für Next.js und andere Programmier-Themen. Egal, ob du Anfänger oder erfahrener Entwickler bist – hier gibt es wertvolle Insights für effizientere und modernere Entwicklung."
  return (
    <div className='w-[100%] flex items-center justify-center bg-[rgb(var(--forderground))]'>
        <div className='w-[100%] md:w-[60%] flex flex-col p-4 pt-8 md:pt-8 gap-1' >
            <Image className='shadow-lg w-[180px] rounded-md ' alt='Bild' src={pfp}/>
            <p className='text-[25px]/tight tracking-normal font-semibold pt-2'>{mainText}</p>
            <p className='text-[20px] text-[rgb(var(--background))]'>{descriptionText}</p>
        </div>
    </div>
  )
}

export default Profile
'use client'

import React from 'react'
import Image from 'next/image'
import image_ from '@/public/example.jpg'
import { useEffect, useState } from 'react'

function ArticleBox({content}) {
  const [content_, setContent_] = useState({
    title:"loading",
    description:"loading",
    imgPath:"/loading",
    id:999,
    text:"",
    date:"01.01.2000"
  })

  useEffect(()=>{
    setContent_(content)
  },[])

  return (
    <div>
        <div className='w-[100%] flex flex-col lg:flex-row gap-4 cursor-pointer group transition-all duration-500 ease-linear'>
            <div className=' w-[100%] lg:w-[280px]'>
                <Image width={280} height={0} src={content_.imgPath} alt='bild' className='w-[100%] object-cover rounded-md group-hover:scale-[1.02] transition-all ease-linear duration-500 shadow-lg group-hover:shadow-2xl'/>
            </div>
            <div className='flex flex-col gap-2 w-[100%] lg:w-[50%]'>
                <p className='text-gray-600 italic text-[14px] font-semibold'>{content_.date}</p>
                <p className='text-black font-semibold text-lg group-hover:underline'>{content_.title}</p>
                <p className='text-gray-800'>{content_.description}</p>
            </div>
        </div>
    </div>
  )
}

export default ArticleBox

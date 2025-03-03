'use client'

import React from 'react'
import Image from 'next/image'
import image_ from '@/public/example.jpg'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
function ArticleBox({content}) {

  const router = useRouter()
  const [content_, setContent_] = useState({
    title:"loading",
    description:"loading",
    imgPath:"/loading",
    id:999,
    text:"",
    date:"01.01.2000"
  })

  const handleClick = (href) =>{
    router.push(`/artikel/${href}`)
  }
  useEffect(()=>{
    setContent_(content)
  },[])


  return (
    <div>
        <Link href={`/artikel/${content_.id}`} className='w-[100%] flex flex-col lg:flex-row gap-6 cursor-pointer group transition-all duration-500 ease-linear'>
            <div className=' w-[100%] lg:w-[280px]'>
                <Image width={200} height={150} src={content_.imgPath} alt='bild' className='w-[100%] object-contain rounded-md outline-[calc(280px/2)] outline outline-black/50 outline-offset-[calc(280px/-2)] group-hover:outline-[4px] group-hover:outline-green-800/90 group-hover:outline-offset-[4px] aspect-[1] transition-all ease-linear duration-500 shadow-lg group-hover:shadow-2xl'/>
            </div>
            <div className='flex flex-col gap-2 w-[100%] lg:w-[50%]'>
                <p className='text-gray-600 italic text-[14px] font-semibold'>{content_.date}</p>
                <p className='text-black font-semibold text-lg group-hover:underline'>{content_.title}</p>
                <p className='text-gray-800'>{content_.description}</p>
            </div>
        </Link>
    </div>
  )
}

export default ArticleBox

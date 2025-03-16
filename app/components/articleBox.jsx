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
    imgPath:"/images/nextjs.webp",
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
        <Link href={`/artikel/${content_.id}`} className='w-[100%] flex flex-col items-start md:flex-row gap-6 cursor-pointer group transition-all duration-500 ease-linear md:pl-8'>
            <div className=' w-[100%] h-auto md:h-[330px] md:w-[330px]'>
                <Image width={250} height={150} src={content_.imgPath} alt='bild' className='w-[100%] h-[100%] object-contain bg-gray-300' priority/>
            </div>
            <div className='flex flex-col gap-2 w-[100%]  flex-1'>
                <p className='text-[rgb(var(--forderground))] font-semibold text-2xl sm:text-3xl/snug tracking-tight'>{content_.title}</p>
                <p className='text-[rgb(var(--forderground))] italic text-lg font-light'>{content_.date}</p>
                <p className='text-[rgb(var(--forderground))] text-lg/tight sm:text-[28px]/snug  md:pr-8'>{content_.description}</p>
            </div>
        </Link>
    </div>
  )
}

export default ArticleBox

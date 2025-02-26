'use client'

import React,{use, useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'
import ARTICLES from '@/public/articles.json'
function page({params}) {
  const {id} = use(params);
  const [content_, setContent_] = useState({
    id:999,
    date:"01.01.2000",
    title:"loading",
    descriptions:"loading",
    imgPath:"/example.jpg",
    text:"lorem ipsum"
  })

  useEffect(()=>{
    setContent_(ARTICLES[id])
  },[])
  return (
    <div>
      <h1>
        {content_.date}
      </h1>
    </div>
  )
}

export default page
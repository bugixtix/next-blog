'use client'

import React from 'react'
import ArticleBox from '@/app/components/articleBox.jsx'
import Div_ from '@/app/components/div.jsx'
import ARTICLES from '@/public/articles.json'

function Content({theme="light"}) {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center">
        {
            ARTICLES.map((item,index)=>(<Div_ key={index} className={` bg-transparent w-[100%] md:w-[100%] py-8 px-4 `} children={<ArticleBox content={item}/>}/>))
        }
    </div>
  )
}

export default Content
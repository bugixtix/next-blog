'use client'

import React from 'react'
import ArticleBox from '@/app/components/articleBox.jsx'
import Div_ from '@/app/components/div.jsx'
import ARTICLES from '@/public/articles.json'

function Content() {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center">
        {
            ARTICLES.map((item,index)=>(<Div_ key={index} className={`${index!==ARTICLES.length-1&&'border-b-gray-800 border-b-2'} bg-transparent w-[100%] md:w-[60%] py-8 px-4 `} children={<ArticleBox content={item}/>}/>))
        }
    </div>
  )
}

export default Content
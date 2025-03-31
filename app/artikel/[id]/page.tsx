

import {cookies} from 'next/headers'
import Footer from '@/app/components/footer'
import ARTICLES from '@/public/articles.json'
import Div_ from '@/app/components/div'
import Navbar from '@/app/components/navbar'
import ArticleBox from '@/app/components/articleBox'
import Image from 'next/image'
import {promises as fs} from "fs"
import matter from "gray-matter"
import process from 'process'
import Markdown from "react-markdown"
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

export async function generateMetadata({ params }){

  const {id} = await params  
  const article = ARTICLES.find((a) => Number(a.id)===Number(id));
  return {
    title: `${article?.title} | Haj-Ahmad Blog`,
    description: article?.description,
  };
}
async function page({params}) {

  // 
  const _cookies = await cookies()
  const theme = _cookies.get("theme")?.value || "light"

  // 
  const {id} = await params
  // 
  const relatedText = "Was du gerne noch lesen würdest:"
  const lastTwoArticles = ARTICLES.slice(-2).filter((_, i) => ARTICLES.length - 2 + i !== Number(id));

  const file  = await fs.readFile(process.cwd() + `/public/articles/${id}.md`, 'utf-8')
  var {data, content} = matter(file)

  return (
    <div className={`w-[100%] flex flex-col items-center ${theme ==="dark"?'dark bg-black':'light'}`}>
      <Navbar/>
      <div className='w-[100%] p-4 flex flex-col items-center'>

      <div className='w-[100%] lg:w-[65%] 2xl:w-[70%] flex flex-col items-start py-4'>
        <a href="/" className="text-[rgb(var(--gray))] font-medium text-lg" >⬅️ Zurück zur Startseite </a>
        <p className='text-[rgb(var(--forderground))] font-semibold text-4xl/tight mt-28'>{data?.title}</p>
        <p className='text-[rgb(var(--gray))] italic text-lg/tight mb-28'>{data?.date}</p>
        <p className='text-[rgb(var(--forderground))] text-2xl/snug'>{data?.description}</p>
      </div>
      <div className='w-[100%] py-8 px-4'>
        <Image className='w-[100%]' src={data?.cover} alt='bild' width={800} height={200} priority />
      </div>
      <div className='markdown w-[100%] lg:w-[65%] 2xl:w-[70%] article-page text-[rgb(var(--forderground))]'>
        <Markdown rehypePlugins={[rehypeHighlight, rehypeRaw]} remarkPlugins={[remarkGfm]}>
          {content}
        </Markdown>
      </div>
      <div className="w-[100%] lg:w-[65%] 2xl:w-[70%] flex flex-col justify-center items-center pt-8">
        <p className='text-[rgb(var(--forderground))] text-2xl font-semibold mb-4'>{relatedText}</p>
        {
            lastTwoArticles.map((item,index)=>(
              <Div_ key={index} className={`bg-transparent w-[100%] py-8 px-0 `} children={<ArticleBox content={item}/>}/>
            ))
        }
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page
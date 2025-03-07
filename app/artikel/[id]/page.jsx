// import {use} from 'react'
import {notFound} from 'next/navigation'
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
async function page({params}) {
  const relatedText = "Was du gerne noch lesen würdest:"
  const lastTwoArticles = ARTICLES.slice(-2).filter((_, i) => ARTICLES.length - 2 + i !== Number(params.id));

  // const {id} = use(params);
  // const [content_, setContent_] = useState({
  //   id:999,
  //   date:"01.01.2000",
  //   title:"loading",
  //   descriptions:"loading",
  //   imgPath:"/example.jpg",
  //   text:"lorem ipsum"
  // })
  const file  = await fs.readFile(process.cwd() + `/public/articles/${params?.id}.md`, 'utf-8')
  var {data, content} = matter(file)
  // meta = {meta}
  const {id} = await params
  // console.log(id)
  console.dir(content ,{depth:null})
  return (
    <div className={`w-[100%] flex flex-col items-center ${darkMode?'dark':'light'}`}>
      <Navbar/>
      <div className='w-[100%] lg:w-[60%] 2xl:w-[70%] p-4 bg-[rgb(var(--background))]'>

      <div className=' flex flex-col items-center py-4'>
        <p className='text-gray-500 italic text-sm'>{data?.date}</p>
        <p className='font-semibold text-3xl my-4'>{data?.title}</p>
        <p className='text-lg/snug'>{data?.description}</p>
      </div>
      <div className='w-[100%] py-1'>
        <Image className='w-[100%]' src={data?.cover} alt='bild' width={800} height={200} />
      </div>
      <div className='article-page'>
        <Markdown rehypePlugins={[rehypeHighlight, rehypeRaw]} remarkPlugins={[remarkGfm]}>
          {content}
        </Markdown>
      </div>
      <div className="w-[100%] flex flex-col justify-center items-center pt-8">
        <p className='text-lg font-semibold'>{relatedText}</p>
        {
            lastTwoArticles.map((item,index)=>(
              <Div_ key={index} className={`${index!==ARTICLES.length-1&&'border-b-gray-800 border-b-2'} bg-transparent w-[100%] py-8 px-0 `} children={<ArticleBox content={item}/>}/>
            ))
        }
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page
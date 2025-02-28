// import {use} from 'react'
import {notFound} from 'next/navigation'
import ARTICLES from '@/public/articles.json'
import Image from 'next/image'
import {promises as fs} from "fs"
import matter from "gray-matter"
import process from 'process'
async function page({params}) {
  // const {id} = use(params);
  // const [content_, setContent_] = useState({
  //   id:999,
  //   date:"01.01.2000",
  //   title:"loading",
  //   descriptions:"loading",
  //   imgPath:"/example.jpg",
  //   text:"lorem ipsum"
  // })
  const file  = await fs.readFile(process.cwd() + '/public/articles/1.md', 'utf8')

  console.log(file)
  return (
    <div className='w-[100%] flex flex-col items-center'>
      <div className='w-[100%] md:w-[60%] p-4'>

      {/* <div className=' flex flex-col items-center py-4'>
        <p className='text-gray-500 italic text-sm'>{ARTICLES[id].date}</p>
        <p className='font-semibold text-lg'>{ARTICLES[id].title}</p>
        <p className='text-base/snug'>{ARTICLES[id].description}</p>
      </div>
      <div className='w-[100%] py-1'>
        <Image className='w-[100%] aspect-[1]' src={ARTICLES[id].imgPath} alt='bild' width={800} height={200} />
      </div> */}
      <div></div>
      </div>
    </div>
  )
}

export default page
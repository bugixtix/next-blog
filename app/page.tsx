'use client'
import Image from "next/image";
import Navbar from '@/app/components/navbar.jsx'
import Profile from '@/app/components/profile.jsx'
import Content from '@/app/components/homeContent.jsx'
import Pseudo from '@/app/components/pseudoDiv.jsx'
import Newsletter from '@/app/components/newsletter.jsx'
import Footer from '@/app/components/footer.jsx'
import {useState, useEffect} from 'react'
import {parse} from 'cookie'
import Cookies from 'js-cookie'
import {GetServerSideProps} from 'next'
export default function Home() {
  const [theme, setTheme] = useState("light")
  const [loaded, setLoaded] = useState(false)
  useEffect(()=>{
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    Cookies.set("theme", savedTheme, { expires: 365 });
    setLoaded(true)
  },[])

  return (
      <div className={`${theme==="dark"?'dark':'light'} bg-[rgb(var(--background))]`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Profile/>
      <Pseudo className="h-[2rem]"/>
      <Content theme={theme}/>
      <Newsletter/>
      <Footer/>
    </div>   
  );
}

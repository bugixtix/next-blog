'use client'
import Image from "next/image";
import Navbar from '@/app/components/navbar.jsx'
import Profile from '@/app/components/profile.jsx'
import Content from '@/app/components/homeContent.jsx'
import Pseudo from '@/app/components/pseudoDiv.jsx'
import Footer from '@/app/components/footer.jsx'
import {useState, useEffect} from 'react'
import {parse} from 'cookie'
import Cookies from 'js-cookie'
import {GetServerSideProps} from 'next'
export default function Home() {
  const [darkMode, setDarkMode] = useState(true)
  useEffect(()=>{
    setDarkMode(Cookies.get("darkMode")==="true")
  },[])
  useEffect(()=>{
    Cookies.set("darkMode", darkMode.toString(), {expires:365, path:"/"})
  },[darkMode])

  return (
    <div className={`${darkMode?'dark':'light'} bg-[rgb(var(--background))]`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} darkModeSwitcher={true} />
      <Pseudo className="h-[2rem]"/>
      <Profile/>
      <Content/>
      <Footer/>
    </div>
  );
}

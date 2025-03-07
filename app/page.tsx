'use client'
import Image from "next/image";
import Navbar from '@/app/components/navbar.jsx'
import Profile from '@/app/components/profile.jsx'
import Content from '@/app/components/homeContent.jsx'
import Pseudo from '@/app/components/pseudoDiv.jsx'
import Footer from '@/app/components/footer.jsx'
import {useState} from 'react'
export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={`${darkMode?'dark':'light'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Pseudo className="h-[2rem]"/>
      <Profile/>
      <Content/>
      <Footer/>
    </div>
  );
}

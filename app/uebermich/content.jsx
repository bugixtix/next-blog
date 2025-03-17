'use client'
import React, { useState, useEffect } from 'react'
import Navbar from '@/app/components/navbar'
import Profile from '@/app/components/profile.jsx'
import Newsletter from '@/app/components/newsletter.jsx'
import Footer from '@/app/components/footer'
import Sea from '@/public/images/sea.jpg'
import Image from 'next/image'

export function AboutMe(){

    const text = {
        intro:"Hallo, ich bin Housam. Willkommen auf meiner Seite – meinem kreativen Raum, in dem ich über alles schreibe, was mich inspiriert und dir vielleicht auch neue Impulse gibt. Hier findest du Artikel, Tipps und Know-how rund um Webentwicklung, Technologie und mehr. Viel Spaß beim Entdecken! 🚀",
        title:["My soldiers push forward!"," — Commander Erwin"],
        description:"	Everything that you thought had meaning: every hope, dream, or moment of happiness. None of it matters as you lie bleeding out on the battlefield. None of it changes what a speeding rock does to a body, we all die. But does that mean our lives are meaningless? Does that mean that there was no point in our being born? Would you say that of our slain comrades? What about their lives? Were they meaningless?... They were not! Their memory serves as an example to us all! The courageous fallen! The anguished fallen! Their lives have meaning because we the living refuse to forget them! And as we ride to certain death, we trust our successors to do the same for us! Because my soldiers do not buckle or yield when faced with the cruelty of this world! My soldiers push forward! My soldiers scream out! My soldiers RAAAAAGE!",
        imgDescription:"Meer!"
    }
    const title = ["My soldiers push forward!"," — Commander Erwin"]
    return(
        <div className="_main flex flex-col w-[100%] items-center gap-2 pt-10">
            {/* <div className="_line w-[280px] sm:w-[40%] h-[1px] bg-[rgb(var(--gray))] rounded-2xl my-16"></div> */}
            <div className="_intro sm:w-[60%] py-10">
                <p className="font-semibold text-xl text-[rgb(var(--intro))] text-start"> {text.intro}</p>
            </div>
            <div className="_line w-[280px] sm:w-[40%] h-[1px] bg-[rgb(var(--gray))] rounded-2xl my-16"></div>
            <div className="_image p-2 sm:p-8 text-center italic">
                <Image src={Sea} alt="Bild" />
                {text.imgDescription}
            </div>
            <div className="_title flex flex-row sm:w-[70%] text-[rgb(var(--forderground))] p-1">
                <h2 className=" font-semibold italic">&#x275B; {text.title[0]} &#x275C; <span className="not-italic">{text.title[1]}</span></h2>
            </div>

            <div className="_text sm:w-[65%] p-4 text-[rgb(var(--forderground))]">
                <p className="font-medium text-[28px]/relaxed">
                    {text.description}
                </p>
            </div>
            {/* <div className="_line w-[280px] sm:w-[40%] h-[1px] bg-[rgb(var(--gray))] rounded-2xl my-16"></div> */}
        </div>
    )
}


function Content() {
    const [theme, setTheme] = useState("light")
    useEffect(()=>{
        const newTheme = localStorage.getItem("theme")
        setTheme(newTheme)
    },[])


  return (
    <div className={`${theme==="dark"?'dark':'light'} bg-[rgb(var(--background))]`}> 
        <Navbar theme={theme} setTheme={setTheme} /> 
        <Profile/> 
        <AboutMe/> 
        <Newsletter/>
        <Footer/> 
    </div>    
  )
}

export default Content
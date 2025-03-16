// 'use client'
import React from 'react'
import {cookies} from 'next/headers'
import Navbar from '@/app/components/navbar'
import Profile from '@/app/components/profile.jsx'
import Footer from '@/app/components/footer'
import Sea from '@/public/images/sea.jpg'
import Image from 'next/image'


export async function generateMetadata({}){

  const title = "Über Mich"
  const description = "Hier kannst du einen Überblick über meine Person (Haj-Ahmad Housam) haben."
  return {
    title: `${title} | Haj-Ahmad Blog`,
    description: description,
  };
}

export function AboutMe(){

    const text = "	Everything that you thought had meaning: every hope, dream, or moment of happiness. None of it matters as you lie bleeding out on the battlefield. None of it changes what a speeding rock does to a body, we all die. But does that mean our lives are meaningless? Does that mean that there was no point in our being born? Would you say that of our slain comrades? What about their lives? Were they meaningless?... They were not! Their memory serves as an example to us all! The courageous fallen! The anguished fallen! Their lives have meaning because we the living refuse to forget them! And as we ride to certain death, we trust our successors to do the same for us! Because my soldiers do not buckle or yield when faced with the cruelty of this world! My soldiers push forward! My soldiers scream out! My soldiers RAAAAAGE!"
    const title = ["My soldiers push forward!"," — Commander Erwin"]
    return(
        <div className="_main flex flex-col w-[100%] items-center gap-2 pt-10">
            <div className="_line w-[280px] sm:w-[40%] h-[1px] bg-[rgb(var(--gray))] rounded-2xl my-16"></div>
            <div className="_intro sm:w-[60%] py-10">
                <p className="font-semibold text-xl text-[rgb(var(--intro))] text-start"> Intro</p>
            </div>
            <div className="_image p-2 sm:p-8 text-center italic">
                <Image src={Sea} alt="Bild" />
                Meer!
            </div>
            <div className="_title flex flex-row sm:w-[70%]">
                <span className="flex gap-2 pt-2 text-lg">&#x275B;&#x275B;</span>
                <h2 className="font-semibold italic"> {title[0]}</h2>
                <span className="flex gap-2 pt-2 pl-2 text-lg">&#x275C;&#x275C;</span>
                <h2 className="font-semibold">{title[1]}</h2>
            </div>

            <div className="_text sm:w-[65%] p-4">
                <p className="font-medium text-[28px]/relaxed">
                    {text}
                </p>
            </div>
            <div className="_line w-[280px] sm:w-[40%] h-[1px] bg-[rgb(var(--gray))] rounded-2xl my-16"></div>
        </div>
    )
}

async function page() {

    const _cookies = await cookies()
    const theme = _cookies.get("theme")?.value || "light"

  return (
    <div className={`${theme==="dark"?'dark':'light'} bg-[rgb(var(--background))]`}>
        <Navbar />
        <Profile/>
        <AboutMe/>
        <Footer/>
    </div>
  )
}

export default page
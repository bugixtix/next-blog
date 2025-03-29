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
        intro:"Hallo, ich bin Housam. Willkommen auf meiner Seite! Hier schreibe ich Artikeln und gebe Tips&Tricks rund um Webentwicklung, insbesonderes meine zurzeit belibte Framework Nextjs🚀. Was du über mich wissen musst: Ich bin ein Großer Fan von Clean-Code, der viel Arbeit und Zeit spärt (egal wie kompliziert er sei). Zurzeit lerne ich TypeScript und versuche sie in meine Projekte zu intergrieren, weil sie den Code organisiert aussehen lässt und die Bugs leicht aufindbar macht. Ich entwickle mich andauernd, versuchend, mich auf dem Laufenden zu halten (das Neueste entdecken, lernen und ausprobieren - Das Gefühl ist sehr angenehm♥️). In meiner Freizeit lese ich gerne, schaue mir Youtube-Tutorials an, spiele Schach privat und im Verein, gehe spazieren, und zuguter letzt schreibe mir Notizen von Sprüche auf, die ich in meiner Lieblingsserien und Anime entdecke. In dem nächsten Bereich wirst du einige meiner Lieblingsbilder und Lieblingssprüche finden. Viel Spaß beim Lesen!  ",

        post:[
            {
                title:"Meine Soldaten drängen nach vorne!",
                author:" — Kommandant Erwin",
                content:"Alles, von dem du dachtest, es hätte einen Sinn: jede Hoffnung, jeder Traum, jeder Moment des Glücks. Nichts davon ist von Bedeutung, wenn du blutend auf dem Schlachtfeld liegst. Nichts davon ändert etwas daran, was ein fliegender Stein mit einem Körper anstellt, wir alle sterben. Aber bedeutet das, dass unser Leben sinnlos ist? Bedeutet das, dass es keinen Sinn hatte, geboren zu werden? Würden Sie das auch von unseren getöteten Kameraden sagen? Was ist mit deren Leben? Waren sie sinnlos?... Nein, waren sie nicht! Ihr Andenken dient uns allen als Beispiel! Die mutigen Gefallenen! Die gequälten Gefallenen! Ihr Leben hat einen Sinn, weil wir, die Lebenden, uns weigern, sie zu vergessen! Und während wir in den sicheren Tod reiten, vertrauen wir darauf, dass unsere Nachfolger dasselbe für uns tun werden! Denn meine Soldaten knicken nicht ein und geben nicht auf, wenn sie mit der Grausamkeit dieser Welt konfrontiert werden! Meine Soldaten drängen nach vorne! Meine Soldaten schreien auf! Meine Soldaten wüten!"
            },
            {
                title:"Marley's Monolog",
                author:" — Ehren",
                content:`Jeden Tag, an dem ich hier bin, denke ich: Warum ist es überhaupt so weit gekommen? Geschädigte Seelen und Körper... Ihre Freiheit weggenommen... Sie haben sogar sich selbst verloren. Wenn die Menschen wüssten, dass es so weit kommen würde, würde niemand in den Krieg ziehen. Aber die meisten Menschen werden von etwas getrieben, gezwungen, in die Hölle zu ziehen. Dieses „Etwas“ war nicht ihre Wahl, ihre Situation oder andere zwangen sie dazu. Aber Menschen, die sich selbst zurückdrängen, sehen eine andere Art von Hölle. Sie können etwas hinter der Hölle sehen. Vielleicht ist es Hoffnung, vielleicht ist es sogar eine andere Hölle. Nur diejenigen, die immer weitergehen, werden es jemals erfahren.`
            }
        ],
        imgDescription:"Meer!"
    }
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
            {text.post.map((i, index)=>(<Post obj={i} key={index}/>))}
            {/* <div className="_line w-[280px] sm:w-[40%] h-[1px] bg-[rgb(var(--gray))] rounded-2xl my-16"></div> */}
        </div>
    )
}

function Post({obj={title:"",author:"", content:""}}){

    return(
        <div className='sm:w-[70%] flex flex-col items-start'>
            <div className="_title flex flex-row text-[rgb(var(--forderground))] p-1">
                <h2 className=" font-semibold italic flex flex-col">&#x275B; {obj.title} &#x275C; <span className="not-italic">{obj.author}</span></h2>
            </div>

            <div className="_text p-4 text-[rgb(var(--forderground))]">
                <p className="font-medium text-[28px]/relaxed text-start">
                    {obj.content}
                </p>
            </div>
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
'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '@/app/components/navbar'
import Profile from '@/app/components/profile.jsx'
import Newsletter from '@/app/components/newsletter.jsx'
import Footer from '@/app/components/footer'
import { LiaLongArrowAltRightSolid as Arrow} from "react-icons/lia";

export function ContactForm({}){
    const btnTxt_ = {wait:"Ein Moment...", send:"Nachrich Senden", sendAgain:"Noch eine Nachricht senden"}

    const [formData, setFormData] = useState({name:"", message:"",email:"", type:"MESSAGE"})
    const [btnTxt, setBtnTxt] = useState(btnTxt_.send)

    const DoChangeName = (e) =>{setFormData((p)=>({...p, name:e.target.value}))}
    const DoChangeMessage = (e) =>{setFormData((p)=>({...p, message:e.target.value}))}
    const DoChangeEmail = (e) =>{setFormData((p)=>({...p, email:e.target.value}))}
    const DoSubmit = (e) =>{
        e.preventDefault()
        setBtnTxt(btnTxt_.wait)
        const payload = {name:formData.name, email:formData.email, message:formData.message, type:formData.type}
        fetch('/api/backend', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload)})
        .then((response)=>{return response.json()})
        .then((data)=>{
            console.log(data)
            alert('Ich habe deine Nachricht bekommen, ich werde mich schnellstmöglich an Ihnen wenden.')
            if(data?.status === 200 ){
                setFormData((p)=>({...p,email:"", name:"",message:""}))
                setBtnTxt(btnTxt_.sendAgain)
            }
        })
        .catch((error)=>{
            console.log(error)
            setBtnTxt('Nochmal Senden')
            alert('failed')
        })
    }
    const text = {
        name:"Name",
        namePlaceholder:"Max Mustermann",
        email:"Email Adresse",
        emailPlaceholder:"Max.Mustermann@Beispiel.de",
        message:"Nachricht",
        messagePlaceholder:"Hallo, ich möchte dich mal fragen ob du ...",
        button:"Nachricht Senden"
    }
    return(
        <div className='w-[100%] flex flex-col items-center' >
            <form onSubmit={DoSubmit} className='p-2 w-[100%] sm:w-[65%]'>
                <div className='flex flex-col my-4'>
                    <label htmlFor='input_name' className=' text-lg sm:text-xl text-[rgb(var(--label))]'>{text.name}</label>
                    <input id='input_name' className='text-lg sm:text-xl ml-1 p-2 border-b-[1px] border-gray-200 font-light text-[rgb(var(--text))] placeholder:text-[rgb(var(--gray))]' type='text' required placeholder={text.namePlaceholder} value={formData.name} onChange={DoChangeName}/>
                </div>
                <div className='flex flex-col my-4'>
                    <label htmlFor='input_email' className='text-lg sm:text-xl text-[rgb(var(--label))]'>{text.email}</label>
                    <input id='input_email' className=' text-lg sm:text-xl font-light ml-1 p-2 border-b-[1px] border-gray-200 text-[rgb(var(--text))] placeholder:text-[rgb(var(--gray))]' type='email' required placeholder={text.emailPlaceholder} value={formData.email} onChange={DoChangeEmail}/>
                </div>
                <div className='flex flex-col my-4'>
                    <label htmlFor='textarea_message' className='text-lg sm:text-xl text-[rgb(var(--label))]'>{text.message}</label>
                    <textarea id='textarea_message' className='text-lg sm:text-xl  ml-1 p-2 border-b-[1px] border-gray-200 font-light text-[rgb(var(--text))] placeholder:text-[rgb(var(--gray))]' type='text' rows={5} required placeholder={text.messagePlaceholder} value={formData.message} onChange={DoChangeMessage} />
                </div>
                <div className='flex flex-row justify-end py-4'>
                    <button disabled={btnTxt===btnTxt_.wait} className='flex flex-row gap-2 items-center text-lg sm:text-xl text-[rgb(var(--text))] '>{btnTxt} <Arrow className='text-2xl'/> </button>
                </div>
            </form>
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
        <Navbar theme={theme} setTheme={setTheme}/>
        <Profile/>
        <ContactForm/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Content
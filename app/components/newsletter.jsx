
'use client'
import React from 'react'
import { LiaLongArrowAltRightSolid as Arrow} from "react-icons/lia";

function Newsletter() {
  const text = {
    title:"Folge meiner Reise!",
    description:"Melde dich für meinen Newsletter an und erhalte regelmäßig Artikel, Tipps & Tricks sowie Know-how rund um Webentwicklung, Programmierung und Tech-Trends",
    cta:"Jetzt abonnieren und nichts verpassen!",
    note1:" Mit der Anmeldung zu unserem Newsletter erklären Sie sich damit einverstanden, regelmäßig E-Mails über unsere neue Artikel und unser Unternehmen zu erhalten.",
    note2:"Wir werden Sie nicht mit Spam belästigen, wir werden Ihre E-Mail-Adresse an niemanden weitergeben und Sie können sich jederzeit mit einem Klick wieder abmelden.",
    email:"Max.Mustermann@Beispiel.de"
  }
  const DoSubmit = () =>{

  }
  return (
    <div className='flex flex-col items-center w-[100%] p-4 pb-12 text-[rgb(var(--forderground))]'>
      <div className="_line w-[280px] sm:w-[40%] h-[1px] bg-[rgb(var(--gray))] rounded-2xl my-16"></div>
      <div className='flex flex-col items-center sm:w-[50%]'>

      <div className='flex flex-col items-center py-2 '>
        <h2 className='font-semibold'>{text.title}</h2>
        <h5 className='font-medium text-lg italic text-center'>{text.description}</h5>
      </div>
      <form className='relative flex flex-col items-center w-[96%] py-2' onSubmit={DoSubmit}>
        <label htmlFor='_input' className='flex flex-row w-[100%]'>
          <input required id='_input' className=' pr-12 pt-2 pb-2 pl-2 w-[100%] border-b-[1px] text-lg' placeholder={text.email} type='email' />
        </label>
        <button className='flex flex-col absolute right-0 text-4xl text-[rgb(var(--gray))] p-1' > <Arrow /> </button>
        <p className='text-center text-xs p-2'>{text.note2}</p>
      </form>

      </div>
    </div>
  )
}

export default Newsletter
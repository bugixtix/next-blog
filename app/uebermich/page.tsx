
import React from 'react'
import {cookies} from 'next/headers'
import Content from '@/app/uebermich/content.jsx'

export async function generateMetadata({}){

  const title = "Über Mich"
  const description = "Hier kannst du einen Überblick über meine Person (Haj-Ahmad Housam) haben."
  return {
    title: `${title} | Haj-Ahmad Housam`,
    description: description,
  };
}


async function page() {

    const _cookies = await cookies()
    const theme = _cookies.get("theme")?.value || "light"

  return (
    <div>
        <Content/>
    </div>
  )
}

export default page
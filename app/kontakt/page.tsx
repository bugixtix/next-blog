import React from 'react'

import Content from '@/app/kontakt/content.jsx'

export async function generateMetadata({}){

  const title = "Kontakt"
  const description = "Hier kannst du mir eine Nachricht verfassen bzw. eine Frage stellen und Feedback geben."
  return {
    title: `${title} | Haj-Ahmad Housam`,
    description: description,
  };
}

function page() {
  return (
    <div>
        <Content/>
    </div>
  )
}

export default page
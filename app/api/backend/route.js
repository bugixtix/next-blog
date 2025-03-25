import 'dotenv/config'

import admin from 'firebase-admin'
import {getFirestore} from 'firebase-admin/firestore'
import ServiceAccount from '@/app/api/backend/serviceAccountKey.json'

export async function POST(request){

    const colName = 'portfolio-emails'

    let firebaseFetchError = 'Etwas ist schiefgelaufen, bitte versuchen Sie später nochmal.'
    let tryCatchError = 'Etwas ist schiefgelaufen, bitte versuchen Sie später nochmal.'
    let emailSent = 'Hallo, Wir werden so schnell wie möglich auf ihre Nachricht antworten. Wir wünschen Ihnen einen schönen Tag!'
    let unsufficientData = 'Bitte Füllen Sie die Felder aus.'
    let responseObject = {error:"initial value", message:"initial", status:0 }
    // const data = await request.json()
    // console.log(data)
    // return new Response(JSON.stringify({key:'Okay'}))
    try{
      const {name, email, message} = await request.json()
      console.log(name, email, message)
      // 400
      if(!name || !email||!message){
        responseObject = {error:"Please Provide the Requested Information", status:400, message:unsufficientData}
        return new Response(JSON.stringify(responseObject))
      }
      // 200
      try{
            let docName = email +'_' +String(Math.floor(Math.random()*1000000))
            if (!admin.apps.length) admin.initializeApp({credential:admin.credential.cert(ServiceAccount),});
            const db = getFirestore();
            const docRef = db.collection(colName).doc(docName)
            
            await docRef.set({
              name:name,
              email:email,
              message:message,
              timestamp: admin.firestore.FieldValue.serverTimestamp(),
            })
            responseObject = {error:"There is no error occured!",success:"E-mail was sent successfully!", status:200, message:emailSent}
            return new Response(JSON.stringify(responseObject))
  
      }catch(error){
        responseObject = {error:`Something went wrong while accessing Firebase! ${error}`, message:firebaseFetchError, status:500}
        return new Response(JSON.stringify(responseObject))
      }
      // return new Response(JSON.stringify(responseObject))
      // 500
      }catch(error){
        console.log(error)
        responseObject = {error:"Something went wrong in Try Catch Block!", status:500, message:tryCatchError}
        return new Response(JSON.stringify(responseObject))
      }
  }  

//   export async function GET(request) {
//     return new Response(JSON.stringify({ key: 'value' }), {
//         status: 200,
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
// }
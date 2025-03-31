import 'dotenv/config'

import admin from 'firebase-admin'
import {getFirestore} from 'firebase-admin/firestore'
import ServiceAccount from '@/app/api/backend/serviceAccountKey.json'

export async function POST(request){

    const clientMessages = {
      firebaseError:"Etwas in unserer Firebase Datenbank ist schiefgelaufen, bitte versuche es später erneut.",
      tryCatchError:"Etwas in unserem Code ist schiefgelaufen, bitte versuche es später erneut.",
      succeed:"Hallo, wir antworten auf deine Nachricht in kürze. Einen schönen Tag wünschen wir noch!",
      unsufficientData:"Bitte fülle die alle Felder aus."
    }
    const serverMessages = {
      unsufficientData:"Client Provided Unsufficient Data.",
      succeed:"Everything Went Well.",
      firebaseError:"Something Went Wrong While Getting Access to Firebase.",
      tryCatchError:"Something Went Wrong While Running Try-Catch Block."
    }
    
    let responseObject = {error:"initial value", message:"initial", status:0 }


    async function DoSaveMessage(data){
      let responseObject = {error:"initial value", message:"initial", status:0 }
      const colName = "portfolio-emails"
      const {email, message, name} = await data
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
          responseObject = {error:serverMessages.succeed, status:200, message:clientMessages.succeed}

      }catch(error){
        responseObject = {error:`${serverMessages.firebaseError}: ${error}`, message:clientMessages.firebaseError, status:500}
      }
      return responseObject;
    }
    async function DoSaveSubscription(data){
      let responseObject = {error:"initial value", message:"initial", status:0 }
      const colName = "portfolio-subscriptions"
      const {email} = data;
      try{
        let docName = email +'_' +String(Math.floor(Math.random()*1000000))
        if (!admin.apps.length) admin.initializeApp({credential:admin.credential.cert(ServiceAccount),});
        const db = getFirestore();
        const docRef = db.collection(colName).doc(docName)
        
        await docRef.set({
          email:email,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
        })
        responseObject = {error:serverMessages.succeed, status:200, message:clientMessages.succeed}

      }catch(error){
        responseObject = {error:`${serverMessages.firebaseError}: ${error}`, message:clientMessages.firebaseError, status:500}
      }

      return responseObject
    }
    
    try{
      const clientData = await request.json()
      // 400
      if(clientData.type === "MESSAGE"){
        responseObject = await DoSaveMessage(clientData)
      }
      else if(clientData.type === "SUBSCRIPTION"){
        responseObject = await DoSaveSubscription(clientData)
      }else{
        console.log('UNKNOWN CLIENT DATA')
        responseObject = {error:serverMessages.unsufficientData, status:400, message:clientMessages.unsufficientData}
      }
      }catch(error){
        console.log(error)
        responseObject = {error:serverMessages.tryCatchError, status:500, message:clientMessages.tryCatchError}
      }
      return new Response(JSON.stringify(responseObject))
  }  

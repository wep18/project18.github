import CeleprationInput from './CeleprationInput';
import Event from './CeleEevent';
import "./Component.css";
import React, { useState ,useEffect, Fragment} from 'react';
import {collection, doc, getDoc} from 'firebase/firestore';
import db from "../firebase";
import{getDocs} from "firebase/firestore"
const FormCelepration = () =>{
    const [CeleprationUse , setCleprationUse ] = useState([]);
    const Users=collection(db,"Users");
    const getInfo = async () => {
        try{
            const users=await getDocs(Users);
            const data = users.docs.map(doc=>({
                id:doc.id,
                ...doc.data(),
            }));
            setCleprationUse(data);
        }catch(e){
            console.log(e);
        }}
    useEffect(() => {
        getInfo();
    }, []);
    return(
        
        <form className='container'>
        <h1 id="celepration">Celepration</h1>
       
        {CeleprationUse && CeleprationUse[3]?.Name  && CeleprationUse.length>0 && (
      <CeleprationInput profname={CeleprationUse[3].Name} profimg={CeleprationUse[3].pfp} labelname1="Happy birthday dear.." labelname2="Today is her birthday"/>)}
      <hr/>
      {CeleprationUse&&CeleprationUse[6]?.Name && CeleprationUse.length> 0 &&(
      <CeleprationInput profname={CeleprationUse[6].Name} profimg={CeleprationUse[6].pfp} labelname1="Birthday wish here.." labelname2="Today is her birthday"/>)}
      <hr/>
      {CeleprationUse&&CeleprationUse[2]?.Name && CeleprationUse.length> 0 &&(
      <CeleprationInput profname={CeleprationUse[2].Name} profimg={CeleprationUse[2].pfp} labelname4="congratulate" labelname1="congratulate" labelname2="for 3 years at" labelname3=" Bootstrap Front-end Framework"/>)}
      <hr/>
      {CeleprationUse&&CeleprationUse[8]?.Name && CeleprationUse.length> 0 &&(
      <Event profname={CeleprationUse[8].Name}  profimg={CeleprationUse[8].pfp} labelname2=" and 3 outher connections are attendingl" labelname3=" WordCamps San Francisco" />)}
      <hr/>
      {CeleprationUse&&CeleprationUse[7]?.Name && CeleprationUse.length> 0 &&(
      <CeleprationInput profname={CeleprationUse[7].Name} profimg={CeleprationUse[7].pfp} labelname1="Birthday wish here.." labelname2="Birthday is in 2 january"/>
      )}


      </form>
      
    );
}
export default FormCelepration;
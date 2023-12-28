import React, { useEffect, useState } from 'react';
import { collection} from "@firebase/firestore";
import { db } from './Firebase2';
import { getDocs } from 'firebase/firestore';
import Event from './event'
import "./cele.css"
import Event2 from './event2'
import SP from './s';
import img1 from '../22feb.jpg';
import img2 from '../anjelenajole.jpg';
import img3 from '../bellahadid.jpg';



const SecondPhoto1= () => {
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
  }, );
   
  return (

    <div  className="card" style={{ width: '700px' }}>
    <form className="container SecondPhoto-form">
    <h1 id="Users">UpComing Celebration</h1>
   
    <img src={img3} alt="22feb" className="rounded-circle" width="80" height="80"/> {CeleprationUse && CeleprationUse[3]?.Name  && CeleprationUse.length>0 && (
  <SP profname={CeleprationUse[3].Name} profimg={CeleprationUse[3].pfp} labelname1="Happy birthday dear.." labelname2="Today is in 10 march"/>)}
  <hr/>
  <img src={img1} alt="22feb" className="rounded-circle" width="80" height="80"/><Event2  labelname3=" international conference on cyber low ," labelname2=" 19 school lane ,london ,united kingdom" />
  </form >
  <hr/>
  <form className="container SecondPhoto-form" >
  <img src={img2} alt="22feb" className="rounded-circle" width="80" height="80"/>{CeleprationUse&&CeleprationUse[2]?.Name && CeleprationUse.length> 0 &&(
  <SP profname={CeleprationUse[2].Name} profimg={CeleprationUse[2].pfp} labelname4="congratulate" labelname1="congratulate" labelname2="for 3 years at" labelname3=" Bootstrap Front-end Framework"/>)}
  <hr/>
  {CeleprationUse&&CeleprationUse[8]?.Name && CeleprationUse.length> 0 &&(
  <Event profname={CeleprationUse[8].Name}  profimg={CeleprationUse[8].pfp} labelname2=" and 5 outher connections are attendingl" labelname3=" WordCamps New York" />
  )}


  </form>
  </div>
  );
};

export default SecondPhoto1;

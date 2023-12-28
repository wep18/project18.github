import "./cele.css"
import 'firebase/database'; 
import React, { useState} from 'react';
import {setDoc,collection,doc} from "firebase/firestore"
import {db} from "./Firebase2"
const SP=(props)=>{
  const [celepration1 , setCelepration]=useState('')

const data = (e) =>{
setCelepration(e.target.value);}
 const sentCelepration = async()=>{
      if(celepration1){
            const celeprationcol=collection(db,"Users");
            const celeprationDoc=doc(celeprationcol);
            await setDoc (celeprationDoc,{text:celepration1});
            setCelepration(props.labelname1);}}
            
            
            return(
              <div className="row mb-5">
              <div className="col-sm-1 ">
              </div>
              <div className="col-sm-11 ">
              <div className="dot">
                    <i className="bi bi-three-dots dotsAlign"></i>
              </div>
              <label htmlFor="floatingTextarea2" className="form-label"> <span>{props.labelname4}</span> <b>{props.profname}</b>  <span>{props.labelname2} <b > {props.labelname3} </b> </span></label>
              <textarea className="form-control texting-cele-area" id="floatingTextarea2"  placeholder={props.labelname1} required value={celepration1} onChange={data} ></textarea>
              <button id="btn2" className="btn btn-light" onClick={sentCelepration}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
              </svg> Send</button>
              </div>
              </div>
              )
              }
              export default SP;

















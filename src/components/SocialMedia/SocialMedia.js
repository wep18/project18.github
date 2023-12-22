import img3 from "../../assets/CheckImage.png";
import img4 from "../../assets/HeartImage.png";
import img5 from "../../assets/StarImage.png";
import img1 from "../../assets/ProfileUserImage.png";
import img2 from "../../assets/SocialMedia.png";
import  "./SocialMedia.css";

const Components = () =>{
    return(
        <div>
            <div>
              <img className="img1" src={img1} alt="mopile photo "/>
              <img className="img2" src={img2} alt="laptop photo"/>
            </div>
            <div>
                <pre className="paragraph">
                    <b>More than messaging</b>
                    
                </pre>
                <pre className="paragraph1">
                 Express besides it present if at an opinion visitor.
                </pre>
            </div>
            <div className="x">                
           <div className="div-center">
             <img className="img3" src={img3} alt="tic photo "/>
                <pre className="pp">
                    <b>Voice and video calls </b>
                </pre>
                <p className="ppp">
                    Place voice no arises along to. Parlors waiting <br/>
                    so against me no. Wishing calling is warrant <br/>
                    settled was lucky.
                </p>


            </div>
             
             
           <div className="div-center" >
           <img className="img4" src={img4} alt="chat photo "/>
                <pre className="pp" >  Auto save contacts    </pre>
               <p className="ppp">
                    Handsome met debating sir dwelling age <br/>
                    material. As style lived he worse dried. visitors <br/>
                    subjects distance.
               </p>
            </div>
               
               
               
            <div className="div-center">  
                <img className="img5" src={img5} alt="star photo "/>
                <pre className="pp"> 
                     End to end encryption
                </pre>
               <p className="ppp">
                    Yet uncommonly his ten who diminution <br/>
                    astonished. Demesne new manners savings <br/>
                    staying had.
               </p>
               
            </div>    
               
           </div>

            
        </div>

    )
}
export default Components;
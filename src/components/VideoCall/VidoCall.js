import "./VidoCall.css"
import Imgg3 from "../../assets/img3.jpg";
import Imgg4 from "../../assets/img4.jpg";
const VidioCall = () => {
    return (
    <div className="col-lg-6" id="t2">
        <div className="text2">
         <h1 id="h1">Video Call</h1>
            <ul >
            <li id="li1">
              <div className="d-flex flex-row">
                 <img src={Imgg3} id="Img3" className="img-fluid rounded  "/>
             <div className="col1">
                 <h3 className="mt-5">Meet creators</h3>
                     <p id="p2" className="mt-1 font-weight-light text-secondary">
                            In no impression assistance contrasted Manners
                             <br></br>
                            she wishing justice hastily.
                     </p>
                </div>
               </div>
         </li>
                <li id="li2">
                <div className="d-flex flex-row">
                 <img src={Imgg4} id="Img4" className="img-fluid rounded "/>
                 <div className="col2 ps-4">
                    <h3 className="mt-5">Support artists</h3>
                    <p  id="p2"className="mt-1 font-weight-light text-secondary">
                        Handsome met debating sir dwelling age material.
                        <br></br>
                        As style lived he worse dried.
                    </p>
                    </div>
                    </div>
                </li>
            </ul>
        </div>
        
    </div>
    )
}
export default VidioCall;
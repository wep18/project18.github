import Imgg from "../assets/congratulations.jpg";
import "./Component.css"

const Img1 = () => {
    return(
        <div className="col-lg-6 text-center">
        <img src={Imgg} id="Img1"className="img-fluid rounded"/>
        </div>
    )
}
export default Img1;
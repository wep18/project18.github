import pic1 from "../photo/pic1.png";
import  "./taskbar.css";
import SearchBar from './Searchbar';
import pic2 from "../photo/pic2.png";
import pic3 from "../photo/pic3.png";
import pic4 from "../photo/pic4.png";
import pic5 from "../photo/pic5.jpg";
const Taskbar = () =>{
    return(
        <div className="x">
            <img  className ="pic1 z" src={pic1} alt="app icon"/>
            <SearchBar className = "pic1"></SearchBar>
            <div className="v"></div>
            <select className = "dropdown z">
                <option >Demo</option>
            </select>
            <select className = "dropdown z">
                <option >Pages</option>
            </select>
            <select className = "dropdown z">
                <option >Account</option>
            </select>
            <button className = "dropdown z">Network</button>
            <img  className ="pic1 z" src={pic2} alt="app icon"/>
            <img  className ="pic1 z" src={pic3} alt="app icon"/>
            <img  className ="pic1 z" src={pic4} alt="app icon"/>
            <img  className ="pic2 z" src={pic5} alt="app icon"/>

        </div>

    )
}
export default Taskbar;
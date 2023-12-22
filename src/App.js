import { Route, Routes } from "react-router-dom";
import IndexPage from "./components/IndexPage.js";
import CelebrationPage from "./components/CelebrationPage.js";




export default function App(){
    return(
        <Routes>
            <Route path="/" element={ <IndexPage/>}/>
            <Route path="/celebration" element={ <CelebrationPage/>}/>
        </Routes>
       
    );
}

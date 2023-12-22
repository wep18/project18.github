import CeleprationInput from "./components/CeleprationInput.js";
import IndexPage from "./components/IndexPage.js";
import Taskbar from "./components/taskbar.js";
import {Row,Col,Container} from 'react-bootstrap';
import WhoToFollow from "./components/WhoToFollow.js";
import TodayNews from "./components/TodayNews.js";


export default function App(){
    return(
        <>
        <Taskbar/>
        <Row>
        <Col>
        </Col>
        <Col>
        <WhoToFollow/>
        <TodayNews/>
        </Col>
        </Row>
        </>
    );
} 

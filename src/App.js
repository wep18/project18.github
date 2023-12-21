import {Col, Row, Container } from "react-bootstrap";
import "./App.css";
import FirstPhoto from './components/FirstPhoto.js';
import DownloadNow from "./components/DownloadNow";
import PhonePicture from "./components/PhonePicture";
import Communities from "./components/Communities";
import GetDiscavered from './components/GetDiscavered.js';
import Img1 from './components/Img1.js';
import VidioCall from './components/VidoCall.js';
import Img2 from './components/Img2.js';
import "./components/Component.css";
import Header from './components/Header';
import Footer from './components/Footer';


export default function App(){
  return(
    <>
    <Container>
    <FirstPhoto/>
    <Row>
    <Col>
    <DownloadNow/>
        </Col>
        <Col xxl={8}>
    <PhonePicture/>
        </Col>
    </Row>
    <Communities/>
 
        <div className="row g-4">
            <Img1/>
            <GetDiscavered/> 
        </div>
        <div class="row g-4">
            <VidioCall/>
            <Img2/>
        </div>
    </Container>
    <Header/>
    <Footer/>
</>
  );
} 

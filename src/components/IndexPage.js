import {Col, Row, Container } from "react-bootstrap";
import FirstPhoto from './TaskBar/FirstPhoto.js';
import DownloadNow from "./DownloadNow/DownloadNow.js";
import PhonePicture from "./PhonePic/PhonePicture.js";
import Communities from "./Communities/Communities.js";
import GetDiscavered from './VideoCall/GetDiscavered.js';
import Img1 from './VideoCall/Img1.js';
import VidioCall from './VideoCall/VidoCall.js';
import Img2 from './VideoCall/Img2.js';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Components from "./SocialMedia/SocialMedia.js";


export default function IndexPage(){
  return(
    <>
    <Container>
    <FirstPhoto/>
    <Components/>
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
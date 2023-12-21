import {Col, Row, Container } from "react-bootstrap";
import "./App.css";
import DownloadNow from "./components/DownloadNow";
import PhonePicture from "./components/PhonePicture";
import Communities from "./components/Communities";


export default function App(){
  return(
    <Container>
    <>
    <Row>
    <Col>
    <DownloadNow/>
        </Col>
        <Col xxl={8}>
    <PhonePicture/>
        </Col>
    </Row>
    <Communities/>
    </>
    </Container>

  );
}
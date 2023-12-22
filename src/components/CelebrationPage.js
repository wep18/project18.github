import IndexPage from "./IndexPage.js";
import Taskbar from "./Navbar/taskbar.js";
import {Row,Col,Container} from 'react-bootstrap';
import Form18 from "./Celebration/Form18.js";
import WhoToFollow from "./WhoToFollow/WhoToFollow.js";
import TodayNews from "./TodayNews/TodayNews.js";



export default function CelebrationPage(){
    return(
        <Container style={{overflowX:'auto'}}>
            <Taskbar/>
    <>
        <Row className="Row-Rec">
        <Col style={{marginLeft:'2em'}}>
        <Form18/>
        </Col>
        <Col style={{marginRight:'-15em'}}>
        <WhoToFollow/>
        <br/>
        <TodayNews/>
        </Col>
        </Row>
    </>
    </Container>
    );
}

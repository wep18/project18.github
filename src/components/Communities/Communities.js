import {Col,Row,Container} from "react-bootstrap";
import SmileyImage from "../../assets/smiley.webp";
import NotificationImage from "../../assets/notification.webp";
import LikeImage from "../../assets/like.webp";
import "./Communities.css"

export default function Communities(){
    return (
  
      <Container>
      <Row>
        <Col>
        <div className="communities-one">
        <img className="emojiimg" src={SmileyImage} alt="smiley" /> 
        <h4 className="three-headers">Safer Communities</h4>
        <p className="first-para">Departure defective arranging rapturous did believe him all had supported smile set nature</p>
        </div>
        </Col>
  
        <Col>
        <div className="communities-div2">
        <img className="emojiimg" src={NotificationImage} alt="notification" /> 
        <h4 className="three-headers">Genuine users</h4>
        <p className="second-para">satisfied conveying a dependent contented he gentleman agreeable do be warrant removed</p>
        </div>
        </Col>
  
        <Col>
        <div className="communities-div3">
        <img className="emojiimg" src={LikeImage} alt="like" /> 
        <h4 className="three-headers">Stronger </h4> <h4 className="three-headers">Communities</h4>
        <p className="third-para">Meant balls it if up doubt small purse. Requiered his you put the outlived answered position</p>
        </div>
        </Col>
      </Row>
      </Container>
    );
  }
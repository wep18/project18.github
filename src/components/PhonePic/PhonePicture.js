import {Row,Col} from "react-bootstrap";
import PhoneImage from"../../assets/phone.webp";
import PopupImage from"../../assets/phone_notification.webp";
import "./PhonePicture.css";

export default function PhonePicture() {
  return (
    <div className="phone-div-img"> 
      <Row>
          <Col>
          <img className="popup-img" src={PopupImage} alt="phone notification" /> 
              <h4 className="built-header">Built-in digital wallet</h4>
              <p className="phone-pic-desc">Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls.</p>
          </Col>
          <Col>
              <img src={PhoneImage} alt="phone" />
          </Col>
      </Row>
      </div>
  )
}
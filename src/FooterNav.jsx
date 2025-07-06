import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faAndroid , faInstagram, faFacebook , faYoutube ,faXTwitter ,faLinkedin   } from '@fortawesome/free-brands-svg-icons';
import {Link} from "react-router-dom";
//footer images
import Foot1 from "./img1/Club-itc (2).svg";
import Foot2 from "./img1/Brand1.svg";
import Foot3 from "./img1/Brand2.svg";
import Foot4 from "./img1/Brand3.svg";
import Foot5 from "./img1/Brand4.svg";
import Foot6 from "./img1/Brand5.svg";
import Foot7 from "./img1/Brand6.svg";
import Foot8 from "./img1/footer-itchl-logo.svg";

function FooterNav() {
    return (
      <>
       <div class="text-center mt-5">
        <hr className="my-5" />
        <img src={Foot1}></img>
        </div>
        <br></br>
        <div class="text-center mt-4 mb-4">
        <img src={Foot2}></img>
        <img src={Foot3} style={{marginLeft:"20px"}}></img>
        <img src={Foot4} style={{marginLeft:"20px"}}></img>
        <img src={Foot5} style={{marginLeft:"20px"}}></img>
        <img src={Foot6} style={{marginLeft:"20px"}}></img>
        <img src={Foot7} style={{marginLeft:"20px"}}></img>
       </div>
       <Container>
      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
        <Col xs={6} md={2}>
        <ul className="list-unstyled">
            <li><b>EXPLORE</b></li>
            <li>Hotels&Resorts</li>
            <li>Dining</li>
            <li>Responsible Luxury</li>
            <li>Offers & Experiences</li>
            <li>Meetings & Socials</li>
            <li>Weddings</li>
            <li>Wellness</li>
            <li>New & Upcoming Hotels</li>
            <li>ITC Limited</li>
            <li>The Luxury Collection</li>
        </ul>
        </Col>
        <Col xs={6} md={2}>
        <ul className="list-unstyled">
            <li><b>CORPORATE</b></li>
            <li>Corporate Home</li>
            <li>About Us</li>
            <li>Media Room</li>
            <li>Investor Relations</li>
            <li>Sustainability</li>
        </ul>
        </Col>
        <Col xs={6} md={2}>
        <ul className="list-unstyled">
            <li><b>TOP DESTINATIONS</b></li>
            <li>New Delhi Hotels</li>
            <li>Mumbai Hotels</li>
            <li>Chennai Hotels</li>
            <li>Bengaluru Hotels</li>
            <li>Goa Hotels & Resorts</li>
            <li>Hyderabad Hotels</li>
            <li>Kolkata Hotels</li>
            <li>Jaipur Hotels</li>
            <li>Agra Hotels</li>
            <li>All Destinations</li>
        </ul>
        </Col>
        <Col xs={6} md={2}>
        <ul className="list-unstyled">
            <li><b>CONNECT WITH US</b></li>
            <li>Assistance</li>
            <li>Feedback</li>
            <li>X Concierge</li>
            <li>Contact Us</li>
            <li>Hotel Development</li>
        </ul>
        </Col>
        
        <Col xs={6} md={2}>
        <ul className="list-unstyled">
            <li><b>LOYALTY</b></li>
            <li>Club ITC</li>
            <li>Club ITC Culinaire</li>
            <li>Welcomlink</li>
            <li>Gift Card</li>
            <li>Mobile App</li>
        </ul>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
        <div className="mt-4">
            <h5>Download The ITC Hotels Mobile App</h5>
            <FontAwesomeIcon icon={faApple} style={{fontSize:"30px",color:"grey",marginLeft:"80px"}} />
            <FontAwesomeIcon icon={faAndroid} style={{fontSize:"30px",color:"grey",marginLeft:"20px"}} />
        </div>
        </Col>
        <Col xs={12} md={{ span: 4, offset: 4 }}><h5 className="mt-4">Visit our Social Handles</h5>
        <FontAwesomeIcon className="icon-hov" icon={faInstagram} style={{fontSize:"30px",color:"#F56040",marginLeft:"20px"}} />
        <FontAwesomeIcon className="icon-hov" icon={faLinkedin} style={{fontSize:"30px",color:"blue",marginLeft:"20px"}} />
        <FontAwesomeIcon className="icon-hov" icon={faFacebook} style={{fontSize:"30px",color:"blue",marginLeft:"20px"}} />
        <FontAwesomeIcon className="icon-hov" icon={faYoutube} style={{fontSize:"30px",color:"red",marginLeft:"20px"}} />
        <FontAwesomeIcon className="icon-hov" icon={faXTwitter} style={{fontSize:"30px",color:"black",marginLeft:"20px"}} /> 
        </Col>
      </Row>
      <div class="text-center">
        <Row>
        <img className="img-responsive" src={Foot8} width={"50px"} height={"100px"} alt="ITC HOTEL" />
        <p>Copyright © ITC Hotels Limited 2025. All rights reserved.</p>
        <Col xs={4} md={4}><p>Sitemap</p></Col>
        <Col xs={4} md={4}><p>Cookie Statement</p></Col>
        <Col xs={4} md={4}><p>Privacy Policy & Terms</p></Col>
        </Row>
      </div>
      </Container>
      </>
    );
}
export default FooterNav;

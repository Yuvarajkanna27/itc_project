import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import "./App.css";
//carousel images 
import Sli1 from "../img1/itc-mughal.jpg";
import Sli2 from "../img1/slid2.jpg";
import Sli3 from "../img1/Slid3.jpg";
//main body images
import ItcLogo from "../img1/itchl-logo-page.png";
import NavbarTop from '../NavbarTop';
// import ItcLogo1 from "../img1/ITC-Hotels-logo.svg";
// import { Link } from 'react-router-dom';
//bottom carousel images
import Bot1 from "../img1/points-never-expire.png";
import Bot2 from "../img1/Our3.png";
import Bot3 from "../img1/slid2.jpg";
import Bot4 from "../img1/ITC-Hotels-logo.svg";
import Offer1 from "../img1/suite-memories.jpg";
import Offer2 from "../img1/short-break.jpg";
import Offer3 from "../img1/all-in-getaways.jpg";
import BottomLogo from "../img1/Club-itc.svg";
//icons images
import Icon1 from "../img1/brg-neutral.png";
import Icon2 from "../img1/member-rates-neutral.png";
import Icon3 from "../img1/offers-neutral.png";
import Icon4 from "../img1/wifi-neutral.png";

import Bott1 from "../img1/app.jpg";
import Android from "../img1/Icon awesome-android.svg";
import Apple from "../img1/awesome-apple.svg";

import ClubItc1 from "../img1/Club-itc (1).svg";
import ClubItc2 from "../img1/club-itc-cards-home-page.jpg";
//location images
import Location1 from "../img1/delhi.jpg";
import Location2 from "../img1/mumbai.jpg";
import Location3 from "../img1/bengaluru.jpg";
import FooterNav from '../FooterNav';

function Topbar1() {
  return (
    <>
      <NavbarTop />
      <div className="container-fluid">
        <Carousel className="carousel1">
          <Carousel.Item>
            <img className="col-12" src={Sli1} alt="ITC Hotel" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="col-12" src={Sli2} alt="ITC Hotel" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="col-12" src={Sli3} alt="ITC Hotel" />
          </Carousel.Item>
        </Carousel>
      </div>

      <Container>
        <div className="row">
          <div className="d-flex justify-content-center mt-5 ">
            <img className="img-responsive" src={ItcLogo} alt="ITC Hotel" />
          </div>
        </div>
        <div className="justify-content-center">
          <p className="mx-4" style={{textAlign: "center"}}>
          With over 140+ hotels in 90+ destinations across six vibrant brands, ITC Hotels Limited integrates India's renowned tradition of hospitality and warmth,with globally benchmarked facilities & services.
          </p>
        </div>
      </Container>
      <Container>
        <div className="row">
          <h2 className=" col-xs-12 brandtitle">Distinctive, distinguished brands</h2>
        </div>
      </Container>
      <Container>
        <div className="row">
          <Nav className="col-12 justify-content-center" expand="lg" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">ITC Hotel</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Mementos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Welcomehotel</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>Storii</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>Fortune Hotels</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>WelcomHeritage Hotels</Nav.Link>
          </Nav.Item>
          </Nav>
        </div>
      </Container>
      <div className="container-fluid bottom-carousel">
        <div className="row">
          <div className="card bottom-card col-md-7 col-12">
          <img className="bott" src={Bot4} width={"30%"} alt="ITC HOTEL" />
          <p>
          With ‘Namaste’ as the enduring symbol of its brand experience and ‘Responsible Luxury’ as the guiding premise, 
          ITC Hotels are an archetype of the culture and ethos of each destination offering authentic, 
          indigenous luxury experiences which are in harmony with the environment and society.
          </p>
          <p className="my-3">
          With a platinum grade commitment to our guests and the planet, 
          23 ITC Hotel properties are certified with a LEED (Leadership in Energy and Environmental Design) Platinum rating for globally
          recognised planet positive endeavours.
          </p>
          <div>
            <h5 className="Know-more mb-3">KNOW MORE</h5>
          </div>
          </div>
          <div className="col-12 bottom-wid">
            <Carousel>
              <Carousel.Item>
                <img className="img-responsive img-bot" src={Bot1} width={"870px"} height={"520px"} alt="ITC Hotel" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="img-responsive img-bot" src={Bot2} width={"870px"} height={"520px"} alt="ITC Hotel" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="img-responsive img-bot" src={Bot3} width={"870px"} height={"520px"} alt="ITC Hotel" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <Container>
        <div className="row">
          <div className="brandtitle d-flex justify-content-center my-4">
            <h1>Our Curated Offers</h1>
          </div>
          <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
            <img src={Offer1} className="card-img-top mt-2" alt="ITC HOtel"/>
            <div className="card-body">
                <div className="card-title ms-4">
                  <i className="h4">Suite Memories</i>
                </div>
                <p>
                Enjoy magnificence with unprecedented savings on our suites offer.
                </p>
                <ul>
                  <li>Choice of lunch or dinner at coffee-shop or at a specialty restaurant</li>
                  <li>Butler Services; Luxury hour; Complimentary bottle of house wine`</li>
                  <li>30% savings on Food and Soft Beverage, Spa, Salon & Laundry</li>
                </ul>
              <div>
                <button  className="btn btn-success me-5">EXPLORE</button>
                <button className="btn btn-info">BOOK NOW</button>
              </div>
            </div>
          </div>
          <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
            <img src={Offer2} className="card-img-top mt-2" alt="ITC HOtel"/>
            <div className="card-body">
                <div className="card-title ms-4">
                  <i className="h4">Short Break</i>
                </div>
                <p>
                Discover exciting destinations & experience a leisurely getaway
                </p>
                <ul>
                  <li>Daily breakfast at coffee-shop</li>
                  <li>Choice of lunch or dinner at coffee-shop</li>
                  <li>20% savings on food & soft beverages, spa, salon, and laundry</li>
                </ul>
              <div>
                <button  className="btn btn-success me-5">EXPLORE</button>
                <button className="btn btn-info">BOOK NOW</button>
              </div>
            </div>
          </div>
          <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
            <img src={Offer3} className="card-img-top mt-2" alt="ITC HOtel"/>
            <div className="card-body">
                <div className="card-title ms-4">
                  <i className="h4">All-in Getaway</i>
                </div>
                <p>
                Get all the pampering you deserve with our all inclusive package. All you need to do is sit back and unwind.
                </p>
                <ul>
                  <li>Daily Breakfast, Lunch & Dinner at coffee-shop.</li>
                  <li>20% savings on food & soft beverages, spa, salon and laundry.</li>
                </ul>
              <div>
                <button  className="btn btn-success me-5">EXPLORE</button>
                <button className="btn btn-info">BOOK NOW</button>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center my-4">
            <h5 className="view-offer">VIEW ALL OFFER</h5>
          </div>
          <div className="card my-2 pt-3" style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="row">
              <div className="col-md-2 col-12">
                <h3 className="meet">Why Book with us</h3>
              </div>
              <div className="col-md-2 col-12">
                <img src={BottomLogo} width={"170px"} alt="ITC HOTEL" />
              </div>
              <div className="col-md-2 ">
                <h6><img className="me-2" src={Icon1} alt="ITC HOTEL" /> Rates Guaranteed*</h6>
              </div>
              <div className="col-md-2">
                <h6><img className="me-2" src={Icon2} alt="ITC HOTEL" />Member Rates</h6>
              </div>
              <div className="col-md-2">
                <h6><img className="me-2" src={Icon3} alt="ITC HOTEL" />Special Offers</h6>
              </div>
              <div className="col-md-2">
                <h6><img className="me-2" src={Icon4} alt="ITC HOTEL" />Wi-Fi</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="container-fluid boxsha my-5">
        <div className="row">
            <img className="col-md-6 col-12" src={Bott1} width={"690px"} alt="ITC HOTEL" />
          <div className="col-md-6 col-12 bott2">
            <h2 className="d-flex justify-content-center meet">ITC Hotels Mobile App</h2>
            <p>Your One app for Food Delivery, Room & Table  Reservations, Loyalty  Benefits, Exclusive Offers and more. </p>
            <p className="d-flex justify-content-center">DOWNLOAD THE ITC HOTELS MOBILE APP</p>
            <div className="d-flex justify-content-center">
              <img src={Android} alt="ITC HOTEL" />
              <img className="ms-4" src={Apple} alt="ITC HOTEL" />
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="row">
          <h1 className="d-flex justify-content-center meet">Club ITC: More Rewards, More Joy</h1>
          <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/home">Club ITC</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Rewards and Benefits</Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="card mb-5 " bg="dark">
            <div className="row">
              <div className="col-md-6 col-12">
                <img className="mt-5 ms-5" src={ClubItc1}  alt="ITC HOTEL" />
                <p className="ms-5">
                One of India's most transparent, flexible and easy-to-use loyalty programs for over three decades. 
                Pioneering in simple points earning and easy redemption, members gain access to a wide range of benefits which accelerate
                as they move up tiers, including free stays, room upgrades, dining experiences, spa therapies and more.
                </p>
                <span className="join-now ms-5 mt-5">NOT MEMBER ? - JOIN NOW</span>
                <span className="join-now ms-5 mt-5">KNOW MORE</span>
              </div>
              <div className="col-md-6">
                <img className="col-12 hoo" src={ClubItc2} style={{borderRadius: "0 10px 10px 0"}} width={"670px"} alt="ITC HOTEL" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="row">
          <h1 className="d-flex justify-content-center meet">
            Alluring locations
          </h1>
          <Nav className="d-flex justify-content-center" defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/home">Metros</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Cities</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Historic</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Beach</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Hillside</Nav.Link>
            </Nav.Item>
          </Nav>
            <div className="card col-md-4 col-12 ms-3 mt-5" style={{width:"380px"}}>
                  <img src={Location1} className="card-img-top mt-2" alt="ITC HOtel"/>
                <div className="card-body">
                    <div className="card-title ms-4">
                      <span className="h4 meet">Delhi NCR</span>
                    </div>
                  <p>
                    India’s dynamic, bustling capital, where historical monuments stand in close proximity to 21st century edifices. 
                    Shopping and dining options galore.
                  </p>
                  <div>
                    <button  className="btn btn-success me-5">EXPLORE</button>
                  </div>
                </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
                  <img src={Location2} className="card-img-top mt-2" alt="ITC HOtel"/>
                <div className="card-body">
                    <div className="card-title ms-4">
                      <span className="h4 meet">Mumbai</span>
                    </div>
                  <p>
                    The city that never sleeps and keeps India’s financial markets ticking, 
                    Mumbai brings an amalgam of a true cosmopolitan culture and regional charm. 
                    The home of Bollywood, world cuisines and a great nightlife.
                  </p>
                  <div>
                    <button  className="btn btn-success me-5">EXPLORE</button>
                  </div>
                </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-5" style={{width:"380px"}}>
                  <img src={Location3} className="card-img-top mt-2" alt="ITC HOtel"/>
                <div className="card-body">
                    <div className="card-title ms-4">
                      <span className="h4 meet">Bengaluru</span>
                    </div>
                  <p>
                  The Garden City of India, loved for its temperate climate and pub culture. 
                  Its lakes and gardens are complemented by palaces and chic restaurants.
                  </p>
                  <div>
                    <button  className="btn btn-success me-5">EXPLORE</button>
                  </div>
                </div>
            </div>
        </div>
      </Container>
      <Container>
        <div className="row">
          <div className="mt-4">
            <h1 className="meet justify-content-center d-flex">New & Upcoming Hotels</h1>
          </div>
          <Nav className="d-flex justify-content-center" defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/home">Welcomhotel By ITC Hotels, Denzong Regency, Gangtok</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Gangtok Storii by ITC Hotels Narindera Orchards Kufri
            </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1"> Storii by ITC Hotels Naina Tikkar, Sirmaur</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </Container>
      {/* <div className="container-fluid">
        <div className="row">
          <div className="card bottom3 ">
            asrkgjnn
          </div>
        </div>
      </div> */}
      <div className="container-fluid">
        <div className="row">
          <FooterNav />
        </div>
      </div>
        
    </>
  );
}

export default Topbar1;

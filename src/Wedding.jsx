import React from 'react'
import TopNav from "./TopNav";
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import FooterNav from "./FooterNav";
//wedding images
import Wed1 from "./img1/culture.jpg";
import Wed2 from "./img1/diverse-venues.png";
import Wed3 from "./img1/cuisines.png";
import Wed4 from "./img1/dedicated-team.jpg";
//carousel images
import WedCaro1 from "./img1/wedding.png";
import WedCaro2 from "./img1/weddings.png";
import WedCaro3 from "./img1/banquet-social.png";
import WedCaro4 from "./img1/mandore-bagh-I-II.png";
import WedCaro5 from "./img1/wedding (1).png";

function Weddind() {
  return (
    <>
        <TopNav/>
        <Container>
          <div className="row">
            <h1 className="meet mt-5 mb-4 d-flex justify-content-center col-12">Your Moment, Your way</h1>
            <p className="mt-2 mb-2 d-flex justify-content-center col-12">
              Weddings crafted by ITC Hotels
            </p>
            <p className="mt-2 mb-2 d-flex justify-content-center  col-12">
            Weddings at ITC Hotels and Welomhotels can be majestic, royal, classily contemporary, 
            intimate and everything in between. Offering a diverse set of venues – both indoors and outdoors – 
            each hotel specialises in conceptualising, designing and crafting the perfect wedding. 
            </p>
            <p className="mt-4 mb-2 d-flex justify-content-center  col-12">
            For memorable destination weddings, the hosts can choose between beach resorts, palatial retreats, mountain getaways, desert forts, 
            colonial mansions and more. The variety is unparalleled and so are the venues.
            </p>
            <p className="mt-4 mb-2 d-flex justify-content-center  col-12">
            Whether it is a large gathering or an intimate one, the hospitality is equally lavish. The décor is stunning, 
            thematic and customisable, while the award-winning cuisines will win appreciation in every quarter. The latest audio-visual and technical support are fully available. 
            The happiest memories are made of this.
            </p>
            <div className="d-flex justify-content-center mt-4">
              <span className="view-offer">GET IN TOUCH</span>
            </div>
          </div>
        </Container>
        <div className="container-fluid">
          <div className="row">
            <h1 className="meet d-flex justify-content-center mt-3">The perfect wedding destination</h1>
            <div className="col-md-6 mt-2">
              <img className="col-12" src={Wed1} width={"750px"} alt="ITC HOTEL" />
            </div>
            <div className="col-md-6 mt-2 align-content-center">
              <h1 className="d-flex justify-content-center meet">A culture of splendour</h1>
              <p className="mx-3">
              Each ITC Hotel has a distinct personality that springs from the soil it stands on and the culture of the region it belongs to. 
              Each Welcomhotel pays tribute to the arts and crafts, cuisines and folklore of its locale. Together, they offer diverse options of metros, 
              large cities, hill and beach resorts, palaces and forts. 
              Each hotel celebrates its cultural roots, while also offering the best from the country and the world. 
              </p>
              <div className="d-flex justify-content-center">
                <span className="view-offer">BOOK NOW</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 mt-2 align-content-center">
              <h1 className="d-flex justify-content-center meet">Vibrant, diverse venues</h1>
              <p className="mx-3">
              From a select, intimate gathering to a wedding extravaganza with thousands of guests – ITC Hotels and Welomhotels have venues to match. 
              Massive pillar-free banquet spaces with adjoining smaller rooms are intuitively designed for comfort and convenience. 
              The celebration can move to huge lawns, gardens and pool sides to meet outdoors, under sunny or starry skies. 
              Each venue can be customized for the décor, lighting, flowers, ambience and every detail. 
              ITC Grand Bharat in Gurugram & ITC Grand Goa Resort and Spa are spectacular venues for bespoke destination weddings
              </p>
            </div>
            <div className="col-md-6 mt-2">
              <img className="col-12" src={Wed2} width={"750px"} alt="ITC HOTEL" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 mt-2">
              <img className="col-12" src={Wed3} width={"750px"} alt="ITC HOTEL" />
            </div>
            <div className="col-md-6 mt-2 align-content-center">
              <h1 className="d-flex justify-content-center meet">Much awarded, much loved cuisines
              </h1>
              <p className="mx-3">
              With a repertoire of award winning culinary brands like Bukhara, Dum Pukht , Royal Vega , 
              Avartan amongst others , the gourmet plans can be customized , adding to the wedding experience. 
              From traditional flavors influenced by local culture to gastronomic delights that trot the world, 
              the choices are limitless and diverse 
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 mt-2 align-content-center">
              <h1 className="d-flex justify-content-center meet">A dedicated team</h1>
              <p className="mx-3">
              Each wedding has a team dedicated to it that takes care of the big picture and every minute detail meticulously. 
              Working closely with the hosts to ensure that all requirements are adequately met – from the invites right up to the goodbyes , 
              they also offer wonderful ideas for each aspect of the event. 
              </p>
            </div>
            <div className="col-md-6 mt-2">
              <img className="col-12" src={Wed4} width={"750px"} alt="ITC HOTEL" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <h1 className="d-flex justify-content-center meet mt-4">Venues that leave you spell bound</h1>
            <div className="col-12">
              <Carousel>
                <Carousel.Item>
                  <img className="img-responsive" src={WedCaro1} width={"1550px"} alt="ITC Hotel" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="img-responsive" src={WedCaro2} width={"1550px"} alt="ITC Hotel" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="img-responsive" src={WedCaro3} width={"1550px"} alt="ITC Hotel" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="img-responsive" src={WedCaro4} width={"1550px"} alt="ITC Hotel" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="img-responsive" src={WedCaro5} width={"1550px"} alt="ITC Hotel" />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <span className="view-offer">GET IN TOUCH</span>
            </div>
            
          </div>
        </div>
        <Container>
        <FooterNav />
        </Container>
    </>
  )
}

export default Weddind

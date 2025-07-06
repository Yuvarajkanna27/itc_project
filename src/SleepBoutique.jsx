import React from 'react';
import TopNav from './TopNav';
import Carousel from 'react-bootstrap/Carousel';

//carousel images
import Sleep1 from "./img1/sleeep-diwali-hampers.jpg";
import Sleep2 from "./img1/sleeep-boutique.jpg";
import Sleep3 from "./img1/sleeep-bed.jpg";
import Sleep4 from "./img1/sleeep-bath.jpg";
import Sleep5 from "./img1/sleeep-accessories.jpg";
import { Container } from 'react-bootstrap';

import Sleep6 from "./img1/Sleep-logo.png";
//cards images
import Bedding from "./img1/bedding.jpg";
import Bath from "./img1/bath-linen.jpg";
import Infant from "./img1/infant-collection.jpg";
import Pashmina from "./img1/pashmina-throw.jpg";
import Accessories from "./img1/sleeep-eye-mask-model.jpg";

const offerData = [
    {
        id: 1,
        title: "Bedding",
        photo: Bedding,
        para: "Elevate your sleep experience with our range of bed linen. Fine fabrics that are crafted for comfort and adds a touch of elegance to your bedtime routine.",
        know: "Know More"
    },
    {
        id: 2,
        title: "Bath",
        photo: Bath,
        para: "Make an elegant statement in closed doors as you enhance your bathing experience and create an extraordinary oasis with our plush bath linen selection.",
        know: "Know More"
    },
    {
        id: 3,
        title: "Infant Collection",
        photo: Infant,
        para: "Our selection of infant essentials made with cotton provides gentle and hypoallergenic products for your baby. Explore to add to your safe and snug sleep environment.",
        know: "Know More"
    },
    {
        id: 4,
        title: "Pashmina Throw",
        photo: Pashmina,
        para: "Indulge in the opulence of our elegantly crafted Pashmina throw, meticulously woven to envelop you in a comfortable warmth.",
        know: "Know More"
    },
    {
        id: 5,
        title: "Accessories",
        photo: Accessories,
        para: "Transform your bedtime routine with our exquisite sleep accessories. Curated offerings that exhibit an indulgent touch of opulence.",
        know: "Know More"
    },
]

function SleepCard({ photo, title, para,know }) {
  return (
    <div className="card col-md-4 col-12 mt-4 mx-4" style={{ width: "350px" }}>
      <img src={photo} alt={title} className="card-img-top" />
      <div className="card-body">
        <h3 className="card-title meet">{title}</h3>
        <p className="card-text">{para}</p>
        <span className="view-offer">{know}</span>
      </div>
    </div>
  );
}

// SleepCard.propTypes = {
//   photo: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   para: PropTypes.string.isRequired,
//   know: PropTypes.string.isRequired,
// };


function Sleep_Boutique() {
  return (
    <>
        <TopNav />
        <div className="container-fluid">
            <div className="row">
                <Carousel>
                    <Carousel.Item>
                        <img width={"1520px"} src={Sleep1} alt="ITC Hotel" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={"1520px"} src={Sleep2} alt="ITC Hotel" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={"1520px"} src={Sleep3} alt="ITC Hotel" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={"1520px"} src={Sleep4} alt="ITC Hotel" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={"1520px"} src={Sleep5} alt="ITC Hotel" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
        <Container>
            <div className="row">
                <div className="d-flex justify-content-center mt-4">
                    <img src={Sleep6}  width={"250px"} alt="ITC HOTEL" />
                </div>
                <div className="d-flex justify-content-center mt-1">
                <h2>#WakeUpAmazing</h2>
                </div>
                <div>
                    <div>
                    <p  className="d-flex justify-content-center mt-1">A curated collection of exquisite essentials aimed at fostering a good night’s rest.</p>
                    <p  className="d-flex justify-content-center mt-1">
                        Quality sleep transcends a mere pause from life's hustle; it is the cornerstone of one’s wellbeing. 
                        Linked to better focus, productivity, and improved mood, it is a holistic renewal for the body, mind, and spirit.
                    </p>
                    <p className="d-flex justify-content-center mt-1">
                       Providing the comfort for a splendid night's rest that allows you to #WakeUpAmazing, every morning.
                    </p>
                    <p className="d-flex justify-content-center mt-1">
                    Explore the comforts of the SLEEEP Boutique. Now delivering throughout India.
                    </p>
                    <h1 className="d-flex justify-content-center meet mt-1">Our Offerings</h1>
                    <p className="d-flex justify-content-center mt-1">Specially Made For ITC Hotels</p>
                    </div>
                </div>
            </div>
        </Container>
        <Container>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center">
                  {offerData.map((offer) => (
                    <SleepCard
                      key={offer.id}
                      photo={offer.photo}
                      title={offer.title}
                      para={offer.para}
                      know={offer.know}
                    />
                  ))}
              </div>
            </div>
        </Container>
    </>
  )
}

export default Sleep_Boutique

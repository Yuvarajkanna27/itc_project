import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";

// Carousel photos
import Club1 from "./img1/club-itc-page1.jpg";
import Club2 from "./img1/itc-grand-goa.png";
import TopNav from "./TopNav";

// Offer images
import pointsNeverExpire from "./img1/points-never-expire.png";
import memberOnlyRates from "./img1/member-only-rates.png";
import reward from "./img1/reward-nights.png";
import Contactless from "./img1/contactless-redemption.png";
import International from "./img1/direct-access-to-arossim-beach.png";
import Vouchers from "./img1/e-vouchers.png";
import Rollover from "./img1/rollover-nights.png";
import Gift from "./img1/gift-points.png";
import Points from "./img1/points-never-expire.png";
import Free from "./img1/wi-fi.png";
import FooterNav from "./FooterNav";

const offerData = [
  {
    id: 1,
    title: "Simplicity & Transparency",
    photo: pointsNeverExpire,
    para: "Earn 2%-5% of eligible spends as Green Points. The more you stay, the faster you move up the tiers & benefits multiply.",
  },
  {
    id: 2,
    title: "Member Only Rates",
    photo: memberOnlyRates,
    para: "Club ITC members get up to 10% additional savings for all bookings made through itchotels.com.",
  },
  {
    id: 3,
    title: "Reward Nights",
    photo: reward, // Corrected "image" to "photo"
    para: "Unlock exceptional experiences at your favorite hotels using your Green Points.",
  },
  {
    id: 4,
    title: "Contactless Redemption",
    photo: Contactless, // Corrected "image" to "photo"
    para: "Redeem your Green Points for impromptu holidays, staycations, fine dining experiences, spa sojourns, and more using your mobile phone.",
  },
  {
    id: 5,
    title: "International Getaways",
    photo: International, // Corrected "image" to "photo"
    para: "Redeem your Club ITC Green Points for award nights at more than 6,500 Marriott Hotels & Resorts worldwide and discover exciting destinations. Terms apply.",
  },
  {
    id: 6,
    title: "E-Vouchers",
    photo: Vouchers, // Corrected "image" to "photo"
    para: "Members receive a bouquet of e-vouchers on achieving/retaining higher tier status, such as savings on spa & dining experiences, room upgrades, etc. Members may redeem the value e-vouchers digitally.",
  },
  {
    id: 7,
    title: "Rollover Nights",
    photo: Rollover, // Corrected "image" to "photo"
    para: "Each spend and room night counts! Members carry forward excess room nights and eligible spends to the next calendar year to enable upgrades to their next tier faster.",
  },
  {
    id: 8,
    title: "Gift Points",
    photo: Gift, // Corrected "image" to "photo"
    para: "Members can transfer/gift Green Points to other Club ITC membership accounts. So, your loved ones can be a part of the programme and enjoy the benefits too.",
  },
  {
    id: 9,
    title: "Points never expire",
    photo: Points, // Corrected "image" to "photo"
    para: "Green Points never expire for active members.",
  },
  {
    id: 10,
    title: "Free Wi-Fi",
    photo: Free, // Corrected "image" to "photo"
    para: "Receive complimentary Wi-Fi for your stays at participating hotels.",
  },
];

// Club Card Component
function ClubCard({ photo, title, para }) {
  return (
    <div className="card col-md-4 col-12 mt-4 mx-2" style={{ width: "300px" }}>
      <img src={photo} alt={title} className="card-img-top" />
      <div className="card-body">
        <h3 className="card-title meet">{title}</h3>
        <p className="card-text">{para}</p>
      </div>
    </div>
  );
}

ClubCard.propTypes = {
  photo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};

function ClubItc() {
  return (
    <>
      <TopNav />
      <div className="container-fluid">
        <Carousel className="carousel1">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Club1}
              alt="Club ITC promotional image 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Club2}
              alt="Club ITC Grand Goa image"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <Container>
        <div className="text-center mt-3">
          <h1 className="meet">Club ITC</h1>
        </div>
        <p>
          Reward yourself with Club ITC, one of India’s most transparent,
          flexible, and easy-to-use loyalty programmes for over three decades.
          As a Club ITC member, gain access to a wide range of exclusive member
          benefits across 135+ hotels pan India with award-winning restaurants
          and rejuvenating wellness centers for memorable experiences.
        </p>
        <p>
          Club ITC members gain access to benefits which accelerate as they
          move up tiers, including free stays, room upgrades, dining
          experiences, spa therapies, and more.
        </p>
      </Container>
      <Container>
        <div className="text-center mt-3">
          <h1 className="meet">Key Highlights</h1>
        </div>
        <p className="text-center">
          Club ITC Benefits & Privileges at a glance
        </p>
      </Container>
      <Container>
        {/* Mapping through offer data */}
        <div className="d-flex flex-wrap justify-content-center">
          {offerData.map((offer) => (
            <ClubCard
              key={offer.id}
              photo={offer.photo}
              title={offer.title}
              para={offer.para}
            />
          ))}
        </div>
        <div className="d-flex flex-wrap justify-content-center mt-5">
          <p className="view-offer">NOT MEMBER ? ENROL NOW</p>
        </div>
        <div className="d-flex flex-wrap justify-content-center mt-2">
          <p className="view-offer">BENEFITS & PRIVILEGES OF CLUB ITC</p>
        </div>
      </Container>
      <FooterNav />
    </>
  );
}

export default ClubItc;
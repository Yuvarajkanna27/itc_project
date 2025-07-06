import React from 'react'
import { Container } from 'react-bootstrap'

import Offers1 from "./img1/short-break (1).jpg";
import Offers2 from "./img1/all-in-getaways (1).jpg";
import Offers3 from "./img1/suite-memories (1).jpg";
import FooterNav from './FooterNav';
import TopNav from './TopNav';

function Offers() {
  return (
    <>
        <TopNav/>
      <Container>
        <div className="row">
            <h1 className="meet d-flex justify-content-center mt-5 mb-4">Our Curated Offers</h1>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
                <img src={Offers1} className="card-img-top mt-2" alt="ITC HOtel"/>
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
                        <button className="btn btn-info">BOOK NOW</button>
                    </div>
                </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
                <img src={Offers2} className="card-img-top mt-2" alt="ITC HOtel"/>
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
                        <button className="btn btn-info">BOOK NOW</button>
                    </div>
                </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
                <img src={Offers3} className="card-img-top mt-2" alt="ITC HOtel"/>
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
                        <button className="btn btn-info">BOOK NOW</button>
                    </div>
                </div>
            </div>
        </div>
      </Container>
      <FooterNav/>
    </>
  )
}

export default Offers;

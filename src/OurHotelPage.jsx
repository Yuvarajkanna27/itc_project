import React from 'react';
//import Nav from 'react-bootstrap/Nav';
import { Container} from 'react-bootstrap';
//ourhottelpage image
import OurHotel1 from "../src/img1/Our1.jpg";
import OurHotel2 from "../src/img1/Our2.jpg";
import OurHotel3 from "../src/img1/Our3.png";
import OurHotel4 from "../src/img1/our4.png";
import OurHotel5 from "../src/img1/our5.png";
import OurHotel6 from "../src/img1/our6.png";
import OurHotel7 from "../src/img1/our7.png";
import OurHotel8 from "../src/img1/our8.png";
import OurHotel9 from "../src/img1/our9.png";
import OurHotel10 from "../src/img1/our10.png";
import OurHotel11 from "../src/img1/our11.png";
import OurHotel12 from "../src/img1/our12.png";
import OurHotel13 from "../src/img1/our13.png";
import OurHotel14 from "../src/img1/our14.png";
import OurHotel15 from "../src/img1/our15.png";
import OurHotel16 from "../src/img1/our16.jpg";
import OurHotel17 from "../src/img1/our17.png";
import OurHotel18 from "../src/img1/our18.jpg";
import OurHotel19 from "../src/img1/our19.jpg";
import OurHotel20 from "../src/img1/our20.jpg";
import OurHotel21 from "../src/img1/our21.jpg";
import OurHotel22 from "../src/img1/our22.png";
import OurHotel23 from "../src/img1/our23.png";
import OurHotel24 from "../src/img1/our24.png";
import OurHotel25 from "../src/img1/our25.png";
import OurHotel26 from "../src/img1/our26.jpg";
import OurHotel27 from "../src/img1/our27.png";
import OurHotel28 from "../src/img1/our28.jpg";
import OurHotel29 from "../src/img1/our29.png";
import OurHotel30 from "../src/img1/our30.jpg";
import OurHotel31 from "../src/img1/our31.png";
import OurHotel32 from "../src/img1/our32.jpg";
import OurHotel33 from "../src/img1/our33.jpg";
import OurHotel34 from "../src/img1/our34.jpg";
import OurHotel35 from "../src/img1/our35.jpg";
import OurHotel36 from "../src/img1/our36.png";
import FooterNav from './FooterNav';
import TopNav from './TopNav';



function OurHotelPage() {
  return (
    <>
        <TopNav />
        <Container className="container mt-5">
          <div className="row">
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel1} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                  <div className="card-title ms-4">
                    <i className="h4">ITC Ratnadipa, Colombo</i>
                  </div>
                <p>
                  ITC Ratnadipa is the first international hotel of ITC Hotels, debuting in the capital city of Colombo. Offering unrivalled views of the Indian ocean, elegantly portraying Sri Lankan architecture & local charm.
                </p>
                <ul>
                  <li>Unparalleled location in Colombo, with stunning views of the ocean.</li>
                  <li>Rooms and suites with private balconies access and waterfront views.</li>
                  <li>Award-winning cuisine offering.</li>
                </ul>
                <div className="">
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel2} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                  <div className="card-title ms-4">
                    <i className="h4">ITC Narmada, Ahmedabad</i>
                  </div>
                <p style={{textAlign:"justify"}}>
                The globally acclaimed hospitality style of ITC Hotels now finds expression in the city of Ahmedabad.<br/> ITC Narmada epitomises a distinguished and luxurious host, standing tall in an exclusive neighbourhood.
               </p>
                <ul>
                  <li>Centrally located, with commanding views of the city’s skyline.</li>
                  <li>Elegantly appointed rooms and suites</li>
                  <li>Restaurants, banqueting, a spa & more</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel3} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                  <div className="card-title ms-4">
                    <i className="h4">ITC Maurya, New Delhi</i>
                  </div>
                <p style={{textAlign:"justify"}}>
                Located in the Diplomatic Enclave, ITC Maurya is a tribute to the great Mauryan Dynasty.<br/> Offering spectacular ridge views, award winning cuisine, exquisite accommodation & more.
                </p>
                <ul>
                  <li>Preferred residence of heads of state & world leaders</li>
                  <li>LEED platinum rated hotel</li>
                  <li>Award winning cuisine offerings</li>
                </ul>
                <div className="">
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel4} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                  <div className="card-title ms-4">
                    <i className="h4">ITC Grand Bharat Retreat, Gurugram</i>
                  </div>
                <p>
                A tribute to the glory of India & set amidst the Aravalis, the retreat features 104 suites & villas, 27-hole golf course, exquisite culinary & wellness experiences.
                </p>
                <ul>
                  <li>1214056 sq. m. of serenity - a short drive from Delhi</li>
                  <li>Ideal for destination weddings</li>
                  <li>LEED platinum rated retreat</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel5} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                  <div className="card-title ms-4">
                    <i className="h4">ITC Royal Bengal, Kolkata</i>
                  </div>
                <p>
                Located in the emerging & commercial district of Kolkata, the one of a kind ITC Royal Bengal is an ode to the region’s cultural heritage & lineage.
                </p>
                <ul>
                  <li>456 rooms, suites & service apartments.</li>
                  <li>7 dining destinations.</li>
                  <li>5,630 square meter of banqueting space.</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel6} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                  <div className="card-title ms-4">
                    <i className="h4">ITC Grand Chola, Chennai</i>
                  </div>
                <p>
                Celebrating the glory of the Chola dynasty, the hotel overlooks verdant foliage in the heart of Chennai. Offers 600 rooms, suites & apartments, 10 dining destinations, expansive banqueting, signature wellness & more.
                </p>
                <ul>
                  <li>Amongst the country's largest pillar less banquet halls</li>
                  <li>Award winning cuisine offerings.</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel7} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                  <div className="card-title ms-4">
                    <i className="h4">ITC Grand Goa Resort & Spa, Goa</i>
                  </div>
                <p>
                Nestled in serene south Goa, amidst 1,82,109 m² of lush landscapes & lagoons, the resort offers direct access to the pristine Arossim beach
                </p>
                <ul>
                  <li>Indo-Portuguese village style architecture</li>
                  <li>Kaya Kalp - The Royal Spa</li>
                  <li>6 Exotic dining destinations</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel8} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                  <div className="card-title ms-4">
                    <i className="h4">ITC Maratha, Mumbai
                    </i>
                  </div>
                <p>
                Inspired by the Maratha dynasty & located close to the airport, this luxury hotel in Mumbai combines European and Indian sensibilities with vintage charm and contemporary efficiency
                </p>
                <ul>
                  <li>380 spacious rooms & suites</li>
                  <li>Award winning cuisine offerings</li>
                  <li>LEED Platinum| LEED ZERO Carbon rated hotel</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel9} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                  <div className="card-title ms-4">
                    <i className="h4">ITC Grand Central, Mumbai</i>
                  </div>
                <p>
                Inspired by Victorian architecture of old Bombay, the hotel is situated in the business & recreational centre of Parel & offers breath-taking views of the city & sea.
                </p>
                <ul>
                  <li>LEED Zero Carbon rated hotel</li>
                  <li>242 rooms & suites, signature dining & wellness offerings.</li>
                  <li>Blend of Victorian heritage & contemporary design.</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel10} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                  <div className="card-title ms-4">
                    <i className="h4">ITC Gardenia, Bengaluru</i>
                  </div>
                <p>
                A tribute to the gardens of Bengaluru, ITC Gardenia offers rooms & suites inspired by nature, naturally air-cooled public spaces, signature gourmet & wellness experiences
                </p>
                <ul>
                  <li>Located in the heart of the City</li>
                  <li>Select rooms & suites with personal balconies</li>
                  <li>LEED Platinum rated Hotel: 100% powered by renewable energy</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel11} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                  <div className="card-title ms-4">
                    <i className="h4">ITC Windsor, Bengaluru</i>
                  </div>
                <p>
                Located on Golf Course road, reminiscent of an English manor, ITC Windsor exudes urban elegance combined with world class services
                </p>
                <ul>
                  <li>LEED platinum rated</li>
                  <li>Select rooms & suites offer garden / balcony access</li>
                  <li>Award winning cuisine</li>
                  <li>Kaya Kalp - The Spa</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel12} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                  <div className="card-title ms-4">
                    <i className="h4">ITC Kohenur, Hyderabad</i>
                  </div>
                <p>
                Located in the heart of Hyderabad’s HITEC City & overlooking the picturesque Durgam lake, ITC Kohenur is an ode to rare & priceless experiences.
                </p>
                <ul>
                  <li>LEED Platinum rated hotel.</li>
                  <li>274 oversized smart rooms & suites. (with some featuring a balcony)</li>
                  <li>Award winning cuisine offerings.</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel13} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                  <div className="card-title ms-4">
                    <i className="h4">ITC Kakatiya, Hyderabad</i>
                  </div>
                <p>
                ITC Kakatiya recreates an ambience with gentle echoes of Kakatiya dynasty art and sculpture in the heart of Hyderabad. The hotel offers lake-view rooms, award winning cuisine, Signature spa experiences & more.
                </p>
                <ul>
                  <li>188 rooms & suites, some offering views of the Hussain Sagar Lake</li>
                  <li>Award winning cuisine</li>
                  <li>LEED Platinum rated Hotel.</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel14} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                  <div className="card-title ms-4">
                    <i className="h4">ITC Sonar, Kolkata</i>
                  </div>
                <p>
                Built like a business resort, ITC Sonar elegantly combines modern design, green spaces and water bodies fluently to bring alive the essence of Kolkata
                </p>
                <ul>
                  <li>LEED Platinum rated hotel - 1st Luxury hotel in the world to earn carbon credits under the carbon trading regime</li>
                  <li>Award winning cuisine offerings</li>
                  <li>Kaya Kalp - The Spa</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel15} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                  <div className="card-title ms-4">
                    <i className="h4">ITC Mughal Resort & Spa, Agra</i>
                  </div>
                <p>
                Winner of the Aga Khan Award for Architectural excellence, ITC Mughal is a fitting tribute to the great Mughal builders of the past.
                </p>
                <ul>
                  <li>Luxury Resort & Spa in 23 acres sprawling gardens & scenic waterbodies.</li>
                  <li>LEED Platinum and LEED Zero Carbon Certified</li>
                  <li>In close proximity of just 4 kms from Taj Mahal</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel16} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                  <div className="card-title ms-4">
                    <i className="h4">ITC Rajputana, Jaipur</i>
                  </div>
                <p>
                A prestigious LEED Platinum-rated hotel, designed after classic Royal Havelis. The hotel exudes elegance & grandeur while preserving Rajasthan's rich heritage. Centrally located & close to the walled pink city & Palace, it offers its guests sustainable stays along with worthwhile luxury experiences.
                </p>
                <ul>
                  <li>Located 500 meters from the city center and key shopping areas</li>
                  <li>Convenient to scenic tourist attractions</li>
                  <li>Ideal for luxury weddings and destination events with multiple open venue options</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel17} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                  <div className="card-title ms-4">
                    <i className="h4">Sheraton New Delhi</i>
                  </div>
                <p>
                Located in the heart of South Delhi, the hotel is a favorite of the urbane connoisseur & the discerning traveler. Features 220 rooms, signature dining options, bespoke banqueting
                </p>
                <ul>
                  <li>Located in the Business and Commercial district of South Delhi - Saket</li>
                  <li>220 rooms offering modern amenities and facilities</li>
                  <li>Celebrated dining destinations</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel18} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                  <div className="card-title ms-4">
                    <i className="h4">Mementos by ITC Hotels Ekaaya, Udaipur</i>
                  </div>
                <p>
                See a side of Udaipur you’ve never seen before. An estate that’s home to miles upon miles of serenity, tucked away in the lap of Aravali hills - away from crowded lakes, century-old palaces and tourist traps - it's an escape to behold
                </p>
                <ul>
                  <li>117 free-standing villas & suites</li>
                  <li>Uniquely appointed clusters</li>
                  <li>Dining experiences that are elevated to an art form</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel19} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                <div className="card-title ms-4">
                  <i className="h4">Mementos by ITC Hotels Jaipur</i>
                </div>
                <p>
                  Spacious yet intimate, it makes you feel like you are the only one here. Its 64 suites and villas, spread over 12 acres, are opulent odes to Jaipur’s rich heritage of art and culture.
                </p>
                <ul>
                  <li>Nestled at the foot of the Aravali Hills.</li>
                  <li>Opulent odes to Jaipur’s rich heritage of art and culture.</li>
                  <li>Enjoy the comfort of the ancient trees and Mughal-inspired gardens.</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel20} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                <div className="card-title ms-4">
                  <i className="h4">Welcomhotel by ITC Hotels, Devee Grand Bay, Visakhapatnam</i>
                </div>
                <p>
                Perched on a hilltop just 100m from the sea, the hotel offers a panoramic view of the Bay of Bengal & the city. Its premium facilities & services make it the leading choice for the discerning traveller.
                </p>
                <ul>
                  <li>Spacious Rooms & suites</li>
                  <li>16 km from the airport</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel21} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                <div className="card-title ms-4">
                  <i className="h4">Welcomhotel by ITC Hotels, Jim Corbett</i>
                </div>
                <p>
                Spread across woodland forests is the ravishing Welcomhotel Jim Corbett, overlooking the Kosi River & the glorious peaks of the Inner Himalayan ranges. Plan a romantic getaway to the heavenly landscapes & the wilderness of the Corbett forests.
                </p>
                <ul>
                  <li>Lavish & expansive Banqueting Space</li>
                  <li>Ideal for destination events</li>
                  <li>Ideal for trekking, safaris & private trail tours</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel22} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                <div className="card-title ms-4">
                  <i className="h4">Welcomhotel by ITC Hotels, Alkapuri, Vadodara</i>
                </div>
                <p>
                In an ambience steeped in history, complemented by a richness of culture, Welcomhotel Vadodara brings world class luxury with the warmth of Indian hospitality in an experience that is unmistakably grand.
                </p>
                <ul>
                  <li>City centre hotel</li>
                  <li>Large spacious rooms with modern amenities</li>
                  <li>Speciality Cuisine Offerings</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel23} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                <div className="card-title ms-4">
                  <i className="h4">Welcomhotel by ITC Hotels, Shimla</i>
                </div>
                <p>
                Nestled amongst the evergreen forests of the lower Himalayas in Mashobra valley, Welcomhotel Shimla is renowned for its stunning mountain views, premium interiors and flawless service.
                </p>
                <ul>
                  <li>10 kms from Shimla</li>
                  <li>Mesmerizing forest & mountain views</li>
                  <li>A host of leisure & recreation activities</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel24} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                <div className="card-title ms-4">
                  <i className="h4">Welcomhotel by ITC Hotels, Bay Island, Port Blair</i>
                </div>
                <p>
                Amidst the mesmerizing landscapes & built as a series of decks cascading down the hillside, the resort overlooks the Bay of Bengal & offers joyful island experiences
                </p>
                <ul>
                  <li>Centrally located with stunning sea views</li>
                  <li>Recently renovated public areas</li>
                  <li>A host of leisure & recreation activities</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel25} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                <div className="card-title ms-4">
                  <i className="h4">Welcomhotel by ITC Hotels, Bella Vista, Panchkula - Chandigarh</i>
                </div>
                <p>
                Located in Panchkula, offering a spectacular view of the Shivaliks, the hotel offers plush accommodation, premium dining options & an array of wellness facilities.
                </p>
                <ul>
                  <li>Boutique Hotel Experience</li>
                  <li>Select Rooms with Pool</li>
                  <li>Ideal stopover on route to the hills</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel26} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                <div className="card-title ms-4">
                  <i className="h4">Welcomhotel by ITC Hotels, Pine N Peak, Pahalgam</i>
                </div>
                <p>
                Located atop the Rajwas Plateau, the resort offers views of the Lidder River and snow topped mountains. The hotel celebrates the beautiful city of Pahalgam in the most pristine form.
                </p>
                <ul>
                  <li>Authentic Kashmiri architecture</li>
                  <li>Rooms with picturesque Views</li>
                  <li>Proximity to the golf course</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel27} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                <div className="card-title ms-4">
                  <i className="h4">Welcomhotel by ITC Hotels, Dwarka, New Delhi</i>
                </div>
                <p>
                Located in the heart of Asia's largest sub-city - Dwarka, the hotel is an inclusive blend of contemporary design and International services standards, offering enriching experiences to the discerning traveller.
                </p>
                <ul>
                  <li>In close Proximity to the airport</li>
                  <li>392 Spacious Rooms and Suites</li>
                  <li>Speciality Cuisine Offerings</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel28} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                <div className="card-title ms-4">
                  <i className="h4">Welcomhotel by ITC Hotels, The Savoy, Mussoorie</i>
                </div>
                <p>
                With a regal history spanning over a century & a splendid backdrop of the Himalayan Range, the hotel offers wonderful mix of old-world charm & new-age conveniences.
                </p>
                <ul>
                  <li>Built in 1902 - Gothic architecture</li>
                  <li>Plush accommodation & dining offerings</li>
                  <li>Delightful leisure experiences & activities</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel29} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                <div className="card-title ms-4">
                  <i className="h4">Welcomhotel by ITC Hotels, Kences Palm Beach, Mamallapuram-Chennai</i>
                </div>
                <p>
                Perfect blend of comfort, privacy & sea side serenity. Spread over 36421 sq. m, this resort brings you close to the ancient monuments.
                </p>
                <ul>
                  <li>Plush guest rooms with stunning views</li>
                  <li>Beach access</li>
                  <li>Enticing recreation & leisure activities</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel30} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                <div className="card-title ms-4">
                  <i className="h4">Welcomhotel by ITC Hotels, Fort & Dunes, Khimsar</i>
                </div>
                <p>
                Located at the edge of the Thar Desert, the Khimsar Fort Hotel offers an exotic stay in the lap of royal elegance. Warm Rajput hospitality awaits you at the 15th-century heritage hotel.
                </p>
                <ul>
                  <li>89 quaint & majestic rooms, suites & luxury huts</li>
                  <li>Ideal for destination weddings</li>
                  <li>Splendid view of the sand dunes village</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel31} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                <div className="card-title ms-4">
                  <i className="h4">Welcomhotel By ITC Hotels, Katra</i>
                </div>
                <p>
                A warm & welcoming hotel, with breath-taking mountain views, offering the finest hospitality to travellers. Excellent location, contemporary facilities & delectable cuisines.
                </p>
                <ul>
                  <li>Only 3.2 km from Ban Ganga - the starting point of the Mata Vaishno Devi pilgrimage.</li>
                  <li>Located close to scenic tourist attractions</li>
                  <li>Wellness facilities, banqueting venues & more</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel32} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                <div className="card-title ms-4">
                  <i className="h4">Welcomhotel by ITC Hotels, Jodhpur</i>
                </div>
                <p>
                A tribute to the city of Jodhpur, Welcomhotel Jodhpur endeavors to bring about an element of grandeur through food, music, color & an ethnic mélange of unique experiences. A range of leisure activities available..
                </p>
                <ul>
                  <li>Large Rooms with modern luxuries</li>
                  <li>Signature dining options</li>
                  <li>Features desert wild-life safaris</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel33} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                <div className="card-title ms-4">
                  <i className="h4">Welcomhotel by ITC Hotels, Guntur</i>
                </div>
                <p>
                A warm & elegant host, Welcomhotel Guntur is inspired with the cultural ethos of the region, drawing on the tropical climate & beautiful botanical surroundings. Its interiors are distinctive, with the use of glazed screens, metal work & specially designed light fixtures.
                </p>
                <ul>
                  <li>Centrally located, with commanding views of the city’s skyline.</li>
                  <li>Beautifully appointed rooms and suites, with superb amenities.</li>
                  <li>Restaurants, banqueting, a spa set amid cool and airy interiors.</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel34} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                <div className="card-title ms-4">
                  <i className="h4">Welcomhotel by ITC Hotels, Race Course, Coimbatore</i>
                </div>
                <p>
                Located in the heart of Kovai city, Welcomhotel Coimbatore draws inspiration from the glorious elements of the city in its design, state-of-the-art amenities & experiences.
                </p>
                <ul>
                  <li>Modern City Centre Hotel with Local inspiration</li>
                  <li>Smart, spacious rooms</li>
                  <li>Speciality Cuisine</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel35} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                <div className="card-title ms-4">
                  <i className="h4">Welcomhotel by ITC Hotels, Cathedral Road, Chennai</i>
                </div>
                <p>
                Welcomhotel Chennai is back in an awe-inspiring embodiment of contemporary design with regional influence. The newly refurbished hotel brings new dining experiences, well-appointed rooms with modern décor and amenities and elevated facilities .
                </p>
                <ul>
                  <li>Expansive Banqueting Spaces</li>
                  <li>New and improved Dining Spaces</li>
                  <li>90 rooms and suites with fresh décor</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
              <img src={OurHotel36} className="card-img-top mt-2" alt="ITC HOtel"/>
              <div className="card-body">
                <div className="card-title ms-4">
                  <i className="h4">Welcomhotel by ITC Hotels, GST Road, Chenna</i>
                </div>
                <p>
                Conveniently located in the neighborhood of a bustling SEZ, this upscale business hotel features well-appointed accommodation, exquisite dining, spa & elaborate banqueting
                </p>
                <ul>
                  <li>Large Rooms with Modern Luxuries</li>
                  <li>Close proximity to Mahindra World City, Oragadam Industrial Area</li>
                </ul>
                <div>
                  <button  className="btn btn-success me-5">EXPLORE</button>
                  <button className="btn btn-info">BOOK NOW</button>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <FooterNav />
    </>
  )
}

export default OurHotelPage;

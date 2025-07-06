import React from 'react';
import { Container} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import TopNav from './TopNav';
//meeting page img
import Meet1 from "./img1/meeting1.png";
import Meet2 from "./img1/meeting2.png";
import Meet3 from "./img1/meeting3.png";
import Meet4 from "./img1/meeting4.png";
import Meet5 from "./img1/meeting5.png";
//meeting page carousel images
import MeetSlid1 from "./img1/meetslid1.png";
import MeetSlid2 from "./img1/meetslid2.jpg";
import MeetSlid3 from "./img1/meetslid3.png";
import MeetSlid4 from "./img1/meetslid4.jpg";
import MeetSlid5 from "./img1/meetslid5.png";
import MeetSlid6 from "./img1/meetslid6.jpg";
import FooterNav from './FooterNav';

function Meeting() {
  return (
    <>
        <TopNav />
        <Container>
            <div className="row">
                <div className="d-flex justify-content-center h1 meet">Confer, Convene, Celebrate</div>
                <div className="d-flex justify-content-center h5 meet">Classy corporate meets, joyous social gatherings</div>
                <div className="meetpara ">
                    <p>
                    ITC Hotels & Welcomhotels have long been renowned for magnificent gatherings of discerning people,
                    whether corporate events or social celebrations. Conferences, symposia, board meetings, product launches and more can be hosted with great aplomb.
                    There is a huge variety of spaces and hosting capacities – both indoors and outdoors – backed up by superb décor,
                    award-winning cuisines, the latest audio-visual and technical support and business services.
                    </p>
                    <p className="mt-5">
                    Parties and celebrations take on a radiant sheen . The sheer grandeur of the hotel is the first moment of admiration . The décor, ambience and signature cuisines make the
                    celebration ever more memorable.The warmth of intuitive service adds a special aura to the experience.
                    </p>
                    <p className="mt-5">
                    The ITC Grand Chola in Chennai can host up to 3,000 guests in the Rajendra Ballroom alone. The adjoining properties in Kolkata –
                    ITC Sonar and ITC Royal Bengal – are ideal venues for large scale events. In contrast, an offsite of 100 guests at Welcomhotel The Savoy in Mussoorie will be enveloped in the old world charm of a century-old property. The conference or celebration can be under the swaying palms by the sandy beaches
                    of Welcomhotel Kences Palm Beach at Mamallapuram. At every hotel, the possibilities are endless and so is the exultation.
                    </p>
                    <div className="d-flex justify-content-center">
                        <span className="meetbtn">Get in Tough</span>
                    </div>
                </div>
            </div>
        </Container>
        <Container>
            <div className="row">
                <h2 className="d-flex justify-content-center mt-4 meet">Ideal Meetings & Events venue</h2>
                <div className="col-md-4 col-12 mt-4">
                    <img src={Meet1} className="meetimg" alt="ITC HOTEL" />
                    <div className="card meetcard" style={{width:"340px"}}>
                        <div className="card-body">
                            <div className="card-title">
                                <span className="h5 meet ms-5">A culture of splendour</span>
                            </div>
                            <p>
                            Each ITC Hotel has a distinct personality that springs from the soil it stands on and the culture 
                            of the region it belongs to. Welcomhotel pays tribute to the arts and crafts, cuisines and folklore of its locale. 
                            Together,they offer diverse options of metros, large cities, hill and beach resorts, palaces and forts. 
                            Each hotel celebrates its cultural roots, while also offering the best from the country and the world. 
                            </p>
                        </div>
                    </div>  
                </div>
                <div className="col-md-4 col-12 mt-4">
                    <img src={Meet2} className="meetimg" alt="ITC HOTEL" />
                    <div className="card meetcard" style={{width:"340px"}}>
                        <div className="card-body">
                            <div className="card-title">
                                <span className="h5 meet">Vibrant, diverse venues</span>
                            </div>
                            <p>
                            It could be a board meeting of 10 people, a family gathering of 30 or a convention of 3,000 – ITC Hotels & Welcomhotel offer
                             venues to match the need. Massive pillar-less spaces with adjoining rooms intuitively designed for the convenience of large 
                             gatherings. The celebrations can also move to lawns, gardens & pool sides  
                            </p>
                        </div>
                    </div>  
                </div>
                <div className="col-md-4 col-12 mt-4">
                    <img src={Meet3} className="meetimg" alt="ITC HOTEL" />
                    <div className="card meetcard" style={{width:"340px"}}>
                        <div className="card-body">
                            <div className="card-title">
                                <span className="h5 meet">Much awarded, much loved cuisines</span>
                            </div>
                            <p>
                            With a repertoire of award winning culinary brands like Bukhara, Dum Pukht , Royal Vega , Avartana amongst others , 
                            the gourmet plans can be customized , adding to the banqueting experience. From traditional flavors influenced by local 
                            culture to gastronomic delights that trot the world, the choices are limitless and diverse
                            </p>
                        </div>
                    </div>  
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-4 col-12 mt-4">
                        <img src={Meet4} className="meetimg" alt="ITC HOTEL" />
                        <div className="card meetcard" style={{width:"340px"}}>
                            <div className="card-body">
                                <div className="card-title">
                                    <span className="h5 meet">Responsible banquets</span>
                                </div>
                                <p>
                                The hotels also offer the option of hosting planet-positive Green Banquets, with measures like organic and locally produced food, using daylight 
                                as much as possible and more. Actions that help reduce carbon footprints are always encouraged 
                                </p>
                            </div>
                        </div>  
                    </div>
                    <div className="col-md-4 col-12 mt-4">
                        <img src={Meet5} className="meetimg" alt="ITC HOTEL" />
                        <div className="card meetcard" style={{width:"340px"}}>
                            <div className="card-body">
                                <div className="card-title">
                                    <span className="h5 meet">A dedicated team</span>
                                </div>
                                <p>
                                Each event has a team dedicated to it that takes care of the big picture and every minute detail meticulously. Working closely with the hosts
                                to ensure their requirements are met in style , they also offer wonderful ideas for each aspect of the event
                                </p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </Container>
        <div className="container-fluid mt-5">
            <Carousel>
                <Carousel.Item>
                    <img className="col-12" src={MeetSlid1} alt="ITC Hotel" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="col-12" src={MeetSlid2} alt="ITC Hotel" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="col-12" src={MeetSlid3} alt="ITC Hotel" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="col-12" src={MeetSlid4} alt="ITC Hotel" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="col-12" src={MeetSlid5} alt="ITC Hotel" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="col-12" src={MeetSlid6} alt="ITC Hotel" />
                </Carousel.Item>
            </Carousel>
        </div>
        <FooterNav />
    </>
  )
}

export default Meeting



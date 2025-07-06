import React from "range";
import TopImg1 from "../img1/clubitc-master-key.jpg";

function image() {
  return (
    // <div>
    //   <img src={TopImg1} alt="ITC Hotel"/>
    // </div>
    <div className="card col-md-4 col-12 ms-3 mt-2" style={{width:"380px"}}>
      <img src={OurHotel} className="card-img-top mt-2" alt="ITC HOtel"/>
      <div className="card-body">
        <div className="card-title ms-4">
          <i className="h4"></i>
        </div>
        <p>

        </p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div>
          <button  className="btn btn-success me-5">EXPLORE</button>
          <button className="btn btn-info">BOOK NOW</button>
        </div>
      </div>
    </div>
  )
}

export default image;



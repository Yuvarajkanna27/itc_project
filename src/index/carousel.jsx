import Carousel from 'react-bootstrap/Carousel';
import Sli1 from "../img1/slid1.jpg";
import Sli2 from "../img1/slid2.jpg";
import Sli3 from "../img1/Slid3.jpg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={Sli1} alt="ITC Hotel" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Sli2} alt="ITC Hotel" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Sli3} alt="ITC Hotel" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;

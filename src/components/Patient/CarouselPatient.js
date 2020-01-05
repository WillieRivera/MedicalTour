import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Button,
  CarouselCaption
} from 'reactstrap';

import doctor_back_carousel from '../../assets/img/doctor_back_carousel.jpg';
import doctor_back_carousel1 from '../../assets/img/doctor_back_carousel1.jpg';
import doctor_back_carousel2 from '../../assets/img/doctor_back_carousel2.jpg';
import doctor_back_carousel3 from '../../assets/img/doctor_back_carousel3.jpg';






const items = [
  {
    src: doctor_back_carousel,
  },
  {
    src: doctor_back_carousel1,
  },
  {
    src: doctor_back_carousel2,
  },
];

const CarouselPatient = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides=[
        <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        ride="carousel"
        key={0}
        >
            <img src={doctor_back_carousel}/>
            <div className="carousel-caption d-none d-md-block">
                <h2>6 TOGETHER</h2>
                <h3>IN ONE APP</h3>
                <div>
                    <ul>
                        <li>One click ride to your appointment</li>
                        <li>Discounts on visits,meds and labs</li>
                        <li>One click sends results to your physician</li>
                        <li>Safely encrypted medical records</li>
                        <li>Know the recognized insurance in your destination</li>
                        <li>Medical Interpreter on Voip or landline</li>
                        <div className="clear">
                            
                        </div>
                    </ul>
                    <div className="clear">
                        
                    </div>
                </div>
                <Button>Book an appointment</Button>
            </div>
        </CarouselItem>,
        <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        ride="carousel"
        key={1}
        >
            <img src={doctor_back_carousel1}/>
            <div className="carousel-caption d-none d-md-block">
                <h2>HOW IT WORKS?</h2>
                <div>
                    <ul>
                        <li>Request a visit for you or your family</li>
                        <li>Send a request to the physican of your choice</li>
                        <li>Get confirmation</li>
                        <li>Get examined and store your report</li>
                        <li>Use insurance or pay uncovered conditions at a regualr discount</li>
                        <div className="clear">
                            
                        </div>
                    </ul>
                    <div className="clear">
                        
                    </div>
                </div>
                <Button>Book an appointment</Button>
            </div>
        </CarouselItem>,
        <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={2}
        >
            <img src={doctor_back_carousel2}/>
            <div className="carousel-caption d-none d-md-block">
                <h2>ADDED VALUE</h2>
                <h3>SERVICES</h3>
                <div>
                    <ul>
                        <li>Request medicine,lab and investigation with insurance or discounts within the app</li>
                        <li>Upload and Send lab and imaging results directly to your physican</li>
                        <li>Request a ride within the app</li>
                        <div className="clear">
                          
                        </div>
                    </ul>
                    <div className="clear">
                            
                    </div>
                </div>
                <Button>Book an appointment</Button>
            </div>
        </CarouselItem>,
        
  ]
  

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
    </Carousel>
  );
}

export default CarouselPatient;
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
  {
    src: doctor_back_carousel3,
  }
];

const CarouselDoctor = (props) => {
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
        key={0}
        >
            <img src={doctor_back_carousel}/>
            <div className="carousel-caption ">
                <h2>TOURMED</h2>
                <h3>PROMISE</h3>
                <div>
                    <ul>
                        <li>Move anywhere and patients will find you</li>
                        <li>Start now with millions of locals and visitor</li>
                        <li>Build reputation with locals and expats</li>
                        <li>Know the hot zones and plan accurately</li>
                        <li>Build your income with clinic or no clinic</li>
                        <li>Keep the connection with follow ups</li>
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
        key={1}
        >
            <img src={doctor_back_carousel}/>
            <div className="carousel-caption ">
                <h2>4 Things</h2>
                <h3>Together</h3>
                <div>
                    <ul>
                        <li>Treatment plan management in seconds</li>
                        <li>Automated diets & recommendations</li>
                        <li>Receive results directly in case record</li>
                        <li>Stay organized with encrypted records storage</li>
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
            <img src={doctor_back_carousel1}/>
            <div className="carousel-caption ">
                <h2>HOW IT WORKS</h2>
                <h3>SIGN UP</h3>
                <div>
                    <ul>
                        <li>Set your availability and review request</li>
                        <li>Check complaint and confirm the time</li>
                        <li>View medical history on the go</li>
                        <li>Examine and send report instantly</li>
                        <li>Get payment in cash and credit</li>
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
        key={3}
        >
            <img src={doctor_back_carousel2}/>
            <div className="carousel-caption ">
                <h2>ADDED VALUE</h2>
                <h3></h3>
                <div>
                    <ul>
                        <li>Send your management plan and bill to the patient or insurance with a click</li>
                        <li>Request medicine and investigation instantly</li>
                        <li>Recieve results directly in case record</li>
                        <li>Request a ride for home visits with the app</li>
                        <div className="clear">
                            
                        </div>
                    </ul>
                    <div className="clear">
                        
                    </div>
                </div>
                <Button>Book an appointment</Button>
            </div>
        </CarouselItem>
  ]
  

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      ride="carousel"
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
    </Carousel>
  );
}

export default CarouselDoctor;
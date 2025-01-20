import React from 'react'
import img1 from '../../images/trip04.jpg';
import img2 from '../../images/trip05.jpg';
import img3 from '../../images/trip06.jpg';
import { IoIosStar } from "react-icons/io";
const Cards2 = () => {
  return (
    <div>
                <div class="trip__grid">
                  <div class="trip__card">
                    <img className='package1_img' src={img1} alt="trip" />
                    <div class="trip__details">
                      <p>Stupa Pagode Tempel, Sri Lanka</p>
                      <div class="rating"><i class="ri-star-fill"><IoIosStar /></i> 4.2</div>
                      <div class="booking__price">
                        <div class="price"><span>From</span> $300</div>
                        <button class="book__now">Book Now</button>
                      </div>
                    </div>
                  </div>
                  <div class="trip__card">
                    <img className='package1_img' src={img2} alt="trip" />
                    <div class="trip__details">
                      <p>Golden Gate Bridge, England</p>
                      <div class="rating"><i class="ri-star-fill"><IoIosStar /></i> 4.5</div>
                      <div class="booking__price">
                        <div class="price"><span>From</span> $450</div>
                        <button class="book__now">Book Now</button>
                      </div>
                    </div>
                  </div>
                  <div class="trip__card">
                    <img className='package1_img' src={img3} alt="trip" />
                    <div class="trip__details">
                      <p>Kruger National Park, Africa</p>
                      <div class="rating"><i class="ri-star-fill"><IoIosStar /></i> 4.7</div>
                      <div class="booking__price">
                        <div class="price"><span>From</span> $400</div>
                        <button class="book__now">Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default Cards2
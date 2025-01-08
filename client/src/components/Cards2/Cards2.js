import React from 'react'
import img1 from '../../assets/trip-1.jpg';
import img2 from '../../assets/trip-2.jpg';
import img3 from '../../assets/trip-3.jpg';
import { IoIosStar } from "react-icons/io";
const Cards2 = () => {
  return (
    <div>
                <div class="trip__grid">
                  <div class="trip__card">
                    <img className='package1_img' src={img1} alt="trip" />
                    <div class="trip__details">
                      <p>Wasserwerk Frelberg, Germany</p>
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
                      <p>Patagonia, Argentina and Chile</p>
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
                      <p>The Dolomites, Italy</p>
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
import React from 'react'
import img1 from '../../images/trip01.jpg';
import img2 from '../../images/trip02.jpg';
import img3 from '../../images/trip03.jpg';
import { IoIosStar } from "react-icons/io";
const Cards1 = () => {
  return (
    <div>
                <div class="trip__grid">
                  <div class="trip__card">
                    <img className='package1_img' src={img1} alt="trip" />
                    <div class="trip__details">
                      <p>Banff National Park-Moraine Lake, Canada</p>
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
                      <p>Great Ocean Road in Victoria, Australia</p>
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
                      <p>Aoraki  Mount Cook, New Zealand</p>
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

export default Cards1
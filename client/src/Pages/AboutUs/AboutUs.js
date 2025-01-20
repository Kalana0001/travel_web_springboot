import React from 'react'
import './AboutUs.css'
import img1 from '../../assets/tiger_01.jpg'
import { IoTicketSharp } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";

const AboutUs = () => {
  return (
    <div>
    <section class="section__container choose__container" id="about">
      <div class="choose__image">
        <img className='about_img' src={img1}alt="choose" />
      </div>
      <div class="choose__content">
        <p class="section__subheader">Why Choose Us?</p>
        <h2 class="section__header">Plan Your Trip <span>With Us</span></h2>
        <ul class="choose__list">
          <li>
            <span><i class="ri-verified-badge-fill"><GiPriceTag />
            </i></span>
            <div className='about_details'>
              <h4>Best Price Gurantee</h4>
              <p>
                We ensure you get the most competitive rates for your travel
                plans, making your dream destinations affordable.
              </p>
            </div>
          </li>
          <li>
            <span><i class="ri-calendar-fill"><IoTicketSharp /></i></span>
            <div className='about_details'>
              <h4>Booking Options</h4>
              <p>
                Experience the ease of flexible booking options tailored to suit
                your schedule and preferences.
              </p>
            </div>
          </li>
          <li>
            <span><i class="ri-road-map-fill"><FaMapMarkedAlt /></i></span>
            <div className='about_details'>
              <h4>Revising Track Map</h4>
              <p>
                Navigate your adventure with our personalized track maps
                designed for seamless and enjoyable travel experiences.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    </div>
  )
}

export default AboutUs
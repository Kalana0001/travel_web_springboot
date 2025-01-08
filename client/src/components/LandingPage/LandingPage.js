import React from 'react'
import './LandingPage.css';
import img2 from '../../assets/bg-dots.png';
import img3 from '../../assets/bg-arrow.png';
import img4 from '../../assets/destination-1.jpg';
import img5 from '../../assets/destination-2.jpg';
import img6 from '../../assets/destination-3.jpg';
import video1 from '../../assets/video-bg5.mp4';
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';

const LandingPage = () => {
  return (
    <div className="app">
    <video className="background-video" autoPlay loop muted>
        <source className='video-bg' src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    <div class="container">
        <Navbar />
      <div class="destination__container">
        <img class="bg__img__1" src={img2} alt="bg" />
        <img class="bg__img__2" src={img3} alt="bg" />
        <div class="socials">
          <span><i class="ri-twitter-fill"></i><FaTwitterSquare /></span>
          <span><i class="ri-facebook-fill"></i><FaFacebookF /></span>
          <span><i class="ri-instagram-line"></i><FaInstagram /></span>
          <span><i class="ri-youtube-fill"></i><FaYoutube /></span>
        </div>
        <div class="content">
          <h1>EXPLORE<br />DREAM<br /><span>DESTINATION</span></h1>
          <p>
            It encourages exploration of unfamiliar territories, embracing
            diverse cultures and landscapes, while pursuing the desired
            destination that captivates the heart and ignites a sense of wonder.
          </p>
          <button class="btn">BOOK NOW</button>
        </div>
        <div class="destination__grid">
          <div class="destination__card">
            <img src={img4} alt="destination" />
            <div class="card__content">
              <h4>10 Must-Visit Hidden Gems</h4>
              <p>
                Discover off-the-beaten-path locations and hidden gems within
                dream destinations, taking you beyond the typical tourist spots.
              </p>
            </div>
          </div>
          <div class="destination__card">
            <img src={img5} alt="destination" />
            <div class="card__content">
              <h4>Immersive Cultural Experiences</h4>
              <p>
                Dive deep into the vibrant cultures of dream destinations,
                showcasing the rituals, traditions, and local customs that make
                these places truly unique.
              </p>
            </div>
          </div>
          <div class="destination__card">
            <img src={img6} alt="destination" />
            <div class="card__content">
              <h4 className='lcard1_h4'>From Dreams to World Reality</h4>
              <p className='lcard1_p'>
                Explore expert tips, and hidden gems, ensuring every moment of
                your trip is optimized, and make the most of time in your
                long-awaited dream location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LandingPage
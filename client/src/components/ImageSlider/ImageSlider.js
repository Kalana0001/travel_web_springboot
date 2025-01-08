import React, { useEffect, useRef } from 'react';
import './ImageSlider.css';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const ImageSlider = () => {
  const slideRef = useRef(null);
  const containerRef = useRef(null); 

  useEffect(() => {
    const slideNext = () => {
      if (slideRef.current) {
        const items = slideRef.current.querySelectorAll('.item');
        slideRef.current.appendChild(items[0]);
      }
    };

    const slidePrev = () => {
      if (slideRef.current) {
        const items = slideRef.current.querySelectorAll('.item');
        slideRef.current.prepend(items[items.length - 1]);
      }
    };

    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    // Event listeners for manual control
    nextButton.addEventListener('click', slideNext);
    prevButton.addEventListener('click', slidePrev);

    // Auto-slide functionality
    let autoSlideInterval = setInterval(slideNext, 3000);

    // Pause auto-slide on hover
    const container = containerRef.current;
    const pauseAutoSlide = () => clearInterval(autoSlideInterval);
    const resumeAutoSlide = () => {
      autoSlideInterval = setInterval(slideNext, 3000);
    };

    container.addEventListener('mouseenter', pauseAutoSlide);
    container.addEventListener('mouseleave', resumeAutoSlide);

    // Cleanup event listeners and interval on unmount
    return () => {
      nextButton.removeEventListener('click', slideNext);
      prevButton.removeEventListener('click', slidePrev);
      container.removeEventListener('mouseenter', pauseAutoSlide);
      container.removeEventListener('mouseleave', resumeAutoSlide);
      clearInterval(autoSlideInterval);
    };
  }, []); 

  return (
    <div className='imgslider'>
    <div ref={containerRef} className="imgcontainer">
      <div ref={slideRef} className="slide">
        <div
          className="item"
          style={{ backgroundImage: `url('https://i.ibb.co/qCkd9jS/img1.jpg')` }}
        >
          <div className="imgcontent">
            <div className="name">Switzerland</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: `url('https://i.ibb.co/jrRb11q/img2.jpg')` }}
        >
          <div className="imgcontent">
            <div className="name">Finland</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: `url('https://i.ibb.co/NSwVv8D/img3.jpg')` }}
        >
          <div className="imgcontent">
            <div className="name">Iceland</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: `url('https://i.ibb.co/Bq4Q0M8/img4.jpg')` }}
        >
          <div className="imgcontent">
            <div className="name">Australia</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: `url('https://i.ibb.co/jTQfmTq/img5.jpg')` }}
        >
          <div className="imgcontent">
            <div className="name">Netherland</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: `url('https://i.ibb.co/RNkk6L0/img6.jpg')` }}
        >
          <div className="imgcontent">
            <div className="name">Ireland</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
      </div>

      <div className="imgbutton">
        <button className="prev">
          <i className="fa-solid fa-arrow-left"><FaArrowLeft /></i>
        </button>
        <button className="next">
          <i className="fa-solid fa-arrow-right"><FaArrowRight /></i>
        </button>
      </div>
    </div>
    <section class="gallary">
      <div class="imgslider_container gallary__container">
        <div class="gallary__content">
          <div className='gallary__details'>
            <h2 class="section__title">
              Our trip gallary that will inspire you
            </h2>
            <p class="section__subtitle">
              Explore your suitable and dream places around the world. Here you
              can find your right destination.
            </p>
            <button class="btn">View All</button>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ImageSlider;

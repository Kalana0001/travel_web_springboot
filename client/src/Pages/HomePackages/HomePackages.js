import React from 'react'
import './HomePackages.css';
import Cards1 from '../../components/Cards1/Cards1';
import Cards2 from '../../components/Cards2/Cards2';


const HomePackages = () => {
  return (
    <div>
    <section class="trip">
      <div class="package1_container trip__container">
        <h2 class="package1_title">Best trip packages</h2>
        <p class="package1_subtitle">
          Explore your suitable and dream places around the world. Here you can
          find your right destination.
        </p>
        <Cards1 />
        <Cards2 />
        <div class="view__all">
          <button class="package1_btn">View All</button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default HomePackages
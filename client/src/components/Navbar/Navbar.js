import React from 'react'
import './Navbar.css';
import img1 from '../../assets/logo.png';
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
              <nav className='land_nav'>
                <div class="nav__logo">
                  <img src={img1} alt="logo" />
                </div>
                <ul class="nav__links">
                  <li class="link"><a href="#">Home</a></li>
                  <li class="link"><a href="#">Destinations</a></li>
                  <li class="link"><a href="#">Contact Us</a></li>
                  <li class="link"><a href="#">Blog</a></li>
                </ul>
                <div class="search">
                  <input type="text" placeholder="Search" />
                  <span><i class="ri-search-line"></i><FaSearch /></span>
                </div>
                <div class="login">
                  <span><i class="ri-user-3-fill"></i><FaUser /></span>
                  Log In
                </div>
              </nav>
    </div>
  )
}

export default Navbar
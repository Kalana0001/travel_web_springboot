import './App.css';
import ImageSlider from './components/ImageSlider/ImageSlider';
import AboutUs from './Pages/AboutUs/AboutUs';
import LandingPage from './Pages/LandingPage/LandingPage';
import ContactUs from './Pages/ContactUs/ContactUs';
import HomePackages from './Pages/HomePackages/HomePackages';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutUs/>
      <HomePackages/>
      <ImageSlider/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;

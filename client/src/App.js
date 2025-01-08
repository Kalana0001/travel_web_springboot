import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import ImageSlider from './components/ImageSlider/ImageSlider';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutUs/>
      <ImageSlider/>
      <ContactUs/>
    </div>
  );
}

export default App;

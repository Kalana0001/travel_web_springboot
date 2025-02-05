import React, { useEffect, useState } from 'react';
import { IoIosStar } from "react-icons/io";
import axios from 'axios';

const Cards1 = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/images/getAll");
        setImages(response.data);
      } catch (err) {
        setError("Failed to load images. Please try again later.");
        console.error(err);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      {error && <div className="error">{error}</div>}
      <div className="trip__grid">
        {images.map((trip) => (
          <div className="trip__card" key={trip.id}>
            <img
              className="package1_img"
              src={`http://localhost:8080/api/images/image/${trip.fileName}`}
              alt="trip"
            />
            <div className="trip__details">
              <p>{trip.placeName}, {trip.country}</p>
              <div className="rating">
                <i className="ri-star-fill"><IoIosStar /></i> 4.2
              </div>
              <div className="booking__price">
                <div className="price">
                  <span>From</span> ${trip.price}
                </div>
                <button className="book__now">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards1;

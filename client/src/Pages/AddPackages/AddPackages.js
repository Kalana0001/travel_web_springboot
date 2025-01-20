import React, { useState } from "react";
import axios from "axios";
import './AddPackages.css'; // Optional: Styling for the popup modal

const AddPackages = ({ closeModal }) => {
  const [file, setFile] = useState(null);
  const [placeName, setPlaceName] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !placeName || !country || !price) {
      setError("Please fill in all fields and select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("placeName", placeName);
    formData.append("country", country);
    formData.append("price", price);

    try {
      const response = await axios.post("http://localhost:8080/api/images/addImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccessMessage(response.data);
      setError(null);
      setFile(null); // Clear the file input
      setPlaceName("");
      setCountry("");
      setPrice(""); // Clear the form fields
    } catch (err) {
      setError("Failed to upload image. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="popup-modal">
      <div className="popup-content">
        <button className="close-btn" onClick={closeModal}>
          X
        </button>
        <div className="upload-container">
          <h1 className="upload-title">Add New Package</h1>
          {error && <p className="upload-error">{error}</p>}
          {successMessage && <p className="upload-success">{successMessage}</p>}

          <form onSubmit={handleSubmit} encType="multipart/form-data" className="upload-form">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input"
            />
            <p className="file-instructions">The maximum size of an image is 10MB</p>

            <div className="form-group">
              <label htmlFor="placeName">Place Name:</label>
              <input
                type="text"
                id="placeName"
                value={placeName}
                onChange={(e) => setPlaceName(e.target.value)}
                className="text-input"
                placeholder="Enter the place name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="country">Country:</label>
              <input
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="text-input"
                placeholder="Enter the country"
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="text-input"
                placeholder="Enter the price"
              />
            </div>

            <button type="submit" className="upload-btn">Upload</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPackages;

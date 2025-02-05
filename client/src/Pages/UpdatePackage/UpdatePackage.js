import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UpdatePackage.css";

const UpdatePackage = ({ closeModal, imageId }) => {
  const [imageData, setImageData] = useState({});
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (imageId) {
      const fetchImageData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/images/get/${imageId}`);
          setImageData(response.data);
        } catch (err) {
          setError("Failed to fetch package data.");
          console.error(err);
        }
      };

      fetchImageData();
    }
  }, [imageId]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleChange = (e) => {
    setImageData({ ...imageData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }
    formData.append("placeName", imageData.placeName || "");
    formData.append("country", imageData.country || "");
    formData.append("price", imageData.price || "");

    try {
      const response = await axios.put(`http://localhost:8080/api/images/update/${imageId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccessMessage("Pckage updated successfully!");
      setError(null);
    } catch (err) {
      setError("Failed to update image. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="update-container">
      <h1 className="update-title">Update Image</h1>
      {error && <p className="update-error">{error}</p>}
      {successMessage && <p className="update-success">{successMessage}</p>}

      <form onSubmit={handleSubmit} encType="multipart/form-data" className="update-form">
        <div className="form-group">
          <label htmlFor="file">Image</label>
          <input type="file" accept="image/*" onChange={handleFileChange} className="file-input" />
        </div>
        <div className="form-group">
          <label htmlFor="placeName">Place Name</label>
          <input
            type="text"
            name="placeName"
            value={imageData.placeName || ""}
            onChange={handleChange}
            className="text-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            value={imageData.country || ""}
            onChange={handleChange}
            className="text-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            value={imageData.price || ""}
            onChange={handleChange}
            className="text-input"
          />
        </div>
        <button type="submit" className="update-btn">Update</button>
      </form>
    </div>
  );
};

export default UpdatePackage;

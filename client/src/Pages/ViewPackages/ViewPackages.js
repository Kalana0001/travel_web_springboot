import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ViewPackages.css";
import { useNavigate } from "react-router-dom";
import UpdatePackage from "../UpdatePackage/UpdatePackage";


const ViewPackages = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [selectedImageId, setSelectedImageId] = useState(null); // Store the ID of the selected image
  const navigate = useNavigate();

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

  const handleUpdate = (id) => {
    setSelectedImageId(id); // Set the selected image ID
    setIsModalOpen(true); // Open the modal
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this image?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/api/images/delete/${id}`);
        setImages(images.filter((image) => image.id !== id)); // Remove image from state
        alert("Image deleted successfully!");
      } catch (err) {
        alert("Failed to delete image.");
        console.error(err);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedImageId(null); // Reset the selected image ID
  };

  return (
    <div className="gallery-container">
      {error && <p className="gallery-error">{error}</p>}

      <table className="image-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Preview</th>
            <th>Place Name</th>
            <th>Country</th>
            <th>Price</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {images.map((image) => (
            <tr key={image.id}>
              <td>{image.id}</td>
              <td>
                <img
                  src={`http://localhost:8080/api/images/image/${image.fileName}`}
                  alt={image.fileName}
                  className="table-image"
                />
              </td>
              <td>{image.placeName}</td>
              <td>{image.country}</td>
              <td>${image.price}</td>
              <td>
                <button className="galleryupdate-btn" onClick={() => handleUpdate(image.id)}>
                  Update
                </button>
              </td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(image.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="popup-modal">
          <div className="popup-content">
            <button className="close-btn" onClick={closeModal}>
              X
            </button>
            <UpdatePackage closeModal={closeModal} imageId={selectedImageId} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewPackages;

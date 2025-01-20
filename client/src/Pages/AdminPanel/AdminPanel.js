import React, { useState, useEffect } from "react";
import "./AdminPanel.css";
import AdminNav from "../../components/AdminNav/AdminNav";
import AdminSideBar from "../../components/AdminSideBar/AdminSideBar";
import ViewPackages from "../ViewPackages/ViewPackages";
import AddPackages from "../AddPackages/AddPackages";

function AdminPanel() {
    const [isModalOpen, setIsModalOpen] = useState(false); 

      // Function to handle opening the popup
      const handleAddClick = () => {
        setIsModalOpen(true); // Open the modal
      };
    
      // Function to handle closing the popup
      const closeModal = () => {
        setIsModalOpen(false); // Close the modal
      };
  
  return (
    <div className="adminPanel">
      <AdminNav />
      <AdminSideBar />
      <section className="home-section">
        <div className="home-content">
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Order</div>
                <div className="number">40,876</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className="bx bx-cart-alt cart"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Sales</div>
                <div className="number">38,876</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className="bx bxs-cart-add cart two"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Profit</div>
                <div className="number">$12,876</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className="bx bx-cart cart three"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Return</div>
                <div className="number">11,086</div>
                <div className="indicator">
                  <i className="bx bx-down-arrow-alt down"></i>
                  <span className="text">Down From Today</span>
                </div>
              </div>
              <i className="bx bxs-cart-download cart four"></i>
            </div>
          </div>

          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Recent Sales</div>

                <button className="add-btn" onClick={handleAddClick}>
                  Add Packages
                </button>

              <div className="sales-details">
                <ViewPackages />
              </div>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && <AddPackages closeModal={closeModal} />}
    </div>
  );
}

export default AdminPanel;

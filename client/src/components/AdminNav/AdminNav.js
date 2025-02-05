import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (confirmLogout) {
      const token = localStorage.getItem('authToken');
      console.log("Current Auth Token:", token);
      localStorage.removeItem('authToken');
      navigate('/adminlogin');
    }
  };

  return (
    <div>
      <nav className="top-navbar">
        <div className="nav-left">
          <i className="bx bx-menu"></i>
          <span className="nav-title">Admin Dashboard</span>
        </div>
        <div className="nav-right">
          <button className="delete-btn" onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </div>
  );
}

export default AdminNav;

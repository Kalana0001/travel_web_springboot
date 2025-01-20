import React from 'react';

const AdminNav = () => {
  return (
    <div>
      <nav className="top-navbar">
        <div className="nav-left">
          <i className="bx bx-menu"></i>
          <span className="nav-title">Admin Dashboard</span>
        </div>
        <div className="nav-right">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
        </div>
      </nav>
    </div>
  );
}

export default AdminNav;

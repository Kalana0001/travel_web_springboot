import React from 'react';
import { MdSpaceDashboard } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { FaClipboardUser } from "react-icons/fa6";

const AdminSideBar = () => {
  return (
    <div>
      <div className="sidebar">
        {/* <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name"></span>
        </div> */}
        <ul className="nav-links">
          <li>
            <a href="#" className="active">
              <i className="bx bx-grid-alt"><MdSpaceDashboard /></i>
              <span className="links_name">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-list-ul"><FaClipboardList /></i>
              <span className="links_name">Packages list</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-pie-chart-alt-2"><FaClipboardUser /></i>
              <span className="links_name">User List</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminSideBar;

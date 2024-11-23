import React, { useState } from "react";
import { Link } from "react-router-dom";

import { RiDashboardHorizontalFill } from "react-icons/ri";
import { IoSettingsSharp, IoLogOut } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import Logo from "../assets/logo.png";

import "../styes/Sidbar01.css";

const Sidbar01 = () => {
  // State to track active menu item
  const [activeItem, setActiveItem] = useState("dashboard");

  // Function to handle item click and set active state
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="Sidbar">
      <div className="menu">
        <div className="avatar pt-6 justify-center">
          <div className="w-24 rounded">
            <img src={Logo} alt="Edge Frontier" />
          </div>
        </div>

        <div className="menu--list">
          <Link to="Dashboard/">
            <a
              href="#"
              className={`item ${activeItem === "dashboard" ? "active" : ""}`}
              onClick={() => handleItemClick("dashboard")}
            >
              <RiDashboardHorizontalFill className="icon" />
              Dashboard
            </a>
          </Link>
          <Link to="Statistic">
          <a
            href="#"
            className={`item ${activeItem === "statistic" ? "active" : ""}`}
            onClick={() => handleItemClick("statistic")}
          >
            <SlGraph className="icon" />
              Statistic
          </a>
          </Link>
          <Link to="Setting">
          <a
            href="#"
            className={`item ${activeItem === "settings" ? "active" : ""}`}
            onClick={() => handleItemClick("settings")}
          >
            <IoSettingsSharp className="icon" />
            Setting
          </a>
          </Link>
        </div>
      </div>
      <div className="menu-logout">
        <Link to="LogOut">
        <a
          href="#"
          className={`item ${activeItem === "logout" ? "active" : ""}`}
          onClick={() => handleItemClick("logout")}
        >
          <IoLogOut className="icon" />
          LogOut
        </a>
        </Link>
      </div>
    </div>
  );
};

export default Sidbar01;

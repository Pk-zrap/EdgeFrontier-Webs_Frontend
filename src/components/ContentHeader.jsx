import React from "react";
import { IoMdNotifications } from "react-icons/io";
import "../styles/ContentHeader.css";

const ContentHeader = () => {
  return (
    <div className="content--header">
      <div className="header--activity">
        <div className="search-box">
          <input type="text" placeholder="--/" />
        </div>
        <div className="styled-wrapper">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider" />
          </label>
        </div>

        <div className="notify">
          <IoMdNotifications className="icon" />
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;

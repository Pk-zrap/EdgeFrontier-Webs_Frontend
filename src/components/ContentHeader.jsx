import React from "react";
import { IoMdNotifications } from "react-icons/io";
import "../styles/ContentHeader.css";

const ContentHeader = () => {
  return (
    <div className="content--header">
      <div className="header--activity">
        <div className="search-box">
          <input type="text" placeholder="Search anything here..." />
        </div>

        <div className="notify">
          <IoMdNotifications className="icon" />
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;

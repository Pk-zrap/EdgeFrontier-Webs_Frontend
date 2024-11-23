import React from "react";
import { IoMdNotifications } from "react-icons/io";
import "../styes/ContentHeader.css";

const ContentHeader = () => {
  return (
    <div className="content--header">
      <div className="header--activity">
          <div className="search-box">
            <input type="text" placeholder="Search anything here..." />
          </div>
          <div className="swap">
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-[sky-400] bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
            />
          </div>
          <div className="notify">
            <IoMdNotifications className="icon" />
          </div>
      </div>
    </div>
  );
};

export default ContentHeader;

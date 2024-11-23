import React, { useState } from "react";
import "../styes/DeviceL.css";

const Device = [
  { ID: 4321, Device: "CO2", Date: "10/11/2024", Degree: "25", Status: "ON" },
  { ID: 1234, Device: "VOC", Date: "10/11/2024", Degree: "25", Status: "ON" },
  { ID: 4571, Device: "RADON", Date: "10/11/2024", Degree: "30", Status: "ON" },
  { ID: 8522, Device: "PRESSURE", Date: "10/11/2024", Degree: "15", Status: "ON" },
  { ID: 5112, Device: "HUMIDITY", Date: "10/11/2024", Degree: "40", Status: "ON" },
  { ID: 7212, Device: "TEMPERATURE", Date: "10/11/2024", Degree: "30", Status: "ON" },
];

const DeviceL = () => {
  const [selectedDevices, setSelectedDevices] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedDevices((prev) => [...prev, value]);
    } else {
      setSelectedDevices((prev) => prev.filter((device) => device !== value));
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const filteredDevices =
    selectedDevices.length === 0
      ? Device
      : Device.filter((device) => selectedDevices.includes(device.Device));

  const uniqueDevices = [...new Set(Device.map((device) => device.Device))];

  return (
    <div className="device-list">
      <div className="list-header">
        <div className="list-header-title">
          <h2>Device List</h2>
        </div>
        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-button">
            Filter
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              {uniqueDevices.map((device, index) => (
                <div className="checkbox-item" key={index}>
                  <input
                    type="checkbox"
                    value={device}
                    onChange={handleCheckboxChange}
                  />
                  <label>{device}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <hr />
      <div className="list-container">
        <div className="list-header-row">
          <span>ID</span>
          <span>Device</span>
          <span>Date</span>
          <span>Degree</span>
          <span>Status</span>
        </div>
        {filteredDevices.map((device, index) => (
          <div className="device-item" key={index}>
            <span>{device.ID}</span>
            <span>{device.Device}</span>
            <span>{device.Date}</span>
            <span>{device.Degree}</span>
            <span className={`Status ${device.Status}`}>{device.Status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceL;

import React, { useState } from "react";
import { LuSettings2 } from "react-icons/lu";

const InvoiceStatistic = () => {
  const data = [
    { label: "CO2", value: 718, color: "#ef4444" },
    { label: "VOC", value: 531, color: "#3b82f6" },
    { label: "RADON", value: 868, color: "#10b981" },
    { label: "PRESSURE", value: 344, color: "#fbbf24" },
    { label: "HUM", value: 1145, color: "#a855f7" },
    { label: "TEMP", value: 1145, color: "#a855f7" },
  ];

  // Total value of all data points
  const total = data.reduce((sum, item) => sum + item.value, 0);

  // State for tracking visibility of each item
  const [visibleItems, setVisibleItems] = useState({
    CO2: true,
    VOC: true,
    RADON: true,
    PRESSURE: true,
    HUM: true,
    TEMP: true,
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle visibility of items in the dropdown menu
  const handleToggleItem = (label) => {
    setVisibleItems((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Calculate the gradient and percentages for each visible item
  let cumulativeValue = 0;
  const gradientSegments = data
    .filter((item) => visibleItems[item.label]) // Only include visible items
    .map((item) => {
      const startPercentage = (cumulativeValue / total) * 100;
      cumulativeValue += item.value;
      const endPercentage = (cumulativeValue / total) * 100;
      return `${item.color} ${startPercentage}% ${endPercentage}%`;
    })
    .join(", ");

  // Pie chart and percentage calculation
  const visibleData = data.filter((item) => visibleItems[item.label]);

  // Calculate percentage for center display
  const visibleTotal = visibleData.reduce((sum, item) => sum + item.value, 0);
  const piePercentage = total > 0 ? Math.round((visibleTotal / total) * 100) : 0;

  return (
    <main
      className="flex flex-col items-center justify-start bg-gray-200 p-5 rounded-lg shadow-xl relative mt-6"
      style={{ width: "590px", height: "335px" }}
    >
      {/* Title */}
      <h2 className="text-2xl font-extrabold text-[#707178] mb-4">
        Invoice Statistic
      </h2>

      <div className="flex items-center">
        {/* Pie Chart */}
        <div
          className="relative w-52 h-52 rounded-full"
          style={{
            background: total > 0 ? `conic-gradient(${gradientSegments})` : "gray", // Fallback to gray if total is 0
          }}
        >
          <div className="absolute inset-4 bg-gray-100 rounded-full"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <span className="text-lg font-bold text-gray-700">
              {piePercentage}%
            </span>
          </div>
        </div>

        {/* Settings Button */}
        <button
          onClick={toggleDropdown}
          className="absolute top-4 right-4 p-2 text-white bg-gray-700 rounded-full flex items-center justify-center"
        >
          <LuSettings2 size={20} />
        </button>

        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="absolute top-12 right-4 bg-white shadow-lg rounded-lg w-48 p-4 text-sm text-gray-700">
            {data.map((item) => (
              <div key={item.label} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={visibleItems[item.label]}
                  onChange={() => handleToggleItem(item.label)}
                  className="mr-2"
                />
                <label>{item.label}</label>
              </div>
            ))}
          </div>
        )}

        {/* Legend */}
        <ul className="mt-0 ml-6 bg-white shadow-lg rounded-lg w-64 p-4 text-sm text-gray-700">
          {visibleData.map((item) => (
            <li
              key={item.label}
              className="flex justify-between items-center mb-2 last:mb-0"
            >
              {/* Circle to represent the color */}
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span>{item.label}</span>
              <span>
                {item.value} ({Math.round((item.value / total) * 100)}%)
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default InvoiceStatistic;

import React, { useState } from "react";
import CO from "../assets/co2.png";
import VOC from "../assets/compound.png";
import RODON from "../assets/radon.png";

function Card() {
  // สร้าง state สำหรับแต่ละบล็อก
  const [block5Active, setBlock5Active] = useState(true);
  const [block6Active, setBlock6Active] = useState(true);
  const [block1Active, setBlock1Active] = useState(true);
  const [block2Active, setBlock2Active] = useState(true);
  const [block3Active, setBlock3Active] = useState(true);
  const [block4Active, setBlock4Active] = useState(true);

  return (
    <div className="w-[750px] flex flex-wrap justify-center gap-6 mt-3">
      {/* Row 1 */}
      <div className="flex gap-4">
        {/* Block 5 */}
        <div className="bg-gray-200 rounded-[30px] p-4 w-[375px] h-[250px] shadow-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#020617] ml-5">BLOCK 5</h2>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={block5Active}
                onChange={() => setBlock5Active(!block5Active)}
                className="toggle theme-controller [--tglbg:theme(colors.sky.250)] checked:border-blue-800 checked:bg-blue-300"
              />
            </label>
          </div>
          <div
            className={`flex items-center mt-2 ${
              block5Active ? "opacity-100" : "opacity-50"
            }`}
          >
            <img src={CO} alt="Block 5" className="ml-6 w-[56px] h-[54px]" />
            <h2 className="text-5xl font-bold ml-14 text-[#3ABEFF]">
              {block5Active ? 50 : 0}
            </h2>
          </div>
        </div>

        {/* Block 6 */}
        <div className="bg-gray-200 rounded-[30px] p-4 w-[375px] h-[250px] shadow-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#020617] ml-5">BLOCK 6</h2>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={block6Active}
                onChange={() => setBlock6Active(!block6Active)}
                className="toggle theme-controller [--tglbg:theme(colors.sky.250)] checked:border-blue-800 checked:bg-blue-300"
              />
            </label>
          </div>
          <div
            className={`flex items-center mt-2 ${
              block6Active ? "opacity-100" : "opacity-50"
            }`}
          >
            <img src={VOC} alt="Block 6" className="ml-6 w-[56px] h-[54px]" />
            <h2 className="text-5xl font-bold ml-14 text-[#0F5DC3]">
              {block6Active ? 60 : 0}
            </h2>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex gap-6">
        {/* Block 1 */}
        <div className="bg-gray-200 rounded-[30px] p-4 w-[240px] h-[145px] shadow-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#020617] ml-5">CO2</h2>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={block1Active}
                onChange={() => setBlock1Active(!block1Active)}
                className="toggle theme-controller [--tglbg:theme(colors.sky.250)] checked:border-blue-800 checked:bg-blue-300"
              />
            </label>
          </div>
          <div
            className={`flex items-center mt-2 ${
              block1Active ? "opacity-100" : "opacity-50"
            }`}
          >
            <img src={CO} alt="CO2" className="ml-6 w-[56px] h-[54px]" />
            <h2 className="text-5xl font-bold ml-14 text-[#FF9D00]">
              {block1Active ? 30 : 0}
            </h2>
          </div>
        </div>

        {/* Block 2 */}
        <div className="bg-gray-200 rounded-[30px] p-4 w-[240px] h-[145px] shadow-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#020617] ml-5">VOC</h2>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={block2Active}
                onChange={() => setBlock2Active(!block2Active)}
                className="toggle theme-controller [--tglbg:theme(colors.sky.250)] checked:border-blue-800 checked:bg-blue-300"
              />
            </label>
          </div>
          <div
            className={`flex items-center mt-2 ${
              block2Active ? "opacity-100" : "opacity-50"
            }`}
          >
            <img src={VOC} alt="VOC" className="ml-6 w-[56px] h-[54px]" />
            <h2 className="text-5xl font-bold ml-14 text-[#43D2A7]">
              {block2Active ? 30 : 0}
            </h2>
          </div>
        </div>

        {/* Block 3 */}
        <div className="bg-gray-200 rounded-[30px] p-4 w-[240px] h-[145px] shadow-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#020617] ml-5">RODON</h2>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={block3Active}
                onChange={() => setBlock3Active(!block3Active)}
                className="toggle theme-controller [--tglbg:theme(colors.sky.250)] checked:border-blue-800 checked:bg-blue-300"
              />
            </label>
          </div>
          <div
            className={`flex items-center mt-2 ${
              block3Active ? "opacity-100" : "opacity-50"
            }`}
          >
            <img src={RODON} alt="RODON" className="ml-7 w-[50px] h-[50px]" />
            <h2 className="text-5xl font-bold ml-14 text-[#67A4F4]">
              {block3Active ? 30 : 0}
            </h2>
          </div>
        </div>
      </div>

      {/* Block 4 */}
      <div className="absolute top-50 right-[270px] bg-gray-200 rounded-[30px] p-6 w-[400px] h-[419px] shadow-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#020617]">PRESSURE</h2>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={block4Active}
              onChange={() => setBlock4Active(!block4Active)}
              className="toggle theme-controller [--tglbg:theme(colors.sky.250)] checked:border-blue-800 checked:bg-blue-300"
            />
          </label>
        </div>
        <div
          className={`flex flex-col items-center mt-8 ${
            block4Active ? "opacity-100" : "opacity-50"
          }`}
        >
          <img
            src={RODON}
            alt="PRESSURE"
            className="w-[120px] h-[120px] mb-4"
          />
          <h2 className="text-6xl font-bold  text-[#DB2777]">{block4Active ? 30 : 0}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;

"use client";
import React, { useState } from "react";
import { FaCrown, FaBolt, FaGift, FaPiggyBank, FaCoins } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { PiWarningCircleLight } from "react-icons/pi";
import { HiBolt } from "react-icons/hi2";
import { BsArrowUpShort } from "react-icons/bs";
import { RiCheckDoubleFill } from "react-icons/ri";
import { IoChatbubbleOutline } from "react-icons/io5";

function Tier1() {
  const [tiers, setTiers] = useState([]);
  const [formData, setFormData] = useState([{ tierName: "", tierPoints: "" }]);
  const [progressWidth, setProgressWidth] = useState(0);
  const [maxTierPoints, setMaxTierPoints] = useState(0);
  const [userPosition, setUserPosition] = useState(0);

  // Form input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTier = {
      name: formData.tierName,
      points: parseInt(formData.tierPoints),
    };
    setTiers((prevTiers) => [...prevTiers, newTier]);
    setFormData({ tierName: "", tierPoints: "" });
    setUserPosition(parseInt(formData.tierPoints)); // Update userPosition
    updateMaxTierPoints();
    updateProgressWidth();
  };

  const calculateTotalPoints = () => {
    return tiers.reduce((total, tier) => total + tier.points, 0);
  };

  // Calculate progress
  const calculateProgress = () => {
    const maxPoints = Math.max(userPosition, maxTierPoints);
    let progress;
    if (userPosition >= maxTierPoints) {
      progress = 100;
    } else {
      progress = (userPosition / maxPoints) * 1000;
    }
    return progress;
  };

  const updateProgressWidth = () => {
    const progress = calculateProgress();
    setProgressWidth(progress);
  };

  // Update maxTierPoints
  const updateMaxTierPoints = () => {
    const maxPoints = Math.max(...tiers.map((tier) => tier.points));
    setMaxTierPoints(maxPoints);
    console.log('max', maxPoints)
  };
  console.log('usp', userPosition);
  const sortedTiers = tiers.slice().sort((a, b) => a.points - b.points);

  const totalPoints = sortedTiers
    .filter((tier, index) => index !== 1) // Exclude the second tier
    .reduce((total, tier) => total + tier.points, 0);
  const secondTierWidth = 100;
  const firstTierWidth = 0;
  const intermediateTiersWidth =
    totalPoints > 0
      ? (100 - secondTierWidth - firstTierWidth) / totalPoints
      : 0;
      const numTiers = tiers.length;
  return (
    <>
      <div className="flex flex-wrap justify-center gap-12">
        <section className="mt-10 w-1/2">
          <div className="container flex justify-center gap-5 bg-[#F0F0F0] py-10">
            <form onSubmit={handleFormSubmit}>
              <div className="grid gap-4">
                <label className="text-base font-medium">Tiers</label>
                <input
                  type="text"
                  name="tierName"
                  placeholder="Tiers Name"
                  className="border-2 p-2"
                  value={formData.tierName}
                  onChange={handleInputChange}
                />
                <label className="text-base font-medium">Tier Points</label>
                <input
                  type="number"
                  name="tierPoints"
                  placeholder="Tiers Point"
                  className="border-2 p-2"
                  value={formData.tierPoints}
                  onChange={handleInputChange}
                />
                <button className="bg-[#0055ff] text-white rounded-md py-2">
                  Add Tiers{" "}
                </button>
              </div>
            </form>
            <div className="grid gap-4 h-5">
              <label className="text-base font-medium">You Are Here</label>
              <input
                type="number"
                name="tierPoints"
                placeholder="You Are Here"
                className="border-2 p-2"
                value={userPosition}
                onChange={(e) => {
                  setUserPosition(parseInt(e.target.value));
                  updateProgressWidth(); // Update progress width when user position changes
                }}
              />
            </div>
          </div>
        </section>
        <section className="grid place-content-center">
          <div className="container items-center mt-10">
            <div className="bg-black w-[475px] rounded-t-3xl p-4">
              <div className="flex justify-between">
                <h3 className="text-xl leading-6 text-white font-semibold">
                  <span className="font-thin">Welcome</span> Manushri
                </h3>
                <span className="text-white font-semibold text-xl">
                  <CgClose />
                </span>
              </div>
              <p className="text-blue-700 flex pt-3">
                {" "}
                <span className="p-1">
                  {" "}
                  <FaCrown />{" "}
                </span>{" "}
                Loyalty Program Name
              </p>
              <h2 className="text-white text-3xl uppercase ">Tier 1 Member</h2>
              <p className="text-sm text-white opacity-65 text-normal pt-2">
                Member since Octomber, 2023
              </p>

              <div className="container flex justify-between pt-4">
                <div className="text-white">
                  <button className="bg-gray-400 rounded-2xl w-20 h-9 bg-opacity-10 teaxt-center flex items-center text-center p-2">
                    <span className="text-blue-700 p-1">
                      {" "}
                      <FaBolt />{" "}
                    </span>
                    2024
                  </button>
                  <p className="text-xs tetx-normal text-center pt-1 opacity-95">
                    Zen Coins
                  </p>
                </div>

                <div className="text-white">
                  <button className="bg-gray-400 rounded-2xl min-w-20 h-9 bg-opacity-10 flex items-center justify-center p-2">
                    <span className="text-blue-700 p-1">
                      {" "}
                      <FaGift />{" "}
                    </span>{" "}
                    20
                  </button>
                  <p className="text-xs tetx-normal text-center pt-1 opacity-95">
                    Available Rewards
                  </p>
                </div>

                <div className="text-white">
                  <button className="bg-gray-400 rounded-2xl w-20 h-9 bg-opacity-10 teaxt-center flex items-center text-center p-2">
                    <span className="text-blue-700 p-1">
                      {" "}
                      <FaPiggyBank />{" "}
                    </span>{" "}
                    $234
                  </button>
                  <p className="text-xs tetx-normal text-center pt-1 opacity-95">
                    Your Savings
                  </p>
                </div>
              </div>

              <div
                className="w-24 h-10 bg-white rounded-sm flex mt-2.5 justify-center"
                style={{ marginLeft: `${progressWidth * 10}px` }}
              >
                <div className="text-xs font-medium pt-2.5">
                  You are here
                  <div className="bg-white origin-center rotate-45 rounded-br-sm w-3 h-3 mt-2"></div>
                </div>
              </div>

              <div className="bg-neutral-800 min-w-80 h-2 rounded mt-3 items-center justify-between flex">
                <div className="bg-blue-600 w-6 h-6 rounded-full p-2">
                  <div
                    className="bg-blue-600 h-2 rounded flex justify-between"
                    style={{
                      width:`${(userPosition / maxTierPoints)*100}%`
                    }}
                  ></div>
                  {tiers.map((tier, index) => (
                    <div key={index}>
                      {index !== numTiers - 1 && (
                        <div className="bg-white w-2 h-2 rounded -mt-2 absolute left-0"></div>
                      )}
                      {index !== 0 && (
                        <div className="bg-white w-2 h-2 rounded absolute right-0"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 justify-between pt-3">
                {sortedTiers.map((tier, index) => {
                  let position;
                  if (index === 0) {
                    position = firstTierWidth;
                  } else if (index === 1) {
                    position = secondTierWidth;
                  } else {
                    position =
                      secondTierWidth + tier.points * intermediateTiersWidth;
                  }
                  console.log(`position: ${position}`);
                  return (
                    <div
                      key={index}
                      className="text-white"
                      style={{ left: `${position}%` }}
                    >
                      <p className="text-white text-sm font-semibold grid">
                        {tier.name}
                        <span className="text-sm font-normal opacity-50">
                          ₹{tier.points}
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="container bg-blue-600 w-[475px] h-[90px] inline-block p-4">
              <p className="text-white flex text-sm font-medium">
                {" "}
                <span className="text-xl p-1">
                  {" "}
                  <PiWarningCircleLight />{" "}
                </span>{" "}
                Shop for $300 before 22nd Apr, 2024 to upgrade your benefits.
                Shop Now!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Tier1;

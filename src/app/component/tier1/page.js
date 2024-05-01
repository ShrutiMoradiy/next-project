"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaCrown, FaBolt, FaGift, FaPiggyBank, FaCoins } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { PiWarningCircleLight } from "react-icons/pi";
import { HiBolt } from "react-icons/hi2";
import { BsArrowUpShort } from "react-icons/bs";
import { RiCheckDoubleFill } from "react-icons/ri";
import { IoChatbubbleOutline } from "react-icons/io5";

function Tier1() {
  const [tiers, setTiers] = useState([
    // { tierName: "tier1", tierPoints: 0 },
    // { tierName: "tier2", tierPoints: 500 },
    // { tierName: "tier3", tierPoints: 1000 },
    // { tierName: "tier4", tierPoints: 2500 },
    // { tierName: "tier5", tierPoints: 4000 },
    // { tierName: "tier6", tierPoints: 6000 },
    // { tierName: "tier6", tierPoints: 7000 },
    // { tierName: "tier6", tierPoints: 8000 },
    // { tierName: "tier6", tierPoints: 9000 },
    // { tierName: "tier6", tierPoints: 10000 },
  ]);
  const [formData, setFormData] = useState([{ tierName: "", tierPoints: "" }]);
  const [progressWidth, setProgressWidth] = useState(0);
  const [maxTierPoints, setMaxTierPoints] = useState(0);
  const [userPosition, setUserPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && tiers.length > 0) {
      const containerWidth = containerRef.current.clientWidth;
      const tiersWidth = containerRef.current.scrollWidth;

      // Calculate the scroll position based on user's position
      let scrollPosition =
        (userPosition / tiers[tiers.length - 1].points) *
        (tiersWidth - containerWidth);

      // Ensure scroll position is within bounds
      scrollPosition = Math.min(
        Math.max(scrollPosition, 0),
        tiersWidth - containerWidth
      );

      // Scroll the container to the calculated position
      containerRef.current.scrollLeft = scrollPosition;
    }
  }, [userPosition, tiers]);

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
    // setUserPosition(parseInt(formData.tierPoints)); // Update userPosition
    updateMaxTierPoints();
    updateProgressWidth();
  };

  console.log(formData);

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
    const maxTierPoints = formData.tierPoints;
    // const maxTierPoints = tiers[tiers.length-1].tierPoints;
    setMaxTierPoints(maxTierPoints);
  };

  const minTierPoints = tiers.length > 0 ? tiers[0].points : 0;
  const maxTierPoints1 = tiers.length > 0 ? tiers[tiers.length - 1].points : 0;

  const positionRange = maxTierPoints1 - minTierPoints;
  console.log("progressWidth", progressWidth);

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
                  required
                />
                <label className="text-base font-medium">Tier Points</label>
                <input
                  type="number"
                  name="tierPoints"
                  placeholder="Tiers Point"
                  className="border-2 p-2"
                  value={formData.tierPoints}
                  onChange={handleInputChange}
                  required
                />
                <button className="bg-[#0055ff] text-white rounded-md py-2">
                  Add Tiers
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
                required
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
                <span className="p-1">
                  <FaCrown />
                </span>
                Loyalty Program Name
              </p>
              <h2 className="text-white text-3xl uppercase ">Tier 1 Member</h2>
              <p className="text-sm text-white opacity-65 text-normal pt-2">
                Member since Octomber, 2023
              </p>

              <div className="container flex justify-between py-4">
                <div className="text-white">
                  <button className="bg-gray-400 rounded-2xl w-20 h-9 bg-opacity-10 teaxt-center flex items-center text-center p-2">
                    <span className="text-blue-700 p-1">
                      <FaBolt />
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
                      <FaGift />
                    </span>
                    20
                  </button>
                  <p className="text-xs tetx-normal text-center pt-1 opacity-95">
                    Available Rewards
                  </p>
                </div>

                <div className="text-white">
                  <button className="bg-gray-400 rounded-2xl w-20 h-9 bg-opacity-10 teaxt-center flex items-center text-center p-2">
                    <span className="text-blue-700 p-1">
                      <FaPiggyBank />
                    </span>
                    $234
                  </button>
                  <p className="text-xs tetx-normal text-center pt-1 opacity-95">
                    Your Savings
                  </p>
                </div>
              </div>

              <div
                className={
                  userPosition &&
                  userPosition > minTierPoints &&
                  tiers.length > 4
                    ? "-ml-[16px] w-[107%]"
                    : ""
                }
              >
                <div
                  className={`w-full ${
                    tiers.length > 4 ? "overflow-x-auto" : ""
                  }`}
                  ref={containerRef}
                >
                  {userPosition !== 0 && (
                    <div
                      className="w-24 h-10 bg-white rounded-sm flex mt-2.5 justify-center"
                      style={{
                        marginLeft:
                          userPosition === 0 || tiers.length === 1
                            ? "0%"
                            : userPosition < minTierPoints
                            ? "0%"
                            : userPosition / maxTierPoints >= 0.8 &&
                              tiers.length < 5
                            ? "80%"
                            : userPosition > maxTierPoints
                            ? "100%"
                            : userPosition >= maxTierPoints ||
                              (tiers.length >= 4 && userPosition === tiers)
                            ? "110%"
                            : `${
                                ((userPosition - minTierPoints) /
                                  positionRange) *
                                100
                              }%`,
                      }}
                    >
                      <div className="text-xs font-medium pt-2.5">
                        You are here
                        <div
                          className="bg-white origin-center rotate-45 rounded-br-sm w-3 h-3 mt-2"
                          style={{
                            marginLeft:
                              userPosition === 0 || tiers.length === 1
                                ? "0%"
                                : userPosition > maxTierPoints
                                ? "90%"
                                : userPosition / maxTierPoints >= 0.8
                                ? "85%"
                                : `${
                                    ((userPosition - minTierPoints) /
                                      positionRange) *
                                    100
                                  }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <div
                    className={`bg-neutral-800 w-auto h-2 rounded mt-4 items-center flex relative ${
                      tiers.length > 4
                        ? "min-w-[130%]"
                        : tiers.length > 6
                        ? "min-w-[150%]"
                        : tiers.length > 10
                        ? "min-w-[200%]"
                        : "min-w-auto"
                    }`}
                  >
                    <div
                      className="bg-blue-600 h-2 rounded flex justify-between"
                      style={{
                        width:
                          userPosition === 0 || tiers.length === 1
                            ? "0%"
                            : userPosition >= maxTierPoints
                            ? "100%"
                            : `${
                                ((userPosition - minTierPoints) /
                                  positionRange) *
                                100
                              }%`,
                      }}
                    ></div>

                    {userPosition !== 0 &&
                      tiers.map((tier, index) => {
                        const isFirstTier = index === 0;
                        const isLastTier = index === tiers.length - 1;
                        const prevLeftPosition =
                          index > 0
                            ? ((tiers[index - 1].points - minTierPoints) /
                                positionRange) *
                              100
                            : 0;
                        let leftPosition =
                          isFirstTier &&
                          tiers.length > 4 ||
                          userPosition === isFirstTier
                            ? 2
                            : isFirstTier && tiers.length > 4
                            ? 3.2
                            : isFirstTier
                            ? 0
                            : isLastTier
                            ? 100
                            : `${
                                ((tier.points - minTierPoints) /
                                  positionRange) *
                                100
                              }`;
                        if (leftPosition - prevLeftPosition < 10 && index > 0) {
                          leftPosition = prevLeftPosition + 10;
                        }

                        if (
                          userPosition > tier.points ||
                          userPosition === tier.points
                        ) {
                          return (
                            <div
                              key={tier.id}
                              className="bg-blue-600 w-6 h-6 rounded-full p-2 mt-6"
                              style={{
                                position: "absolute",
                                left: leftPosition + "%",
                                transform: "translate(-50%, -50%)",
                              }}
                            ></div>
                          );
                        }
                      })}

                    {tiers.map((tier, index) => {
                      const isFirstTier = index === 0;
                      const isLastTier = index === tiers.length - 1;

                      const leftPosition =
                        isFirstTier &&
                        tiers.length > 4 ||
                        userPosition === isFirstTier
                          ? 2
                          : isFirstTier && tiers.length > 4
                          ? 1
                          : isFirstTier
                          ? 0
                          : isLastTier
                          ? 100
                          : `${
                              ((tier.points - minTierPoints) / positionRange) *
                              100
                            }`;

                      return (
                        <div
                          key={index}
                          className="bg-white w-2 h-2 rounded mt-2"
                          style={{
                            position: "absolute",
                            left: leftPosition + "%",
                            transform: "translate(-50%, -50%)",
                          }}
                        ></div>
                      );
                    })}
                  </div>
                  <div
                    className={`flex gap-2 pt-3 mb-10 relative ${
                      tiers.length > 4
                        ? "min-w-[130%]"
                        : tiers.length > 6
                        ? "min-w-[150%]"
                        : tiers.length > 10
                        ? "min-w-[200%]"
                        : "min-w-auto"
                    }`}
                  >
                    {tiers.map((tier, index) => {
                      const isFirstTier = index === 0;
                      const isLastTier = index === tiers.length - 1;
                      const minTierPoints = tiers[0].points;
                      const maxTierPoints = tiers[tiers.length - 1].points;
                      const positionRange = maxTierPoints - minTierPoints;

                      const prevLeftPosition =
                        index > 0
                          ? ((tiers[index - 1].points - minTierPoints) /
                              positionRange) *
                            100
                          : 0;

                      let leftPosition =
                        index > 3 && isFirstTier
                          ? 1
                          : isFirstTier
                          ? 0
                          : isLastTier && index < 6
                          ? 92
                          : isLastTier
                          ? 96
                          : `${
                              ((tier.points - minTierPoints) / positionRange) *
                              100
                            }`;

                      if (
                        leftPosition - prevLeftPosition <= 10 &&
                        tiers.length > 0 &&
                        tiers.length < isLastTier
                      ) {
                        leftPosition = prevLeftPosition + 10;
                      }
                      console.log("leftPosition", leftPosition);
                      return (
                        <div
                          key={index}
                          className="text-white m-4"
                          style={{
                            position: "absolute",
                            left: leftPosition + "%",
                            transform: "translate(-50%, -50%)",
                            textAlign:
                              index === 0
                                ? "left"
                                : index === tiers.length - 1
                                ? "end"
                                : "",
                          }}
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
              </div>
            </div>

            <div className="container bg-blue-600 w-[475px] h-[90px] inline-block p-4">
              <p className="text-white flex text-sm font-medium">
                <span className="text-xl p-1">
                  <PiWarningCircleLight />
                </span>
                Shop for $300 before 22nd Apr, 2024 to upgrade your benefits.
                Shop Now!
              </p>
            </div>

            <div className="container">
              <div className="bg-[#F0F0F0] w-[475px] h-auto p-[35px]">
                <div className="bg-white shadow rounded-xl p-3">
                  <h4 className="text-xl font-medium">
                    Get $5 by inviting your friends
                  </h4>
                  <p className="text-base font-normal opacity-55 pt-1">
                    Signup to get referral link
                  </p>

                  <div className="flex justify-between pt-3">
                    <input
                      type="text"
                      className="w-[267px] h-[45px] border border-slate-100 rounded p-2 placeholder:text-base font-normal opacity-55"
                      placeholder="e.g. 975884823"
                    ></input>
                    <button
                      type="button"
                      className="bg-blue-600 text-white w-[88px] h-[45px] rounded"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>

                <div className="bg-white shadow rounded-xl p-3 mt-3">
                  <h4 className="text-xl font-medium">How it works?</h4>
                  <p className="text-sm font-normal opacity-65 mt-1">
                    Earn ZenCoins with every purchase.
                  </p>
                  <p className="text-sm font-normal opacity-65 mt-1">
                    You can get up to 3 Zen coins for every $100 spent
                  </p>

                  <div className="flex justify-between">
                    <div className="w-24 h-10 bg-pink-600 rounded-sm flex mt-[35px] justify-center">
                      <div className="text-xs text-white font-medium pt-2.5">
                        Start here
                        <div className="bg-pink-600 origin-center rotate-45 rounded-br-sm w-3 h-3 mt-2"></div>
                      </div>
                    </div>

                    <div className="float-end mr-1.5 mt-8 flex-end">
                      <span className="text-yellow-400 text-6xl">
                        <FaCrown />
                      </span>
                    </div>
                  </div>

                  <div className="bg-blue-700 w-[335px] h-2 rounded items-center justify-between flex">
                    <div className="bg-yellow-400 text-white w-6 h-6 rounded-full p-1 flex justify-center">
                      <HiBolt />
                    </div>
                    <div className="flex justify-center -space-x-10">
                      <div className="bg-yellow-400 text-white w-6 h-6 rounded-full p-1 mix-blend-normal">
                        <HiBolt />
                      </div>
                      <div className="bg-yellow-400 text-white w-6 h-6 rounded-full p-1 mix-blend-normal">
                        <HiBolt />
                      </div>
                    </div>
                    <div className="flex justify-center -space-x-10">
                      <div className="bg-yellow-400 text-white w-6 h-6 rounded-full p-1 flex justify-center mix-blend-normal">
                        <HiBolt />
                      </div>
                      <div className="bg-yellow-400 text-white w-6 h-6 rounded-full p-1 flex justify-center mix-blend-normal">
                        <HiBolt />
                      </div>
                      <div className="bg-yellow-400 text-white w-6 h-6 rounded-full p-1 flex justify-center mix-blend-normal">
                        <HiBolt />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-3">
                    <p className="text-slate-950 text-sm font-semibold text-left grid">
                      Tier 1
                      <span className="text-xs font-normal opacity-50">
                        Shop for $50 to enroll
                      </span>
                    </p>
                    <p className="text-slate-950 text-sm font-semibold text-center pl-6 grid">
                      Tier 2
                      <span className="text-xs font-normal opacity-50">
                        Shop for $50 + $10 to upgrade
                      </span>
                    </p>
                    <p className="text-slate-950 text-sm font-semibold text-center pl-6 grid">
                      Tier 3
                      <span className="text-xs font-normal opacity-50">
                        Shop for $50 + $25 to upgrade
                      </span>
                    </p>
                  </div>

                  <div className="bg-gray-100 bg-opacity-70 h-12 p-2.5 mt-4 rounded-lg flex">
                    <span className="bg-white text-blue-600 w-7 h-7 text-xl rounded-full p-1">
                      <BsArrowUpShort />
                    </span>
                    <p className="text-sm font-normal text-blue-600 pl-2">
                      Shop on Techmonk to upgrade your Tier
                    </p>
                  </div>
                </div>

                <div className="bg-white shadow rounded-xl p-3 mt-3">
                  <h4 className="text-xl font-medium">Why join us?</h4>
                  <p className="text-base font-medium opacity-65 mt-1.5">
                    We are more than just a brand, we are a family!
                  </p>
                  <div className="bg-gray-100 bg-opacity-70 h-12 p-2.5 mt-3 rounded-lg flex">
                    <span className="text-green-600 p-1">
                      <RiCheckDoubleFill />
                    </span>
                    <label className="text-base font-normal">
                      Get 50 Points for following us on Facebook
                    </label>
                  </div>
                  <div className="bg-gray-100 bg-opacity-70 h-12 p-2.5 mt-2 rounded-lg flex">
                    <span className="text-green-600 p-1">
                      <RiCheckDoubleFill />
                    </span>
                    <label className="text-base font-normal">
                      Access to exclusive discount and coupons
                    </label>
                  </div>
                  <div className="bg-gray-100 bg-opacity-70 h-12 p-2.5 mt-2 rounded-lg flex">
                    <span className="text-green-600 p-1">
                      <RiCheckDoubleFill />
                    </span>
                    <label className="text-base font-normal">
                      Be part of our loyalty program
                    </label>
                  </div>
                </div>

                <div className="bg-white shadow rounded-xl p-3 mt-3">
                  <h4 className="text-xl font-medium">
                    Respond to a survey and earn 300 points
                  </h4>
                  <p className="text-base font-medium opacity-65 mt-1.5">
                    You can redeem these points on your purchase
                  </p>

                  <div className="bg-gray-100 bg-opacity-70 h-16 p-2.5 mt-3 rounded-lg flex items-center">
                    <span className="text-blue-700 text-xl font-medium pr-1.5">
                      <IoChatbubbleOutline />
                    </span>
                    <label className="text-base font-normal">
                      Which is your favorite speaker under ₹5,000
                    </label>
                    <button
                      type="button"
                      className="bg-blue-600 text-white w-[70px] h-[37px] rounded-md"
                    >
                      Start
                    </button>
                  </div>
                </div>

                <div className="bg-white shadow rounded-xl p-3 mt-3">
                  <h4 className="text-xl font-medium">Points</h4>
                  <p className="text-base font-medium opacity-65 mt-1.5">
                    Earn more Points for different actions, and turn those
                    Points into awesome rewards!
                  </p>
                  <div className="bg-gray-100 bg-opacity-70 h-12 p-2.5 mt-2 rounded-lg flex">
                    <span className="text-blue-600 p-1">
                      <FaCoins />
                    </span>
                    <label className="text-base font-notmal pl-2">
                      Ways to earn
                    </label>
                  </div>
                  <div className="bg-gray-100 bg-opacity-70 h-12 p-2.5 mt-2 rounded-lg flex">
                    <span className="text-blue-600 p-1">
                      <FaGift />
                    </span>
                    <label className="text-base font-notmal pl-2">
                      Ways to redeem
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Tier1;

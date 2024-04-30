"use client";
import React, { useState } from "react";
import { FaCrown, FaCoins, FaGift } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { PiWarningCircleLight } from "react-icons/pi";
import { HiOutlineBolt } from "react-icons/hi2";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { RiCouponLine } from "react-icons/ri";
import {
  IoChatbubbleOutline,
  IoCopyOutline,
  IoChevronBack,
} from "react-icons/io5";
import { LuTwitter } from "react-icons/lu";
import { FiFacebook } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

import WayToEarnComponent from "./WayToEarn/page";
import WayToRedeemComponent from "./WayToRedeem/page";

const Tier2 = ({ tiers, userPosition, maxTierPoints }) => {
  const [showHistory, setShowHistory] = useState(false);
  const History = () => setShowHistory(!showHistory);

  const [showUsedData, setShowUsedData] = useState(false);
  const Used = () => {
    setShowEarnedData(false);
    setShowUsedData(true);
  };

  const [showEarnedData, setShowEarnedData] = useState(true);
  const Earn = () => {
    setShowUsedData(false);
    setShowEarnedData(true);
  };

  const earnData = [
    {
      id: 1,
      name: "Innisfree Jeju Volcanic Pore Toner 2X",
      order: "Order #NYK-188512151-4559319",
      platinum: "1x Platinum",
      qty: 1,
      date: "23 Jan 2024",
      points: 1337,
    },
    {
      id: 2,
      name: "Innisfree Hyaluronic Acid Green Tea Seed Serum",
      order: "Order #NYK-188512151-4559319",
      platinum: "1x Platinum",
      qty: 1,
      date: "23 Jan 2024",
      points: 1977,
    },
    {
      id: 3,
      name: "Plum 15% Vitamin C Glow Face Serum - DErmat Tested To Fight Dark Spots, Pigmentation & Dull Skin",
      order: "Order #NYK-188512151-4559319",
      platinum: "1x Platinum",
      qty: 1,
      date: "23 Jan 2024",
      points: 694,
    },
    {
      id: 4,
      name: "Plum Bodylovin Vanilla Vibes Body Oil",
      order: "Order #NYK-188512151-4559319",
      platinum: "1x Platinum",
      qty: 1,
      date: "23 Jan 2024",
      points: 284,
    },
    {
      id: 5,
      name: "Dot & Key Strawberry Dew SPF 50 Sunscreen Stick On-The-Go",
      order: "Order #NYK-188512151-4559319",
      platinum: "1x Platinum",
      qty: 1,
      date: "23 Jan 2024",
      points: 564,
    },
    {
      id: 6,
      name: " Plum BodyLovin' Hawaiian Rumba DEodorant Roll-On Controls Underarm Odor",
      points: 269,
    },
  ];

  const usedData = [
    {
      id: 1,
      name: "Innisfree Jeju Volcanic Pore Toner 2X",
      order: "Order #NYK-188512151-4559319",
      platinum: "1x Platinum",
      qty: 1,
      date: "23 Jan 2024",
      points: 1337,
    },
    {
      id: 2,
      name: "Innisfree Hyaluronic Acid Green Tea Seed Serum",
      order: "Order #NYK-188512151-4559319",
      platinum: "1x Platinum",
      qty: 1,
      date: "23 Jan 2024",
      points: 1977,
    },
    {
      id: 3,
      name: "Plum 15% Vitamin C Glow Face Serum - DErmat Tested To Fight Dark Spots, Pigmentation & Dull Skin",
      order: "Order #NYK-188512151-4559319",
      platinum: "1x Platinum",
      qty: 1,
      date: "23 Jan 2024",
      points: 694,
    },
  ];

  const [showNewCoupon, setShowNewCoupon] = useState(false);
  const NewCoupon = () => {
    setShowCoupon(false);
    setShowNewCoupon(true);
  };
  const [showCoupon, setShowCoupon] = useState(true);
  const Coupon = () => {
    setShowNewCoupon(false);
    setShowCoupon(true);
  };

  const [showTier, setShowTier] = useState(false);

  const [showWayToEarn, setShowWayToEarn] = useState(false);
  const WayToEarn = () => setShowWayToEarn(!showWayToEarn);

  const [showWayToRedeem, setShowWayToRedeem] = useState(false);
  const WayToRedeem = () => {
    setShowWayToRedeem(!showWayToRedeem);
    setShowTier(true); // Set the tier state to true
  };

  const [copied, setCopied] = useState(false);

  const copiedText = "referral.link/user/harmit";
  const Copy = () => {
    const textToCopy = copiedText;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Unable to copy: ", error);
      });
  };
  console.log("tiers", tiers);
  
  const calculateProgressWidth = () => {
    if (userPosition === 0) {
      return "0%";
    } else if (userPosition >= maxTierPoints) {
      return "100%";
    } else {
      return `${(userPosition / maxTierPoints) * 100}%`;
    }
  };

  return (
    <>
      {showWayToEarn ? (
        <WayToEarnComponent WayToEarn={WayToEarn} />
      ) : showWayToRedeem ? (
        <WayToRedeemComponent WayToRedeem={WayToRedeem} />
      ) : (
        <section className="grid grid-col-2 place-content-center">
          {showHistory ? (
            <div className="col-start-2">
              <div className="container m-10">
                <div className="bg-white shadow w-[475px] h-auto rounded-3xl p-[35px]">
                  <div className="grid items-center">
                    <IoChevronBack
                      className="text-[#858395] text-xl font-normal"
                      onClick={History}
                    />
                    <h4 className="text-xl font-medium col-start-2">
                      Your Points History
                    </h4>
                  </div>

                  <div className="p-2 mt-4">
                    <div className="-space-x-3">
                      <button
                        className={`w-[180px] h-[38px] items-center mix-blend-normal ${
                          showEarnedData
                            ? "text-gray-400 bg-[#f8f6fb] border-2 border-gray-400 rounded-3xl"
                            : "text-gray-800 border-l-2 border-t-2 border-b-2 border-gray-200 rounded-l-3xl "
                        }`}
                        onClick={Earn}
                      >
                        Earned
                      </button>
                      <button
                        className={`w-[180px] h-[38px] mix-blend-normal ${
                          showUsedData
                            ? "text-gray-400 bg-[#f8f6fb] border-2 border-gray-400 rounded-3xl"
                            : "text-gray-800 border-r-2 border-t-2 border-b-2 border-gray-200 rounded-r-3xl"
                        }`}
                        onClick={Used}
                      >
                        Used
                      </button>
                    </div>

                    {showEarnedData ? (
                      <div>
                        {earnData.map((item, a) => (
                          <div key={item.id}>
                            <div className="flex justify-between">
                              <div className="mt-[27px]">
                                <p className="text-base font-medium opacity-[80%] pr-2">
                                  {item.name}
                                </p>
                                <p className="text-[#d18cab] text-sm font-medium pt-2.5">
                                  {item.order}
                                </p>
                                <p className="text-gray-500 text-sm font-normal pt-2.5 flex">
                                  {item.platinum}
                                  <span className="bg-gray-600 w-[5px] h-[5px] rounded-full m-2.5"></span>
                                  Qty {item.qty}
                                  <span className="bg-gray-600 w-[5px] h-[5px] rounded-full m-2.5"></span>
                                  {item.date}
                                </p>
                              </div>

                              <div className="mt-4">
                                <span className="text-[#6b7280b8] text-xl font-medium">
                                  +{item.points}
                                </span>
                              </div>
                            </div>
                            {a !== earnData.length - 1 && (
                              <div className="border-gray-400 opacity-[70%] h-[2px] mt-3">
                                <hr />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="h-auto">
                        {usedData.map((item, a) => (
                          <div key={item.id}>
                            <div className="flex justify-between">
                              <div className="mt-[27px]">
                                <p className="text-base font-medium opacity-[80%] pr-2">
                                  {item.name}
                                </p>
                                <p className="text-[#d18cab] text-sm font-medium pt-2.5">
                                  {item.order}
                                </p>
                                <p className="text-gray-500 text-sm font-normal pt-2.5 flex">
                                  {item.platinum}
                                  <span className="bg-gray-600 w-[5px] h-[5px] rounded-full m-2.5"></span>
                                  Qty {item.qty}
                                  <span className="bg-gray-600 w-[5px] h-[5px] rounded-full m-2.5"></span>
                                  {item.date}
                                </p>
                              </div>

                              <div className="mt-4">
                                <span className="text-[#6b7280b8] text-xl font-medium">
                                  +{item.points}
                                </span>
                              </div>
                            </div>
                            {a !== usedData.length - 1 && (
                              <div className="border-gray-400 opacity-[70%] h-[2px] mt-3">
                                <hr />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-start-1 m-10">
              <div className="container items-center">
                <div className="bg-black w-[475px] rounded-t-3xl p-4">
                  <div class="flex justify-between">
                    <h3 className="text-xl leading-6 text-white font-semibold">
                      <span className="font-thin">Welcome</span> Manushri
                    </h3>
                    <span className="text-white font-semibold text-xl">
                      <CgClose />
                    </span>
                  </div>
                  <p className="text-[#D4A000] flex pt-3">
                    <span className="p-1">
                      <FaCrown />
                    </span>
                    Loyalty Program Name
                  </p>
                  <h2 className="text-white text-3xl uppercase ">
                    Tier 1 Member
                  </h2>
                  <p className="text-sm text-white opacity-65 text-normal pt-2">
                    Member since Octomber, 2023
                  </p>
                  {userPosition !== 0 && (
                    <div
                      className="w-24 h-10 bg-white rounded-sm flex mt-2.5 justify-center"
                      style={{
                        marginLeft:
                          userPosition === 0
                            ? "0%"
                            : userPosition / maxTierPoints >= 0.8
                            ? "80%"
                            : `${(userPosition / maxTierPoints) * 100}%`,
                      }}
                    >
                      <div className="text-xs font-medium pt-2.5">
                        You are here
                        <div
                          className="bg-slate-100 origin-center rotate-45 rounded-br-sm w-3 h-3 mt-2"
                          style={{
                            marginLeft:
                              userPosition === 0
                                ? "0%"
                                : userPosition / maxTierPoints >= 0.8
                                ? "85%"
                                : `${(userPosition / maxTierPoints) * 10}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  )}
                  {/* <div className="bg-neutral-800 min-w-80 h-2 rounded mt-3 items-center justify-between flex">
                    <div className="bg-[#D4A000] w-6 h-6 rounded-full p-2">
                      <div className="bg-[#D4A000] w-[115px] h-2 rounded-e -ml-6 flex justify-between">
                        <div className="bg-white w-2 h-2 ml-6 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-white w-2 h-2 rounded"></div>
                    <div className="bg-white w-2 h-2 rounded"></div>
                  </div> */}
                  <div className="bg-neutral-800 min-w-80 h-2 rounded mt-4 items-center flex relative">
                    <div
                      className="bg-[#D4A000] h-2 -ml-4 rounded-r flex justify-between"
                      style={{
                        width: calculateProgressWidth()
                      }}
                    ></div>
                    {userPosition !== 0 && (
                      <div
                        className="bg-[#D4A000] w-6 h-6 rounded-full p-2"
                        style={{
                          position: userPosition === 2 ? "0%" : "absolute",
                        }}
                      />
                    )}
                    {tiers.map((tier, index) => {
                      let leftPosition =
                        index === 0
                          ? "12px"
                          : index === tiers.length - 1
                          ? "100%"
                          : `${(index / tiers.length) * 100}%`;

                      return (
                        <div
                          key={index}
                          className="bg-white w-2 h-2 rounded mt-2"
                          style={{
                            position: "absolute",
                            left: leftPosition,
                            transform: "translate(-50%, -50%)",
                          }}
                        ></div>
                      );
                    })}
                  </div>

                  <div className="flex gap-2 pt-3 mb-10 relative">
                    {tiers.map((tier, index) => {
                      const leftPosition =
                        index === 0
                          ? "12px"
                          : index === tiers.length - 1
                          ? "92%"
                          : `${(index / tiers.length) * 100}%`;
                      return (
                        <div
                          key={index}
                          className="text-white m-4"
                          style={{
                            position: "absolute",
                            left: leftPosition,
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
                  <div className="container flex justify-between pt-4">
                    <div className="text-white text-sm font-medium">
                      <button className="bg-[#FFFFFF38] rounded-2xl w-[169px] h-[37px] bg-opacity-[22%] teaxt-center flex items-center justify-around p-[12px]">
                        <span className="text-white p-[2px] border rounded-full">
                          <HiOutlineBolt />
                        </span>
                        20221 Zen Coins
                      </button>
                    </div>

                    <div className="text-[#F0F0F0] text-center">
                      <button
                        className="text-base font-medium underline underline-offset-2"
                        onClick={History}
                      >
                        View History
                      </button>
                    </div>
                  </div>
                </div>
                <div className="container bg-blue-600 w-[475px] h-[90px] inline-block p-4">
                  <p className="text-white flex text-sm font-medium">
                    <span className="text-xl p-1">
                      <PiWarningCircleLight />
                    </span>
                    Shop for $300 before 22nd Apr, 2024 to upgrade your
                    benefits. Shop Now!
                  </p>
                </div>
              </div>
              <div className="container">
                <div className="bg-[#F0F0F0] w-[475px] rounded-b-3xl p-[35px]">
                  {showNewCoupon ? (
                    <div className="bg-white h-[226px] shadow rounded-xl flex justify-between">
                      <div className="flex justify-between pt-[20px]">
                        <span
                          className="text-[#364BFF] text-xl p-3"
                          onClick={Coupon}
                        >
                          <BsArrowLeft />
                        </span>
                        <h4 className="text-base font-medium">
                          ₹50 off coupon
                          <p className="text-sm font-normal opacity-55 pt-1">
                            5000 Points
                          </p>
                          <p className="text-sm font-normal opacity-55 pt-1">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                        </h4>
                      </div>
                      <div className="grid grid-rows-3">
                        <div className="bg-[#FF5352] w-[56px] h-[30px] rounded-tr-xl rounded-bl-xl">
                          <span className="text-white text-center p-2.5">
                            Old
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white h-[91px] shadow rounded-xl flex justify-between">
                      <div className="flex justify-between pt-[20px]">
                        <span className="text-[#364BFF] text-xl p-3">
                          <RiCouponLine />
                        </span>
                        <h4 className="text-base font-medium">
                          ₹50 off coupon
                          <p className="text-sm font-normal opacity-55 pt-1">
                            5000 Points
                          </p>
                        </h4>
                      </div>
                      <div className="grid grid-rows-3">
                        <div className="bg-[#FF5352] w-[56px] h-[30px] rounded-tr-xl rounded-bl-xl">
                          <span className="text-white text-center p-2.5">
                            New
                          </span>
                        </div>
                        <button
                          className="text-[#364BFF] text-lg row-end-3 p-[5px]"
                          onClick={NewCoupon}
                        >
                          <BsArrowRight />
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="bg-white shadow rounded-xl p-3 mt-3">
                    <h4 className="text-xl font-medium">Points</h4>
                    <p className="text-base font-medium opacity-65 mt-1.5">
                      Earn more Points for different actions, and turn those
                      Points into awesome rewards!
                    </p>

                    <div
                      className="bg-gray-100 bg-opacity-70 h-12 p-2.5 mt-2 rounded-lg flex"
                      onClick={WayToEarn}
                    >
                      <span className="text-blue-600 p-1">
                        <FaCoins />
                      </span>
                      <label className="text-base font-notmal pl-2">
                        Ways to earn
                      </label>
                    </div>

                    <div
                      className="bg-gray-100 bg-opacity-70 h-12 p-2.5 mt-2 rounded-lg flex"
                      onClick={WayToRedeem}
                    >
                      <span className="text-blue-600 p-1">
                        <FaGift />
                      </span>
                      <label className="text-base font-notmal pl-2">
                        Ways to redeem
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

                  <div className="bg-white shadow rounded-xl p-3.5 mt-3">
                    <div className="flex justify-between">
                      <div className="text-left">
                        <h4 className="text-xl font-medium">
                          Refer your friends
                        </h4>
                        <p className="text-[#647381] text-base font-normal opacity-65 mt-1">
                          0 referrals selected
                        </p>
                      </div>
                      <div className="p-3.5">
                        <span className="text-[#364BFF] text-xl">
                          <BsArrowRight />
                        </span>
                      </div>
                    </div>

                    <div className="bg-gray-100 bg-opacity-70 h-12 p-2.5 mt-4 rounded-lg flex justify-between">
                      <p className="text-base font-normal pl-2">{copiedText}</p>

                      {copied ? (
                        <p className="text-green-600 text-base">Copied!</p>
                      ) : (
                        <span
                          className="text-blue-600 text-base p-1.5"
                          onClick={Copy}
                        >
                          <IoCopyOutline />
                        </span>
                      )}
                      {/* {copied && <p className="text-green-600 text-base">Copied!</p>} */}
                    </div>

                    <div className="flex justify-between mt-3">
                      <p className="text-sm font-normal opacity-[50%] text-left">
                        Share your link on
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <p className="text-slate-950 text-base font-normal flex items-center">
                        <span className="text-base font-normal pr-2">
                          <LuTwitter />
                        </span>
                        Twitter
                      </p>
                      <p className="text-slate-950 text-base font-normal flex items-center">
                        <span className="text-base font-normal p-2">
                          <FiFacebook />
                        </span>
                        Facebook
                      </p>
                      <p className="text-slate-950 text-base font-normal flex mr-1 items-center">
                        <span className="text-base font-normal p-2">
                          <MdOutlineMailOutline />
                        </span>
                        Email
                      </p>
                    </div>
                  </div>

                  <div className="bg-white h-[106px] shadow rounded-xl mt-4 p-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xl font-medium">
                        Your Activity
                        <p className="text-base font-medium opacity-55 pt-1">
                          View your actions on the store
                        </p>
                      </h4>
                      <span className="text-[#364BFF] text-lg">
                        <BsArrowRight />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Tier2;

import {
  FaArrowUp,
  FaCheckDouble,
  FaCrown,
  FaBolt,
  FaGift,
  FaPiggyBank,
  FaRocketchat,
  FaCoins,
} from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { PiWarningCircleLight } from "react-icons/pi";
import { HiBolt } from "react-icons/hi2";
import { BsArrowUpShort } from "react-icons/bs";
import { RiCheckDoubleFill } from "react-icons/ri";
import { IoChatbubbleOutline } from "react-icons/io5";

function Tier1() {
  return (
    <>
      <section className="grid place-content-center">
        <div className="container items-center mt-10">
          <div className="bg-black w-[475px] rounded-t-3xl p-4">
            <div class="flex justify-between">
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

            <div className="w-24 h-10 bg-white rounded-sm flex ml-16 mt-2.5 justify-center">
              <p className="text-xs font-medium pt-2.5">
                You are here
                <div className="bg-white origin-center rotate-45 rounded-br-sm w-3 h-3 mt-2"></div>
              </p>
            </div>

            <div className="bg-neutral-800 min-w-80 h-2 rounded mt-3 items-center justify-between flex">
              <div className="bg-blue-600 w-6 h-6 rounded-full p-2">
                <div className="bg-blue-600 w-20 h-2 rounded flex justify-between">
                  <div className="bg-white w-2 h-2 rounded"></div>
                </div>
              </div>
              <div className="bg-white w-2 h-2 rounded"></div>
              <div className="bg-white w-2 h-2 rounded"></div>
            </div>
            <div className="flex justify-between pt-3">
              <p className="text-white text-sm font-semibold"> Tier 1 </p>
              <p className="text-white text-sm font-semibold grid">
                {" "}
                Tier 2{" "}
                <span className="text-sm font-normal opacity-50">
                  ₹10000
                </span>{" "}
              </p>
              <p className="text-white text-sm font-semibold grid">
                {" "}
                Tier 3{" "}
                <span className="text-sm font-normal opacity-50">
                  ₹10000
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="container bg-blue-600 w-[475px] h-[90px] inline-block p-4">
            <p className="text-white flex text-sm font-medium">
              {" "}
              <span className="text-xl p-1">
                {" "}
                <PiWarningCircleLight />{" "}
              </span>{" "}
              Shop for $300 before 22nd Apr, 2024 to upgrade your benefits. Shop
              Now!
            </p>
          </div>
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
                  <p className="text-xs text-white font-medium pt-2.5">
                    Start here
                    <div className="bg-pink-600 origin-center rotate-45 rounded-br-sm w-3 h-3 mt-2"></div>
                  </p>
                </div>

                <div className="float-end mr-1.5 mt-8 flex-end">
                  <span className="text-yellow-400 text-6xl">
                    {" "}
                    <FaCrown />{" "}
                  </span>
                </div>
              </div>

              <div className="bg-blue-700 w-[335px] h-2 rounded items-center justify-between flex">
                <div className="bg-yellow-400 text-white w-6 h-6 rounded-full p-1 flex justify-center">
                  {" "}
                  <HiBolt />{" "}
                </div>
                <div className="flex justify-center -space-x-10">
                  <div className="bg-yellow-400 text-white w-6 h-6 rounded-full p-1 mix-blend-normal">
                    {" "}
                    <HiBolt />{" "}
                  </div>
                  <div className="bg-yellow-400 text-white w-6 h-6 rounded-full p-1 mix-blend-normal">
                    {" "}
                    <HiBolt />{" "}
                  </div>
                </div>
                <div className="flex justify-center -space-x-10">
                  <div className="bg-yellow-400 text-white w-6 h-6 rounded-full p-1 flex justify-center mix-blend-normal">
                    {" "}
                    <HiBolt />{" "}
                  </div>
                  <div className="bg-yellow-400 text-white w-6 h-6 rounded-full p-1 flex justify-center mix-blend-normal">
                    {" "}
                    <HiBolt />{" "}
                  </div>
                  <div className="bg-yellow-400 text-white w-6 h-6 rounded-full p-1 flex justify-center mix-blend-normal">
                    {" "}
                    <HiBolt />{" "}
                  </div>
                </div>
              </div>
              <div className="flex justify-between pt-3">
                <p className="text-slate-950 text-sm font-semibold text-left grid">
                  {" "}
                  Tier 1{" "}
                  <span className="text-xs font-normal opacity-50">
                    Shop for $50 to enroll
                  </span>{" "}
                </p>
                <p className="text-slate-950 text-sm font-semibold text-center pl-6 grid">
                  {" "}
                  Tier 2{" "}
                  <span className="text-xs font-normal opacity-50">
                    Shop for $50 + $10 to upgrade
                  </span>{" "}
                </p>
                <p className="text-slate-950 text-sm font-semibold text-center pl-6 grid">
                  {" "}
                  Tier 3{" "}
                  <span className="text-xs font-normal opacity-50">
                    Shop for $50 + $25 to upgrade
                  </span>{" "}
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
                  <RiCheckDoubleFill />{" "}
                </span>
                <label className="text-base font-normal">
                  {" "}
                  Get 50 Points for following us on Facebook{" "}
                </label>
              </div>
              <div className="bg-gray-100 bg-opacity-70 h-12 p-2.5 mt-2 rounded-lg flex">
                <span className="text-green-600 p-1">
                  <RiCheckDoubleFill />{" "}
                </span>
                <label className="text-base font-normal">
                  {" "}
                  Access to exclusive discount and coupons{" "}
                </label>
              </div>
              <div className="bg-gray-100 bg-opacity-70 h-12 p-2.5 mt-2 rounded-lg flex">
                <span className="text-green-600 p-1">
                  <RiCheckDoubleFill />{" "}
                </span>
                <label className="text-base font-normal">
                  {" "}
                  Be part of our loyalty program{" "}
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
                  {" "}
                  <IoChatbubbleOutline />{" "}
                </span>
                <label className="text-base font-normal">
                  {" "}
                  Which is your favorite speaker under ₹5,000{" "}
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
                Earn more Points for different actions, and turn those Points
                into awesome rewards!
              </p>
              <div className="bg-gray-100 bg-opacity-70 h-12 p-2.5 mt-2 rounded-lg flex">
                <span className="text-blue-600 p-1">
                  <FaCoins />{" "}
                </span>
                <label className="text-base font-notmal pl-2">
                  Ways to earn
                </label>
              </div>
              <div className="bg-gray-100 bg-opacity-70 h-12 p-2.5 mt-2 rounded-lg flex">
                <span className="text-blue-600 p-1">
                  <FaGift />{" "}
                </span>
                <label className="text-base font-notmal pl-2">
                  {" "}
                  Ways to redeem{" "}
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tier1;

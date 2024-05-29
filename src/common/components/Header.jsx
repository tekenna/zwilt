import React from "react";
import Navbar from "./Navbar";
import person from "../../assets/images/person.svg";
import icon from "../../assets/icons/logo-icon1.svg";

const Header = () => {
  return (
    <div className="w-full sm:min-h-[790px] max-w-[1300px] flex flex-col ">
      <Navbar />
      <div className="flex flex-col sm:mt-[144px] mt-[90px] w-full items-center gap-[16px]">
        <div className="flex flex-col gap-[10px] items-center">
          <span className="text-center md:flex hidden flex-col lg:text-[54px] text-[45px] w-full justify-center font-[700] max-w-[671px] leading-[64px]  items-center ">
            <span className="flex items-center">
              Finding the right fit{" "}
              <img className="md:h-[43px] h-[36px]" src={person} alt="" /> has{" "}
            </span>{" "}
            never been easier.
          </span>
          <span className="text-center md:hidden sm:flex hidden flex-col lg:text-[54px] text-[45px] w-full justify-center font-[700] max-w-[671px] leading-[64px]  items-center ">
            <span className="flex items-center ">Finding the right fit </span>{" "}
            <span className=" flex items-center">
              {" "}
              <img className="md:h-[43px] h-[36px] " src={person} alt="" /> has
              never been
            </span>
            <span>easier.</span>
          </span>
          <span className="text-center sm:hidden flex flex-col lg:text-[54px] sm:text-[45px] text-[36px] w-full justify-center font-[700] max-w-[671px] leading-[64px]  items-center ">
            <span className="flex items-center ">Finding the right </span>{" "}
            <span className=" flex items-center">
              {" "}
              fit <img
                className="md:h-[43px] h-[36px] "
                src={person}
                alt=""
              />{" "}
              has
            </span>
            <span> never been easier.</span>
          </span>
          <span className="text-center text-[#202229] sm:text-[22px] text-[18px] font-[400] max-w-[582px] ">
            With our rigorous pre-vetting process, you'll never have to worry
            about finding the ideal candidate ever again.
          </span>
        </div>
        <div className="flex pl-[27px] rounded-[15px] items-center justify-between max-w-[570px] w-full border border-[#F0F0F0] sm:h-[74px] h-[56px]">
          <span className="text-[#202229] flex items-center gap-2 whitespace-nowrap sm:text-[16px] text-[14px] font-[600]  ">
            Looking for{" "}
            <input
              className="text-[#959595] placeholder:text-[#959595] h-full p-0 w-full border-none outline-none font-[500]"
              placeholder="design |"
            />{" "}
          </span>
          <span className="bg-[#FFBE2E] flex justify-center cursor-pointer items-center sm:w-[74px] w-[56px] sm:h-[74px] h-[56px] rounded-[15px]">
            <img src={icon} alt="" />
          </span>
        </div>
        <div className="max-w-[920px] flex flex-col items-center bg-[#F8F8F8] rounded-[15px] py-[15px] px-[10px] w-full">
          <div className="grid grid-cols-12 rounded-[15px] bg-[#d2d2d268] overflow-hidden gap-[7px] max-w-[391px] w-full h-[44px]">
            <span className="col-span-6 rounded-[15px] text-[#202229] sm:text-[16px] text-[14px] font-[600] bg-[#C7F4C2] h-full flex items-center justify-center ">
              IT & Development
            </span>
            <span className="col-span-6 rounded-[15px] text-[#202229] sm:text-[16px] text-[14px] font-[500] h-full  flex items-center justify-center ">
              Design and Creative
            </span>
          </div>
          <div className="w-full grid grid-cols-12 gap-[10px] py-[23px] ">
            <div className="col-span-4 flex flex-col m-auto gap-[16px]">
              <span className="text-[#959595] sm:text-[16px] truncate whitespace-nowrap text-[12px] font-[400]">
                Python Developer
              </span>
              <span className="text-[#959595] sm:text-[16px] truncate whitespace-nowrap text-[12px] font-[400]">
                Shopify Developer
              </span>
              <span className="text-[#202229] sm:text-[16px] truncate whitespace-nowrap text-[12px] font-[500]">
                MERN <span className="sm:flex hidden">Stack</span> Developer
              </span>
              <span className="text-[#959595] sm:text-[16px] truncate whitespace-nowrap text-[12px] font-[400]">
                Full Stack Developer
              </span>
            </div>
            <div className="col-span-4 flex flex-col m-auto gap-[16px]">
              <span className="text-[#959595] sm:text-[16px] truncate whitespace-nowrap text-[12px] font-[400]">
                Data Scientist
              </span>
              <span className="text-[#959595] sm:text-[16px] truncate whitespace-nowrap text-[12px] font-[400]">
                Front End Developer
              </span>
              <span className="text-[#959595] sm:text-[16px] truncate whitespace-nowrap text-[12px] font-[400]">
                Shopify Developer
              </span>
              <span className="text-[#959595] sm:text-[16px] truncate whitespace-nowrap text-[12px] font-[400]">
                Python Developer
              </span>
            </div>
            <div className="col-span-4 flex flex-col m-auto gap-[16px] overflow-hidden">
              <span className="text-[#959595] sm:text-[16px] truncate whitespace-nowrap text-[12px] font-[400]">
                Shopify Developer
              </span>
              <span className="text-[#959595] sm:text-[16px] truncate whitespace-nowrap text-[12px] font-[400]">
                Python Developer
              </span>
              <span className="text-[#959595] sm:text-[16px] truncate whitespace-nowrap text-[12px] font-[400]">
                Full Stack Developer
              </span>
              <span className="text-[#202229] sm:text-[16px] truncate whitespace-nowrap text-[12px] font-[500]">
                Explore More
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

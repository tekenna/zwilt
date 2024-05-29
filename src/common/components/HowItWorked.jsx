import React from "react";
import vector from "../../assets/vectors/“.svg";
import groove from "../../assets/images/groove.svg";
import groove_ from "../../assets/images/groovehq.svg";
import person from "../../assets/images/person2.svg";
import left from "../../assets/icons/left.svg";
import right from "../../assets/icons/right.svg";

const HowItWorked = () => {
  return (
    <div className="w-full min-h-[840px] px-[16px] relative flex flex-col items-center  ">
      <div className="bg-[#202229] -skew-y-2 absolute left-0 right-0 bottom-0  w-full h-full">
        <img
          className="absolute top-0 right-[20px] h-[175px]"
          src={vector}
          alt=""
        />
      </div>
      <div className="w-full max-w-[1300px] px-[16px py-[100px] min-h-[840px] h-full flex items-center  justify-between z-[9999]">
        <div className="flex md:flex-row flex-col  justify-between items-end gap-[30px] w-full">
          <div className="flex flex-col gap-[44px] w-full ">
            <span className="flex flex-col md:items-start items-center min-w-[379px] lg:text-[54px] sm:text-[45px] text-[36px] font-[700] text-[#ffffff] leading-[64px]">
              How it worked{" "}
              <span className="flex items-center md:justify-start justify-center text-center gap-2">
                for Jason{" "}
                <img className="lg:w-[56px] w-[45px]" src={person} alt="" /> at
              </span>{" "}
              <img className="h-[50.69px] mt-3 w-fit" src={groove} alt="" />
            </span>
            <span className="text-[#FFFFFF] md:text-start text-center md:m-0 m-auto opacity-[0.8] sm:text-[22px] text-[18px] font-[400] leading-[32px] max-w-[461px]">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since.
            </span>
            <div className="flex md:justify-start justify-center gap-[9px]">
              <span className="flex items-center justify-center w-[49.9px] h-[49.9px] bg-[#fff] rounded-[20px] cursor-pointer">
                <img src={left} alt="" />
              </span>
              <span className="flex items-center justify-center w-[49.9px] h-[49.9px] bg-[#fff] rounded-[20px] cursor-pointer">
                <img src={right} alt="" />
              </span>
            </div>
          </div>
          <div className="flex flex-col md:items-start items-center gap-[44px] max-w-[640px] md:m-0 m-auto w-full">
            <div className="flex gap-[14px] items-center sm:w-fit w-full">
              <span className="w-[98.79px] bg-[#AF7CFF] h-[98.79px] flex items-center justify-center rounded-[40px]">
                <img className="h-[20.87px]" src={groove_} alt="" />
              </span>
              <div className="flex flex-col gap-1">
                <span className="sm:text-[34px] text-[27px] leading-[44px] font-[600] text-[#ffffff] ">
                  Jason Makki
                </span>
                <span className="text-[16px] leading-[18px] font-[500] text-[#ffffff] opacity-[0.4]">
                  Engineer at GROOVE
                </span>
                <span className="text-[16px] leading-[18px] font-[500] text-[#ffffff] opacity-[0.4]">
                  San Francisco
                </span>
              </div>
            </div>
            <span className="max-w-[499px] w-full text-[#ffffff] opacity-[0.8] sm:text-[22px] text-[18px]  sm:leading-[32px]">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since. Zwilt enabled us to deliver on time and
              they’ve been heavy hitters in our corner since.Zwilt enabled us to
              deliver on time and they’ve been heavy hitters.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorked;

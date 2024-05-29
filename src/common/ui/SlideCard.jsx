import React from "react";
import icon from "../../assets/icons/logo-icon2.svg";
import Floater from "./Floater";

const SlideCard = () => {
  return (
    <div className="xl:min-w-[1300px]  slide-shadow  relative rounded-[20px]  sm:bg-[#fff]  flex justify-between items-center">
      <div className="flex flex-col gap-[37px] md:min-h-[652px] min-h-[552px]  p-[42px] sm:px-[42px] px-[16px] w-full h-full justify-center  z-[9999999999]">
        <span className="text-[#202229] md:text-[54px] sm:text-[45px] text-[36px] max-w-[464px] md:leading-[64px] font-[700]">
          Onboard without the risk.
        </span>
        <div className="flex flex-col">
          <span className="text-[#202229CC] flex sm:items-center  gap-[16px] text-[22px] leading-[32px] font-[400]">
            <span className="min-w-[18px] h-[7px] bg-[#50589F] sm:mt-0 mt-[20px] rounded-[21px]"></span>{" "}
            We pick the best for you to select.
          </span>
          <span className="text-[#202229CC] flex sm:items-center  gap-[16px] text-[22px] leading-[32px] font-[400]">
            <span className="min-w-[18px] h-[7px] bg-[#50589F] sm:mt-0 mt-[20px] rounded-[21px]"></span>{" "}
            We pick the best for you to select.
          </span>
          <span className="text-[#202229CC] flex sm:items-center  gap-[16px] text-[22px] leading-[32px] font-[400]">
            <span className="min-w-[18px] h-[7px] bg-[#50589F] sm:mt-0 mt-[20px] rounded-[21px]"></span>{" "}
            We pick the best for you to select.
          </span>
        </div>
        <div className="flex items-center gap-[12px] cursor-pointer">
          <span className="w-[74px] h-[74px] bg-[#202229] flex items-center justify-center rounded-[30px]">
            <img className="h-[15px]" src={icon} alt="" />
          </span>
          <span className="text-[#202229] text-[22px] font-[500]">
            Learn More
          </span>
        </div>
      </div>
      <div className="lg:block hidden absolute  right-[56px]  ">
        <Floater />
      </div>
    </div>
  );
};

export default SlideCard;

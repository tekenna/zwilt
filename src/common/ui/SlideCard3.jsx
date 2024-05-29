import React from "react";
import icon from "../../assets/icons/logo-icon2.svg";
import Floater3 from "./Floater3";

const SlideCard = () => {
  return (
    <div className="xl:min-w-[1300px] slide-shadow  relative rounded-[20px] min-h-[652px] sm:bg-[#fff]  flex justify-between items-center">
      <div className="flex flex-col gap-[37px] w-full h-full md:min-h-[652px] min-h-[552px] justify-center  z-[9999999999] p-[42px] sm:px-[42px] px-[16px] ">
        <span className="text-[#202229] md:text-[54px] sm:text-[45px] text-[36px] max-w-[279px] md:leading-[64px] font-[700]">
          Stay in the loop.
        </span>
        <div className="flex flex-col">
          <span className="text-[#202229CC] flex sm:items-center gap-[16px] text-[22px] leading-[32px] font-[400]">
            <span className="min-w-[18px] h-[7px] bg-[#C7F4C2] sm:mt-0 mt-[16px] rounded-[21px]"></span>{" "}
            Track your staff activity down to every minute with screenshots.
          </span>
          <span className="text-[#202229CC] flex sm:items-center gap-[16px] text-[22px] leading-[32px] font-[400]">
            <span className="min-w-[18px] h-[7px] bg-[#C7F4C2] sm:mt-0 mt-[16px] rounded-[21px]"></span>{" "}
            Comprehensive time sheet data to process payments.
          </span>
          <span className="text-[#202229CC] flex sm:items-center gap-[16px] text-[22px] leading-[32px] font-[400]">
            <span className="min-w-[18px] h-[7px] bg-[#C7F4C2] sm:mt-0 mt-[16px] rounded-[21px]"></span>{" "}
            Create projects to organize and assign tasks more effectively.
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
      <div className="lg:block hidden absolute right-[62px]  ">
        <Floater3 />
      </div>
    </div>
  );
};

export default SlideCard;

import React from "react";
import icon from "../../assets/icons/logo-icon2.svg";

const Card = ({ count, title, desc, vector, index, color }) => {
  const getBg = () => {
    if (index === 0) return `bg-[${color}]`;
    else if (index === 1) return `bg-yellow-100`;
    else return `bg-gray-100`;
  };
  return (
    <div className="flex items-center relative min-h-[387px] w-full sm:px-[36px] px-[16px] ">
      <div
        className={`${getBg()} flex items-center overflow-hidden  -skew-y-2 absolute left-0 right-0 bottom-0 w-full h-full`}
      >
        <img
          className="absolute  right-0 top-[-10px] min-w-[45%] skew-y-2 md:block hidden "
          src={vector}
          alt=""
        />
      </div>
      <div className="h-full flex w-full min-h-[387px] items-center   z-[99999] ">
        <div className="flex gap-[15px] ">
          <img className="sm:h-[83px] h-[70px]" src={count} alt="" />
          <div className="flex flex-col gap-[15px]">
            <span className="text-[#202229] sm:text-[34px] text-[27px] sm:leading-[44px] font-[600] max-w-[275px]">
              {title}
            </span>
            <span className="text-[16px] font-[400] max-w-[407px] leading-[24px] text-[#202229CC]">
              {desc}
            </span>
            <div className="flex items-center gap-[3px] cursor-pointer">
              <span className="w-[49px] h-[49px] bg-[#202229] flex items-center justify-center rounded-[20px]">
                <img className="h-[10px]" src={icon} alt="" />
              </span>
              <span className="text-[#202229] text-[14px] font-[500]">
                Join Now
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

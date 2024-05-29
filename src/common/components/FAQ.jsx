import React from "react";
import { faq } from "../../assets/constants/data";

const FAQ = () => {
  return (
    <div className="w-full min-h-[1343px] py-[152.5px]  relative flex flex-col items-center  ">
      <div className="flex flex-col gap-[50px]  w-full ">
        <span className="text-[#202229] text-center md:text-[54px] sm:text-[45px] text-[36px] font-[700]">
          Frequently asked questions
        </span>
        <div className="w-full flex flex-col">
          {faq.map((a, n) => (
            <div
              key={n}
              className={`flex items-center w-full justify-center h-[112px]  ${
                n === 0
                  ? "border-y border-y-[#D6D6D6]"
                  : "border-b border-b-[#D6D6D6]"
              } `}
            >
              <div className="flex md:justify-between cursor-pointer items-center  w-full h-full ">
                <div
                  className={`${
                    a.title !== "" ? "flex" : "md:flex hidden"
                  } w-full h-full `}
                >
                  <span
                    className={` h-full border-r ${
                      a.title === ""
                        ? "opacity-0 md:flex hidden md:min-w-[230px] "
                        : "opacity-1 flex md:w-fit w-[50%] md:min-w-[230px]"
                    } ${
                      n === 4 && "bg-[#E8E8E8] "
                    }  border-r-[#D6D6D6]  justify-center items-center text-[#202229] sm:text-[22px] text-[18px] font-[600]`}
                  >
                    General
                  </span>

                  <span
                    className={` h-full border-r  ${
                      a.sub && a.sub !== ""
                        ? "opacity-1 flex  md:w-[230px] w-[50%]  md:min-w-[230px"
                        : "opacity-0 md:flex hidden md:min-w-[230px] "
                    }  border-r-[#D6D6D6]  justify-center flex items-center text-[#202229] sm:text-[22px] text-[18px] font-[600]`}
                  >
                    {a.sub}
                  </span>
                </div>

                <span
                  className={`text-[#202229] md:max-w-[55%] px-[16px]  w-full ${
                    a.title === "" ? "flex" : "md:flex hidden"
                  } opacity-[0.8] sm:text-[22px] text-[18px] font-[400] sm:leading-[32px]`}
                >
                  {a.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

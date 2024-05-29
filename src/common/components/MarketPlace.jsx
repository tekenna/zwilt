import React from "react";
import icon1 from "../../assets/icons/skill-badge.svg";
import icon2 from "../../assets/icons/dashboard.svg";
import icon3 from "../../assets/icons/profiles.svg";
import logoicon from "../../assets/icons/logo-icon1.svg";
import logoicon2 from "../../assets/icons/logo-icon2.svg";
import { creatives, developer } from "../../assets/constants/data";

const MarketPlace = () => {
  return (
    <div className="w-full min-h-[1130px] px-[16px] lg:py-[45px] py-[100px] relative flex items-center justify-center ">
      <div className="bg-[#EDEFFF] -skew-y-2 absolute left-0 right-0 bottom-0 w-full h-full"></div>
      <div className="flex flex-col gap-[100px] max-w-[1300px] items-center w-full h-full z-[9999999]">
        <span className="lg:max-w-[977px] max-w-[600px] w-full text-center lg:text-[54px] sm:text-[45px] text-[36px] lg:leading-[64px]  font-[700] text-[#202229]">
          Your one-stop marketplace for finding the talent your business needs.
        </span>
        <div className="flex flex-col gap-[14px] w-full">
          <div className="flex flex-col gap-[36px] w-full">
            <div className="flex lg:flex-row flex-col gap-[30px] items-center justify-between w-full">
              <div className="flex flex-col gap-[24px] w-full lg:max-w-[380px] lg:m-0  ">
                <span className="text-[#202229] text-[24px] lg:text-start text-center font-[500] leading-[34px] *:">
                  Find Dev and IT professionals to scale your business.
                </span>
                <div className="lg:grid flex lg:justify-start justify-center flex-wrap gap-[30px] grid-cols-12 lg:gap-[4px]">
                  <span className="col-span-6 flex items-center gap-2">
                    <img className="h-[18px]" src={icon1} alt="" />
                    <span className="text-[16px] whitespace-nowrap font-[400] text-[#202229CC]">
                      989 Skills
                    </span>
                  </span>
                  <span className="col-span-6 flex items-center gap-2">
                    <img className="h-[18px]" src={icon2} alt="" />
                    <span className="text-[16px] whitespace-nowrap font-[400] text-[#202229CC]">
                      45 Sub-Categories
                    </span>
                  </span>
                  <span className="col-span-6 flex items-center gap-2">
                    <img className="h-[18px]" src={icon3} alt="" />
                    <span className="text-[16px] whitespace-nowrap font-[400] text-[#202229CC]">
                      1011 Profiles
                    </span>
                  </span>
                </div>
              </div>
              <div className="bg-[#fff] rounded-[7px] lg:max-w-[730px] min-h-[224px] w-full px-[29px] py-[18px] flex flex-col gap-[15px]">
                <span className="text-[#202229] text-[16px] font-[500]">
                  IT & Development
                </span>
                <div className="flex w-full justify-between md:flex-nowrap flex-wrap gap-[16px] ">
                  {developer.map((c, n) => (
                    <div
                      key={n}
                      className="flex flex-col items-center gap-[30px]"
                    >
                      <span className="flex items-center sm:w-[96px] w-[80px] sm:h-[96px] h-[80px] rounded-full bg-[#F6F6F6] justify-center">
                        <img src={c.icon} alt="" />
                      </span>
                      <span className="text-[14px] px-1 max-w-[81px] font-[600] text-[#202229] text-center">
                        {c.title}
                      </span>
                    </div>
                  ))}
                  <div className="flex flex-col items-center gap-[15px]">
                    <span className="flex items-center sm:w-[96px] w-[80px] sm:h-[96px] h-[80px] rounded-[30px] bg-[#F6F6F6] justify-center">
                      <img src={logoicon} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-[30px] items-center justify-between w-full">
              <div className="flex flex-col gap-[24px] w-full lg:max-w-[380px] lg:m-0  ">
                <span className="text-[#202229] text-[24px] lg:text-start text-center font-[500] leading-[34px] *:">
                  Explore Creative individuals with a keen eye for detail.
                </span>
                <div className="lg:grid flex lg:justify-start justify-center flex-wrap gap-[30px] grid-cols-12 lg:gap-[4px]">
                  <span className="col-span-6 flex items-center gap-2">
                    <img className="h-[18px]" src={icon1} alt="" />
                    <span className="text-[16px] whitespace-nowrap font-[400] text-[#202229CC]">
                      989 Skills
                    </span>
                  </span>
                  <span className="col-span-6 flex items-center gap-2">
                    <img className="h-[18px]" src={icon2} alt="" />
                    <span className="text-[16px] whitespace-nowrap font-[400] text-[#202229CC]">
                      45 Sub-Categories
                    </span>
                  </span>
                  <span className="col-span-6 flex items-center gap-2">
                    <img className="h-[18px]" src={icon3} alt="" />
                    <span className="text-[16px] whitespace-nowrap font-[400] text-[#202229CC]">
                      1011 Profiles
                    </span>
                  </span>
                </div>
              </div>
              <div className="bg-[#fff] rounded-[7px] lg:max-w-[730px] min-h-[224px] w-full px-[29px] py-[18px] flex flex-col gap-[15px]">
                <span>Design & Creative</span>
                <div className="flex w-full justify-between md:flex-nowrap flex-wrap gap-[16px] ">
                  <div className="flex flex-col items-center gap-[15px]">
                    <span className="flex items-center sm:w-[96px] w-[80px] sm:h-[96px] h-[80px] rounded-[30px] bg-[#F6F6F6] justify-center">
                      <img src={logoicon} alt="" />
                    </span>
                  </div>
                  {creatives.map((c, n) => (
                    <div key={n} className="flex flex-col gap-[15px]">
                      <span className="flex items-center sm:w-[96px] w-[80px] sm:h-[96px] h-[80px] rounded-full bg-[#F6F6F6] justify-center">
                        <img src={c.icon} alt="" />
                      </span>
                      <span className="text-[14px] px-1 max-w-[81px] font-[600] text-[#202229] text-center">
                        {c.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:items-center sm:flex-row flex-col lg:justify-between justify-center w-full lg:mt-0 mt-[40px]">
            <div className="flex items-center gap-[17px]">
              <span className="bg-[#202229] sm:min-w-[74px] min-w-[60px] sm:h-[74px] h-[60px] flex items-center justify-center sm:rounded-[30px] rounded-[20px]">
                <img src={logoicon2} alt="" />
              </span>
              <span className="font-[500] whitespace-nowrap text-[22px] text-[#202229]">
                Explore More
              </span>
            </div>
            <div className="lg:max-w-[730px] lg:w-full sm:flex hidden">
              <span className="text-[#202229CC] text-[22px] font-[700]">
                30 more <span className="font-[500]">to explore</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;

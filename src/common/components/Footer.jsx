import React from "react";
import slope from "../../assets/vectors/footer.svg";
import icon from "../../assets/icons/logo-icon3.svg";
import logo from "../../assets/images/logo.svg";
import stroke from "../../assets/vectors/stroke.svg";
import stroke_ from "../../assets/vectors/stroke_.svg";

const Footer = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <img src={slope} className=" mb-[-1px] w-full right-0  flex" alt="" />
      <div className="flex flex-col justify-between items-center w-full  pt-[24px] footer-gradient min-h-[1207px]  ">
        <div className="flex flex-col justify-between items-center h-full w-full px-[16px]">
          <div className="max-w-[1300px] w-full z-[99999] flex flex-col gap-[141px] ">
            <div className="relative sm:max-h-[481px] max-h-[400px] w-full flex items-center justify-center">
              <div className="bg-[#525AA0] -skew-y-2 absolute left-0 right-0 bottom-0 w-full h-full"></div>
              <div className="w-full h-full min-h-[481px] flex flex-col items-center gap-[36px] justify-center z-[99990999]">
                <span className="md:text-[54px] sm:text-[45px] text-[36px] px-[30px] md:leading-[64px] font-[600] text-center text-[#ffffff] max-w-[683px]">
                  Need a job done, and done well? Get started
                </span>
                <span className="sm:w-[73px] w-[60px] sm:h-[73px] h-[60px] flex items-center justify-center bg-[#202229] cursor-pointer sm:rounded-[29px] rounded-[20px]">
                  <img src={icon} alt="" />
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-[49px] pb-[41px] w-full">
              <div className="flex lg:flex-nowrap flex-wrap lg:gap-[91.68px] gap-[56px]">
                <div className="flex flex-col gap-[49px] w-full max-w-[332px]">
                  <img className="h-[29.31px] w-fit" src={logo} alt="" />
                  <span className="text-[#FFFFFFCC] text-[14px] font-[400] leading-[22px] max-w-[284px]">
                    We take complex hiring processes - and simplify them.
                    Connecting you to the world’s highly qualified talent pool.
                  </span>
                </div>

                <div className="col-span-9 flex flex-col">
                  <span className="max-w-[799px] md:text-[54px] sm:text-[45px] text-[36px] md:leading-[64px] text-[#fff] font-[600]">
                    Connecting the right people to the right businesses.
                  </span>
                </div>
              </div>
              <div className="flex lg:flex-nowrap flex-wrap lg:gap-[91.68px] gap-[56px]">
                <div className=" flex flex-col gap-[58px]">
                  <div className="flex flex-col gap-[15px] max-w-[332px] w-full">
                    <span className="text-[#FFFFFF] font-[600] opacity-[0.4] text-[14px]">
                      LINKS AND REDIRECTS
                    </span>
                    <div className="flex gap-1">
                      <span className="text-[#EDEFFF] min-w-[162px] h-[50px] bg-[#292B34] rounded-[20px] flex items-center justify-center font-[500] text-[14px] cursor-pointer w-full">
                        Hire now
                      </span>
                      <span className="text-[#EDEFFF] min-w-[162px] h-[50px] bg-[#292B34] rounded-[20px] flex items-center justify-center font-[500] text-[14px] cursor-pointer w-full">
                        Apply now
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-9 flex justify-between sm:flex-nowrap flex-wrap gap-[35px] w-full">
                  <div className=" flex flex-col gap-[15px]">
                    <span className="text-[#FFFFFF] opacity-[0.4] text-[14px] font-[600]">
                      PLATFORM
                    </span>
                    <span className="text-[#FFFFFF] flex flex-col gap-1 text-[18px] font-[400]">
                      Find Work
                      <img src={stroke} className="w-fit" alt="" />
                    </span>
                    <span className="text-[#FFFFFF] flex flex-col gap-1 text-[18px] font-[400]">
                      Find Talent
                    </span>
                    <span className="text-[#FFFFFF] flex flex-col gap-1 text-[18px] font-[400]">
                      Categories
                    </span>
                    <span className="text-[#FFFFFF] flex flex-col gap-1 text-[18px] font-[400]">
                      About Us
                    </span>
                  </div>
                  <div className=" flex flex-col gap-[15px]">
                    <span className="text-[#FFFFFF] opacity-[0.4] text-[14px] font-[600]">
                      CATEGORIES
                    </span>
                    <span className="text-[#FFFFFF] flex flex-col gap-1 text-[18px] font-[400]">
                      Data Science
                    </span>
                    <span className="text-[#FFFFFF] flex flex-col gap-1 text-[18px] font-[400]">
                      IT & Networking
                    </span>
                    <span className="text-[#FFFFFF] flex flex-col gap-1 text-[18px] font-[400]">
                      Web & Mobile
                    </span>
                  </div>
                  <div className=" flex flex-col gap-[15px]">
                    <span className="text-[#FFFFFF] opacity-[0.4] text-[14px] font-[600]">
                      HELP
                    </span>
                    <span className="text-[#FFFFFF] flex flex-col gap-1 text-[18px] font-[400]">
                      FAQ’s
                    </span>
                    <span className="text-[#FFFFFF] flex flex-col gap-1 text-[18px] font-[400]">
                      Contact Us
                    </span>
                  </div>
                  <div className=" flex flex-col gap-[15px]">
                    <span className="text-[#FFFFFF] opacity-[0.4] text-[14px] font-[600]">
                      GET IN TOUCH @
                    </span>
                    <span className="text-[#FFFFFF] flex flex-col gap-1 text-[18px] font-[400]">
                      Instagram
                    </span>
                    <span className="text-[#FFFFFF] flex flex-col gap-1 text-[18px] font-[400]">
                      LinkedIn
                    </span>
                    <span className="text-[#FFFFFF] flex flex-col gap-1 text-[18px] font-[400]">
                      Twitter
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:h-[41px] sm:py-0 py-2 relative px-[16px]">
          <img
            src={stroke_}
            className="w-full  absolute top-0 left-0 right-0"
            alt=""
          />
          <div className="max-w-[1300px] w-full h-full flex sm:flex-row flex-col  m-auto sm:items-center justify-between">
            <span className="text-[#FFFFFF] text-[16px] font-[500]">
              All rights reserved by Zwilt
            </span>
            <div className="flex items-center gap-[36px]">
              <span className="text-[#FFFFFF] text-[16px] cursor-pointer underline opacity-[0.6] font-[500]">
                Privacy Policy
              </span>
              <span className="text-[#FFFFFF] text-[16px] cursor-pointer underline opacity-[0.6] font-[500]">
                Terms and Conditions
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

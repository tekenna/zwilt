/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import SlideCard from "../ui/SlideCard";
import SlideCard2 from "../ui/SlideCard2";
import SlideCard3 from "../ui/SlideCard3";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyChoose = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: null,
    nextArrow: null,
  };
  return (
    <div className="w-full sm:min-h-[1025px] sm:px-[16px]  relative overflow-hidden flex flex-col items-center  ">
      <div className="gradient -skew-y-2 absolute left-0 right-0 bottom-0  w-full h-full"></div>
      <div className="flex xl:flex-row flex-col sm:gap-[95px]  sm:min-h-[1025px] max-w-[1300px] pt-[90px]  items-center w-full h-full z-[9999999]">
        <div className="flex flex-col z-[99999999999999] gap-[37px] w-full min-w-[380px] max-w-[380px]">
          <span className="text-[#202229] md:text-[54px] sm:text-[45px] text-[36px] md:leading-[64px] sm:text-start text-center font-[700]">
            Why choose Zwilt?
          </span>
          <span className="text-[#202229CC] sm:text-[22px] text-[18px] sm:leading-[32px] sm:text-start text-center  font-[400]">
            We take complex hiring processes - and simplify them. Connecting you
            to the world’s highly qualified talent pool.
          </span>
        </div>
        <div className=" w-full overflow-hidden  xl:min-w-[1300px] rounded-[20px] ">
          <Slider {...settings}>
            <SlideCard key={0} />
            <SlideCard2 key={2} />
            <SlideCard3 key={3} />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

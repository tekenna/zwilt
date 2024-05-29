import React from "react";
import card1 from "../../assets/images/card1.svg";
import card2 from "../../assets/images/card2.svg";
import card3 from "../../assets/images/card3.svg";
import card4 from "../../assets/images/card4.svg";

const Floater = () => {
  return (
    <div className="relative w-[658px] h-[602px] flex  justify-center">
      <img
        className="absolute bottom-[-30px] left-[-30px] w-[374px]  "
        src={card1}
        alt=""
      />
      <img
        src={card2}
        alt=""
        className=" absolute top-0 left-[50px] w-[278px] h-[157px]"
      />
      <img
        src={card3}
        alt=""
        className=" h-[408px]  absolute top-[96px] z-[99999]"
      />

      <img
        src={card4}
        alt=""
        className=" w-[280px]  absolute bottom-[40px] right-0 "
      />
    </div>
  );
};

export default Floater;

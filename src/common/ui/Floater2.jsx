import React from "react";
import card5 from "../../assets/images/card5.svg";
import card8 from "../../assets/images/card8.svg";
import card10 from "../../assets/images/card10.svg";

const Floater2 = () => {
  return (
    <div className="relative w-[552px] h-[602px] flex items-center justify-center">
      <img className="absolute top-[60px]  h-[613px] z-[999]  " src={card5} alt="" />
      <img className="absolute  top-0 left-0  w-[98px] " src={card8} alt="" />
      <img className="absolute  right-0  w-[147px] " src={card10} alt="" />
    </div>
  );
};

export default Floater2;

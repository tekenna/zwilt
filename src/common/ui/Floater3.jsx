import React from "react";
import card11 from "../../assets/images/card11.svg";
import card12 from "../../assets/images/card12.svg";
import card10 from "../../assets/images/card10.svg";
import card7 from "../../assets/images/card7.svg";

const Floater3 = () => {
  return (
    <div className="relative w-[550px] h-[602px] flex items-center justify-center">
      <img className="absolute  h-[510px] z-[999]  " src={card11} alt="" />
      <img
        className="absolute  top-0 left-[30px]  w-[300px] "
        src={card12}
        alt=""
      />
      <img className="absolute  right-0  w-[96px] " src={card10} alt="" />
      <img className="absolute left-0 bottom-0  w-[96px] " src={card7} alt="" />
    </div>
  );
};

export default Floater3;

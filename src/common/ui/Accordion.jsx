import React, { useState } from "react";
import player from "../../assets/icons/player1.svg";
import player2 from "../../assets/icons/player2.svg";

const Accordion = ({ open, setOpen, count, q, a, setActive }) => {
  const [delay, setDelay] = useState(false);
  const toggle = () => {
    if (open) {
      setDelay(false);
      setActive("");
      setTimeout(() => {
        setOpen(false);
      }, 100);
    } else {
      setOpen(true);
      setActive(count);
      setTimeout(() => {
        setDelay(true);
      }, 50);
    }
  };
  return (
    <div
      className={`max-w-[635px] h-fit flex flex-col gap-[15px] p-[20px] rounded-[7px] border border-[#F0F0F0] ${
        delay && open ? "bg-[#ffffff]" : "bg-[#F0F0F0]"
      }transition-all ease-in-out duration-300 `}
    >
      <div
        onClick={toggle}
        className="flex gap-[20px] cursor-pointer w-full items-center"
      >
        <span
          className={`w-[57px] h-[57px] transition-all duration-300 ease-in-out ${
            delay && open ? "bg-[#8BA4FD]" : "bg-[#ECECEC]"
          } flex items-center justify-center rounded-full`}
        >
          <img src={delay && open ? player2 : player} alt="" />
        </span>
        <span className="text-[#202229] text-[16px] font-[600]">
          Step {count}: <span className="font-[400]">{q}</span>
        </span>
      </div>
      {open && (
        <span
          className={`text-[#202229] text-[16px] font-[400] leading-[26px] transition-all ease-in-out duration-300  ${
            delay && open
              ? "opacity-[0.8] translate-y-0"
              : "opacity-0 translate-y-[-5px]"
          } `}
        >
          {a}
        </span>
      )}
    </div>
  );
};

export default Accordion;

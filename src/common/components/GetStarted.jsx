import React from "react";
import Card from "../ui/Card";
import { getStarted } from "../../assets/constants/data";

const GetStarted = () => {
  return (
    <div className="w-full flex justify-center sm:pt-[70px] sm:px-[16px] ">
      <div className="w-full max-w-[1300px] flex flex-col gap-[60px] items-center ">
        <span className="text-center text-[#202229] md:text-[54px] sm:text-[45px] text-[36px] px-[20px] font-[700] sm:leading-[64px]">
          Start your journey today.
        </span>
        <div className="flex flex-col gap-[15px] w-full">
          {getStarted.map((g, n) => (
            <Card
              key={n}
              index={n}
              title={g.title}
              color={g.color}
              count={g.count}
              desc={g.desc}
              vector={g.vector}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

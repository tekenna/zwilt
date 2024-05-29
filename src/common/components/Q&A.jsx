import React, { useState } from "react";
import Accordion from "../ui/Accordion";
import { qa } from "../../assets/constants/data";

const QA = () => {
  const [open, setOpen] = useState();
  const [active, setActive] = useState("");
  return (
    <div className="w-full flex justify-center px-[16px] py-[100px] min-h-[992px]">
      <div className="flex flex-col gap-[30px] justify-center max-w-[1300px] w-full">
        <span className="max-w-[570px] text-[#202229] md:text-[54px] sm:text-[45px] text-[36px] font-[700] sm:leading-[64px]">
          How we ensure you’re in good hands.
        </span>
        <span className="max-w-[570px] text-[#1E1515CC] sm:text-[22px] text-[18px] font-[400] leading-[32px]">
          With our comprehensive screening process, we hand-pick highly skilled
          candidates so you can onboard them in a matter of days.
        </span>
        <div className="flex flex-col gap-1">
          {qa.map((q, n) => (
            <Accordion
              key={n}
              count={n + 1}
              q={q.question}
              a={q.ans}
              open={open && active === n + 1}
              setOpen={setOpen}
              setActive={setActive}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QA;

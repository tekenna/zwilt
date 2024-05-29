/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [delay, setDelay] = useState(false);

  const toggle = () => {
    if (open) {
      setDelay(false);
      setTimeout(() => {
        setOpen(false);
      }, 100);
    } else {
      setOpen(true);
      setTimeout(() => {
        setDelay(true);
      }, 100);
    }
  };
  const close = () => {
    if (open) {
      setDelay(false);
      setTimeout(() => {
        setOpen(false);
      }, 100);
    } 
  };
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        close();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggle]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[60px] relative flex  gap-[30px] items-center justify-between bg-[#525AA0] pr-[8.5px] pl-[25px] rounded-[15px] "
    >
      <img className="h-[27.25px] w-fit" src={logo} alt="" />
      <div className="md:flex hidden items-center w-full justify-between max-w-[437px]">
        <span className="text-[#fff] text-[14px] font-[500] cursor-pointer">
          Find Work
        </span>
        <span className="text-[#fff] text-[14px] font-[500] cursor-pointer">
          Find Talent
        </span>
        <span className="text-[#fff] text-[14px] font-[500] cursor-pointer">
          Articles
        </span>
        <span className="text-[#fff] text-[14px] font-[500] cursor-pointer">
          About Us
        </span>
        <span className="text-[#fff] text-[14px] font-[500] cursor-pointer">
          Contact Us
        </span>
      </div>
      <div className="md:flex hidden items-center gap-[16px]">
        <span className="text-[#fff] whitespace-nowrap text-[14px] font-[500] cursor-pointer">
          Log In
        </span>
        <span className="h-[43px] bg-[#fff] w-[102px] cursor-pointer text-[#202229] text-[14px] font-[500] flex items-center justify-center transition-all ease-in-out hover:opacity-[0.9] duration-300 rounded-[16px]">
          Join Now
        </span>
      </div>
      <div className="md:hidden block pr-[20px]">
        {!open && (
          <GiHamburgerMenu
            onClick={toggle}
            className={`text-[#ffff] text-[20px] cursor-pointer md:hidden flex transition-all ease-in-out duration-300 ${
              delay ? "rotate-45 opacity-0" : "rotate-0 opacity-1"
            }  `}
          />
        )}
        {open && (
          <IoCloseSharp
            onClick={toggle}
            className={`text-[#ffff] text-[20px] cursor-pointer md:hidden flex transition-all ease-in-out duration-50 ${
              delay ? "rotate-0 opacity-1" : "rotate-45 opacity-0"
            } `}
          />
        )}
        {open && (
          <div
            className={`absolute top-[50px] w-full min-h-[200px] bg-[#525AA0] px-[25px]  py-[30px] left-0 rounded-b-[15px] md:hidden flex flex-col gap-[24px] transition-all duration-300 ease-in-out ${
              delay ? "translate-y-0" : "translate-y-[-10px]"
            }`}
          >
            <span className="text-[#fff] text-[16px] font-[500] cursor-pointer">
              Find Work
            </span>
            <span className="text-[#fff] text-[16px] font-[500] cursor-pointer">
              Find Talent
            </span>
            <span className="text-[#fff] text-[16px] font-[500] cursor-pointer">
              Articles
            </span>
            <span className="text-[#fff] text-[16px] font-[500] cursor-pointer">
              About Us
            </span>
            <span className="text-[#fff] text-[16px] font-[500] cursor-pointer">
              Contact Us
            </span>
            <span className="text-[#fff] whitespace-nowrap text-[16px] font-[500] cursor-pointer">
              Log In
            </span>
            <span className="h-[43px] bg-[#fff] w-[102px] cursor-pointer text-[#202229] text-[14px] font-[500] flex items-center justify-center transition-all ease-in-out hover:opacity-[0.9] duration-300 rounded-[16px]">
              Join Now
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

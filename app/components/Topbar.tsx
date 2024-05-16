import Image from "next/image";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import Example from "./Example";
import UserDropdown from "./UserDropdown";

const Topbar = () => {
  return (
    <>
      <div className="topbar w-full min-h-16 flex justify-between items-center px-5 bg-[#141414]">
        <Image
          className=""
          src="/assets/images/ggplay/LOGO.svg"
          alt="Generic placeholder image"
          height={300}
          width={240}
        />

        <div className="flex items-center">
          <Example />
          <UserDropdown />
        </div>
      </div>
    </>
  );
};

export default Topbar;

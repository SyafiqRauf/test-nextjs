import Image from "next/image";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import Example from "./Example";
import UserDropdown from "./UserDropdown";
import UserDropdownGGPlay from "./UsereDropDownGGPlay";
import NotificationGGPlay from "./NotificationGGPlay";

const TopbarGGPlay = () => {
  return (
    <>
      <div className="topbar w-full min-h-16 flex justify-between items-center px-5 bg-[#141414]">
        <Image
          className="h-auto"
          src="/assets/images/ggplay/LOGO.svg"
          alt="Generic placeholder image"
          height={240}
          width={240}
        />

        <div className="flex items-center">
          <NotificationGGPlay />
          <UserDropdownGGPlay />
        </div>
      </div>
    </>
  );
};

export default TopbarGGPlay;

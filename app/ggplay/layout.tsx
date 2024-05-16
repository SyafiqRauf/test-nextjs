"use client";

import {
  MdEmojiEvents,
  MdHome,
  MdLightbulbOutline,
  MdOutlineCampaign,
  MdOutlineGamepad,
  MdOutlineMilitaryTech,
} from "react-icons/md";
import SideBarGGPlay from "../components/SideBarGGPlay";
import TopbarGGPlay from "../components/TopBarGGPlay";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menus = [
    {
      href: "#",
      label: "Dashboard",
      icon: <MdHome className="w-7 h-auto" />,
    },
    {
      href: "#",
      label: "Games",
      icon: <MdOutlineGamepad className="w-7 h-auto" />,
    },
    {
      href: "#",
      label: "Quest",
      icon: <MdLightbulbOutline className="w-7 h-auto" />,
    },
    {
      href: "#",
      label: "Tournaments",
      icon: <MdEmojiEvents className="w-7 h-auto" />,
    },
    {
      href: "#",
      label: "Events",
      icon: <MdOutlineCampaign className="w-7 h-auto" />,
    },
    {
      href: "#",
      label: "Rewards",
      icon: <MdOutlineMilitaryTech className="w-7 h-auto" />,
    },
  ];
  return (
    <>
      <TopbarGGPlay></TopbarGGPlay>
      <div className="wrap min-w-screen min-h-screen flex">
        <div className=" sidebar min-h-screen xl:w-72 md:w-20 bg-[#141414] hidden sm:flex sm:flex-col">
          <div className="nav-list text-white">
            <SideBarGGPlay menus={menus} />
          </div>
        </div>
        <div className="main w-full h-full relative overflow-x-hidden ">
          <div className="content flex-1 bg-[#150E16]  p-10 min-h-[90vh]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

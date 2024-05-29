import Head from "next/head";
import Image from "next/image";
import {
  MdEmojiEvents,
  MdHome,
  MdLightbulbOutline,
  MdOutlineCampaign,
  MdOutlineGamepad,
  MdOutlineMilitaryTech,
} from "react-icons/md";
import SideBarGGPlay from "./components/SideBarGGPlay";
import MultiMenusActive from "./components/MultiMenusActive";

export default function Home() {
  const menus = [
    {
      href: "#",
      label: "Dashboard",
      icon: <MdHome className="w-7 h-auto" />,
    },
    {
      href: "#",
      label: "Components",
      icon: <MdOutlineGamepad className="w-7 h-auto" />,
    },
    {
      href: "#",
      label: "Idea",
      icon: <MdLightbulbOutline className="w-7 h-auto" />,
    },
    {
      href: "#",
      label: "Progress",
      icon: <MdEmojiEvents className="w-7 h-auto" />,
    },
    {
      href: "#",
      label: "Testing",
      icon: <MdOutlineCampaign className="w-7 h-auto" />,
    },
    {
      href: "#",
      label: "Project",
      icon: <MdOutlineMilitaryTech className="w-7 h-auto" />,
      submenu: [
        {
          href: "/ggplay/publisher/UserName",
          label: "GGPlay Dashboard User",
          icon: <MdOutlineMilitaryTech className="w-7 h-auto" />,
        },
        {
          href: "#",
          label: "Project 2",
          icon: <MdOutlineMilitaryTech className="w-7 h-auto" />,
        },
        {
          href: "#",
          label: "Project 3",
          icon: <MdOutlineMilitaryTech className="w-7 h-auto" />,
        },
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>Test Main title</title>
      </Head>
      <main className="flex min-h-screen flex-col justify-between bg-black">
        <div className=" min-w-screen min-h-screen flex">
          <div className=" sidebar min-h-screen xl:w-80 md:w-20 bg-[#141414] hidden sm:flex sm:flex-col">
            <div className="nav-list text-white">
              <MultiMenusActive menus={menus} />
            </div>
          </div>
          <div className="main w-full h-full relative overflow-x-hidden grow">
            <div className="content flex-1 bg-[#150E16]  p-10 min-h-screen"></div>
          </div>
        </div>
      </main>
    </>
  );
}

import Image from "next/image";
import MultiMenusActive from "../components/MultiMenusActive";
import Topbar from "../components/Topbar";
import { FaCaretRight, FaHandPointRight, FaHome } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menus = [
    {
      label: "Home",
      icon: <FaHome />,
    },
    {
      label: "UI",
      icon: <FaCaretRight />,
      submenu: [
        {
          label: "Sub Menu 1",
          icon: <FaHandPointRight />,
        },
        {
          label: "Sub Menu 2",
          icon: <FaCircleArrowRight />,
        },
      ],
    },
    {
      label: "Testing",
      icon: <FaHome />,
      submenu: [
        {
          label: "Sub Menu 1",
          submenu: [
            {
              label: "Boom 1",
            },
            {
              label: "Boom 2",
            },
          ],
        },
        {
          label: "Sub Menu 2",
          icon: <FaHome />,
          submenu: [
            {
              label: "Deep 1",
              icon: <FaHome />,
            },
            {
              label: "Deep 2",
              icon: <FaHome />,
              submenu: [
                {
                  label: "Lorem 1",
                  icon: <FaHome />,
                },
                {
                  label: "Lorem 2",
                  icon: <FaHome />,
                  submenu: [
                    {
                      label: "Super Deep",
                      icon: <FaHome />,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Sub Menu 3",
          icon: <FaHome />,
        },
        {
          label: "Sub Menu 4",
          icon: <FaHome />,
          submenu: [
            {
              label: "Last 1",
            },
            {
              label: "Last 2",
            },
            {
              label: "Last 3",
            },
          ],
        },
      ],
    },
    {
      label: "Menu 4",
      icon: <FaHome />,
    },
  ];

  return (
    <>
      <div className="wrap min-w-screen min-h-screen flex">
        <div className=" sidebar min-h-screen xl:w-72 md:w-20 bg-slate-700 hidden sm:flex sm:flex-col">
          <a href="#" className="flex justify-center p-5">
            <Image
              src="/assets/images/Wiks-logos_white.png"
              alt="logo"
              height={50}
              width={80}
              className=""
            />
          </a>
          <div className="nav-list text-white p-4">
            <MultiMenusActive menus={menus} />
          </div>
        </div>
        <div className="main w-full h-full relative overflow-x-hidden">
          <Topbar></Topbar>
          <div className="content flex-1 bg-slate-100 p-4">{children}</div>
          <div className="footer flex h-16 border-t border-slate-300 bg-slate-100 items-center justify-between p-6">
            <div>a</div>
            <div className="flex justify-around gap-5 text-slate-400">
              <a href="/wiks/project">About </a>
              <a href="#">Contact</a>
              <a href="#">Support</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import React, { useState } from "react";

import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const SideBarGGPlay = ({ menus }: any) => {
  const [activeMenus, setActiveMenus]: any = useState([]);
  const [currentMenus, setCurrentMenus] = useState(null);

  const handleMenuClick = (data: any) => {
    console.log(data);
  };

  const handleArrowClick = (menuName: any) => {
    let newActiveMenus: any = [...activeMenus];

    if (newActiveMenus.includes(menuName)) {
      var index = newActiveMenus.indexOf(menuName);
      if (index > -1) {
        newActiveMenus.splice(index, 1);
      }
    } else {
      newActiveMenus.push(menuName);
    }

    setActiveMenus(newActiveMenus);
  };

  const handleSelectedMenu = () => {};

  const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex }: any) => (
    <li className="relative flex xl:block">
      <div
        className={`flex items-center justify-between  hover:text-pink-400 hover:bg-[#2E2E2E] py-2 px-6 transition ease-in-out rounded ${
          currentMenus == menuName ? `text-pink-400 bg-[#2E2E2E]` : `text-white`
        } `}
      >
        <button
          className="flex justify-between items-center gap-4 w-full"
          onClick={() => {
            handleArrowClick(menuName);
            handleMenuClick(activeMenus);
            setCurrentMenus(menuName);
          }}
        >
          <div className="flex items-center gap-4 ">
            {data.icon}
            <span className="hidden xl:block ">{data.label}</span>
          </div>
          {hasSubMenu && (
            <span className="hidden xl:block">
              {activeMenus.includes(menuName) ? (
                <FaChevronDown />
              ) : (
                <FaChevronRight />
              )}
            </span>
          )}
        </button>
      </div>
      <div>
        {hasSubMenu && (
          <SubMenu
            dept={dept}
            data={data.submenu}
            toggle={activeMenus.includes(menuName)}
            menuIndex={menuIndex}
          />
        )}
      </div>
    </li>
  );

  const SubMenu = ({ dept, data, toggle, menuIndex }: any) => {
    if (!toggle) {
      return null;
    }

    dept = dept + 1;

    return (
      <>
        <ul className="pl-2 absolute bg-blue-400 left-16 xl:static xl:bg-transparent z-[2]">
          {data.map((menu: any, index: any) => {
            const menuName = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

            return (
              <ListMenu
                dept={dept}
                data={menu}
                hasSubMenu={menu.submenu}
                menuName={menuName}
                key={menuName}
                menuIndex={index}
              />
            );
          })}
        </ul>
      </>
    );
  };

  return (
    <>
      <ul className="flex flex-col gap-3">
        {menus.map((menu: any, index: any) => {
          const dept = 1;
          const menuName = `sidebar-menu-${dept}-${index}`;

          return (
            <ListMenu
              dept={dept}
              data={menu}
              hasSubMenu={menu.submenu}
              menuName={menuName}
              key={menuName}
              menuIndex={index}
            />
          );
        })}
      </ul>
    </>
  );
};

export default SideBarGGPlay;

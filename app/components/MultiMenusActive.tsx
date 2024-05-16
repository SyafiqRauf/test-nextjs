"use client";

import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";

import {
  FaArrowAltCircleRight,
  FaChevronDown,
  FaChevronRight,
  FaHome,
} from "react-icons/fa";

const MultiMenusActive = ({ menus }: any) => {
  const [activeMenus, setActiveMenus] = useState([]);
  const [currentMenus, setCurrentMenus] = useState(null);
  // const [branchMenus, setBranchMenus] = useState([]);
  // const [treeMenus, setTreeMenus] = useState([]);
  // const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (data) => {
    console.log(data);
  };

  const handleArrowClick = (menuName) => {
    let newActiveMenus = [...activeMenus];

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
        className={`flex items-center justify-between px-4 hover:text-slate-300 transition ease-in-out ${
          activeMenus.includes(menuName) && hasSubMenu
            ? `text-slate-200`
            : `text-slate-400`
        } ${currentMenus === menuName && !hasSubMenu ? `text-blue-400` : ``}`}
      >
        <button
          onClick={() => {
            handleArrowClick(menuName);
            handleMenuClick(activeMenus);
            setCurrentMenus(menuName);
          }}
          className="flex justify-between items-center gap-4 w-full"
        >
          <div className="flex items-center gap-2">
            {data.icon}
            <span className="hidden xl:block">{data.label}</span>
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
        {menus.map((menu, index) => {
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

// MultiMenus.propTypes = {
//   menus: PropTypes.node,
// };

export default MultiMenusActive;

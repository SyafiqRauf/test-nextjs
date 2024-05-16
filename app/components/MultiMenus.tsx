"use client";

import React, { useState } from "react";
import {
  FaArrowAltCircleRight,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

const MultiMenus = ({ menus }: any) => {
  const [activeMenus, setActiveMenus] = useState([]);
  const [currentMenus, setCurrentMenus] = useState(null);

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

  const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex }: any) => (
    <li className="relative flex items-start">
      <div
        className={`bg-blue-500 flex items-center justify-between px-4 hover:text-slate-300 transition ease-in-out ${
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
      <div className="">
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
        <ul className="pl-2">
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
      <ul>
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

export default MultiMenus;

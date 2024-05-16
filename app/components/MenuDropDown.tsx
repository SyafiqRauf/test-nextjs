import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const MenuDropDown = ({ dataset, selectitem }: any) => {
  const [activeSelected, setActiveSelected] = useState("Select");

  return (
    <>
      <Menu as="div" className="relative ">
        <Menu.Button className={`flex w-full`}>
          <div
            className={`flex flex-1 w-full bg-black p-3 rounded-md justify-between items-center text-sm font-normal font-['Noto Sans'] leading-snug ${
              activeSelected == "Select" ? `text-[#999999]` : `text-white`
            }  `}
          >
            <span>{activeSelected}</span>
            <FaChevronDown />
          </div>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute flex flex-col w-full z-10 bg-black text-white p-3 rounded-md mt-3 text-sm font-normal font-['Noto Sans'] leading-snug`}
          >
            {dataset.map((data: any, index: any) => (
              <Menu.Item key={data}>
                {({ active }) => (
                  <div
                    className={`${
                      active && "bg-blue-500"
                    } items-start justify-start flex cursor-pointer`}
                    onClick={() => {
                      setActiveSelected(data);
                      selectitem(index);
                    }}
                  >
                    {data}
                  </div>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default MenuDropDown;

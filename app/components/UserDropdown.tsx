"use client";

import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

const UserDropdown = () => {
  const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl: "/assets/images/ggplay/default_profile.png",
  };
  const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
    { name: "Reports", href: "#", current: false },
  ];
  const userNavigation = [
    { name: "My Profile", href: "#" },
    { name: "Balance", href: "#" },
    { name: "Settings", href: "#" },
  ];

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <Menu as="div" className="relative ml-3">
          <div className="flex items-center justify-center">
            <Menu.Button className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                className="object-cover w-full h-full"
                src="/assets/images/ggplay/default_profile.png"
                alt="Generic placeholder image"
                height={32}
                width={48}
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 flex flex-col z-10 p-4 mt-2 w-64 origin-top-right rounded-md bg-zinc-900 text-white shadow-lg ring-2 ring-[#524656] ring-opacity-5 focus:outline-none">
              <div className="p-[10px] border-[0.5px] rounded">
                <div className="flex gap-5 ">
                  <div className="flex-none  w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      className="object-cover w-full h-full"
                      src="/assets/images/ggplay/default_profile.png"
                      alt="Generic placeholder image"
                      height={32}
                      width={32}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span>ditoalpachno</span>
                    <span>balance</span>
                  </div>
                </div>
              </div>
              <div className="w-[220px] h-[72px] p-2.5 bg-zinc-900 rounded shadow border border-neutral-700 flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch h-[52px] pb-3 flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch justify-start items-center gap-[19px] inline-flex">
                    <div className="flex-none  w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        className="object-cover w-full h-full"
                        src="/assets/images/ggplay/default_profile.png"
                        alt="Generic placeholder image"
                        height={32}
                        width={32}
                      />
                    </div>
                    <div className="flex-col justify-start items-start gap-1 inline-flex">
                      <div className="text-white text-base font-semibold font-['Noto Sans'] leading-tight">
                        ditoalpachino
                      </div>
                      <div className="justify-start items-center gap-2 inline-flex">
                        <div className="text-white text-[10px] font-normal font-['Noto Sans'] leading-none">
                          Balance :
                        </div>
                        <div className="justify-start items-center gap-1 flex">
                          <div className="w-[17.51px] h-4 relative">
                            <div className="w-[17.51px] h-4 left-0 top-0 absolute">
                              <div className="w-[13.55px] h-[13.55px] left-[3.97px] top-[1.99px] absolute">
                                <div className="w-[13.55px] h-[13.55px] left-0 top-0 absolute rounded-full" />
                                <div className="w-[13.55px] h-[13.55px] left-0 top-0 absolute">
                                  <div className="w-[13.55px] h-[13.55px] left-0 top-0 absolute bg-black rounded-full" />
                                  <div className="w-[12.45px] h-[12.45px] left-[0.99px] top-[0.22px] absolute rounded-full" />
                                  <div className="w-[11.44px] h-[11.44px] left-[1.96px] top-[0.40px] absolute rounded-full" />
                                </div>
                              </div>
                              <div className="w-[12.13px] h-4 left-0 top-0 absolute"></div>
                            </div>
                          </div>
                          <div className="text-white text-[10px] font-normal font-['Noto Sans'] leading-none">
                            300 GXT
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <Link
                      href={item.href}
                      className={classNames(
                        active ? " " : "",
                        "block mt-[10px] py-2 text-sm text-white hover:text-gray-300"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </Menu.Item>
              ))}
              <div className="border-b-[0.5px] p-1 border-[#4B4A4A] mt-[10px]"></div>
              <Menu.Item key={"sign out"}>
                {({ active }) => (
                  <Link
                    href="#"
                    className={classNames(
                      active ? "" : "",
                      "block mt-[10px] py-2 text-sm text-white hover:text-gray-300"
                    )}
                  >
                    Sign Out
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
};

export default UserDropdown;

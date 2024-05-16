"use client";

import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { HiOutlineBell } from "react-icons/hi";

const NotificationGGPlay = () => {
  const Notification = [
    { desc: "Notif 1", href: "#", Title: "Title 1" },
    { desc: "Notif 2", href: "#" },
    { desc: "Notif 3", href: "#" },
  ];

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <Menu as="div" className="relative ml-3">
          <div className="flex items-center justify-center">
            <Menu.Button className="w-10 h-10 rounded-full overflow-hidden bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className=""
              >
                <rect width="40" height="40" rx="20" fill="#292929" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.0924 12.1676C17.4118 11.0947 18.3488 10 19.7366 10C21.1248 10 22.0609 11.0947 22.3828 12.1657C22.3844 12.1677 22.3865 12.1702 22.3893 12.1731C22.3959 12.1799 22.4034 12.1863 22.4105 12.1912C22.4158 12.1949 22.4191 12.1965 22.4195 12.1967C23.2274 12.5293 24.1783 13.0607 24.922 14.0335C25.6717 15.0141 26.1594 16.3754 26.1594 18.2746C26.1594 20.1681 26.3592 21.2065 26.6534 21.9194C26.9113 22.5444 27.2505 22.9552 27.7332 23.5398C27.8037 23.6252 27.8772 23.7143 27.9541 23.8083L27.9542 23.8086C28.8438 24.8982 28.0038 26.4286 26.6335 26.4286H23.3081C23.3081 27.3758 22.9318 28.2842 22.262 28.954C21.5922 29.6237 20.6838 30 19.7366 30C18.7894 30 17.881 29.6237 17.2113 28.954C16.5415 28.2842 16.1652 27.3758 16.1652 26.4286H12.8442C11.4764 26.4286 10.6223 24.906 11.5192 23.8083C11.5961 23.7143 11.6697 23.6251 11.7402 23.5396C12.2228 22.9551 12.5621 22.5442 12.8203 21.9192C13.1147 21.2063 13.315 20.1679 13.3161 18.2746M17.5938 26.4286C17.5938 26.9969 17.8195 27.5419 18.2214 27.9438C18.6233 28.3457 19.1683 28.5714 19.7366 28.5714C20.305 28.5714 20.85 28.3457 21.2519 27.9438C21.6537 27.5419 21.8795 26.9969 21.8795 26.4286H17.5938ZM12.8442 25C12.6974 25 12.6313 24.9324 12.6048 24.8804C12.5895 24.8505 12.5849 24.8214 12.5871 24.7971C12.5891 24.7756 12.597 24.747 12.6254 24.7123L12.6255 24.7122C12.6945 24.6278 12.764 24.544 12.8336 24.4601C13.3124 23.8831 13.7949 23.3015 14.1406 22.4645C14.538 21.5025 14.7435 20.2497 14.7447 18.275V18.2746C14.7447 16.6292 15.1612 15.5887 15.6877 14.9002C16.2201 14.2041 16.9176 13.7987 17.6 13.5177C17.6 13.5177 17.6001 13.5176 17.6001 13.5176C17.9638 13.368 18.3267 13.0347 18.4577 12.5882L18.4582 12.5864C18.6615 11.8872 19.1867 11.4286 19.7366 11.4286C20.2866 11.4286 20.812 11.8868 21.0178 12.5875L21.0184 12.5893C21.1487 13.0284 21.5077 13.3664 21.8754 13.5176C22.5563 13.798 23.2542 14.2041 23.7871 14.9011C24.3141 15.5904 24.7308 16.6313 24.7308 18.2746C24.7308 20.2493 24.9357 21.5022 25.3328 22.4644C25.6783 23.3015 26.161 23.8832 26.6398 24.4603C26.7094 24.5441 26.7788 24.6278 26.8478 24.7122C26.8925 24.7671 26.8961 24.824 26.8671 24.8813C26.84 24.9347 26.775 25 26.6335 25H12.8442ZM17.0924 12.1676C17.0911 12.1691 17.0896 12.1708 17.0877 12.1728C17.0816 12.1791 17.0744 12.1852 17.0673 12.1901C17.0606 12.1947 17.0566 12.1965 17.0566 12.1965L17.0562 12.1967C16.2479 12.5295 15.2967 13.0598 14.5529 14.0324C13.8032 15.0126 13.3162 16.3737 13.3161 18.2741"
                  fill="#ADADAD"
                />
              </svg>
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
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm">Notification</span>
                <button className="font-extralight text-xs hover:text-gray-300">
                  Clear All
                </button>
              </div>
              {Notification.map((item) => (
                <Menu.Item key={item.desc}>
                  {({ active }) => (
                    <Link
                      href={item.href}
                      className={classNames(
                        active ? " " : "",
                        "block mt-[10px] py-2 text-sm text-white hover:text-gray-300"
                      )}
                    >
                      {item.desc}
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
                      " mt-[10px] py-2 text-sm text-blue-400 hover:text-gray-300 flex text-center justify-center"
                    )}
                  >
                    View All
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

export default NotificationGGPlay;

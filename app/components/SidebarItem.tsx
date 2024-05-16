"use client";

import { Disclosure } from "@headlessui/react";
import React from "react";

const SidebarItem = () => {
  return (
    <>
      <Disclosure>
        <Disclosure.Button className="py-2">
          test button Disclosure
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500 ">
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
        </Disclosure.Panel>
      </Disclosure>
    </>
  );
};

export default SidebarItem;

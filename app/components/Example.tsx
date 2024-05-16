"use client";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const people = [
  {
    id: 1,
    name: "Wade Cooper",
    avatar: "/assets/images/users/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Arlene Mccoy",
    avatar: "/assets/images/users/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Devon Webb",
    avatar: "/assets/images/users/avatar-3.jpg",
  },
  {
    id: 4,
    name: "Tom Cook",
    avatar: "/assets/images/users/avatar-4.jpg",
  },
  {
    id: 5,
    name: "Tanya Fox",
    avatar: "/assets/images/users/avatar-5.jpg",
  },
  {
    id: 6,
    name: "Hellen Schmidt",
    avatar: "/assets/images/users/avatar-6.jpg",
  },
  {
    id: 7,
    name: "Caroline Schultz",
    avatar: "/assets/images/users/avatar-7.jpg",
  },
  {
    id: 8,
    name: "Mason Heaney",
    avatar: "/assets/images/users/avatar-8.jpg",
  },
  {
    id: 9,
    name: "Claudie Smitham",
    avatar: "/assets/images/users/avatar-9.jpg",
  },
  {
    id: 10,
    name: "Emil Schaefer",
    avatar: "/assets/images/users/avatar-10.jpg",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [selected, setSelected] = useState(people[1]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
            Assigned to
          </Listbox.Label>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <Image
                  src={selected.avatar}
                  alt=""
                  className="h-5 w-5 flex-shrink-0 rounded-full"
                  width={20}
                  height={20}
                />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <Image
                            src={person.avatar}
                            alt=""
                            className="h-5 w-5 flex-shrink-0 rounded-full"
                            width={20}
                            height={20}
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}

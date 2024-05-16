import React from "react";
import RadioTest from "../components/RadioGroup";
import FAQ from "../components/FAQ";
import MultiMenus from "../components/MultiMenus";
import MultiMenusActive from "../components/MultiMenusActive";
import TestMenu from "../components/TestMenu";

const menus = [
  {
    id: "1",
    label: "Menu 1",
  },
  {
    id: "2",
    label: "Menu 2",
    submenu: [
      {
        id: "2.1",
        label: "Sub Menu 1",
      },
      {
        id: "2.2",
        label: "Sub Menu 2",
      },
    ],
  },
  {
    id: "3",
    label: "Menu 3",
    submenu: [
      {
        id: "3.1",
        label: "Sub Menu 1",
        submenu: [
          {
            id: "3.1.1",
            label: "Boom 1",
          },
          {
            id: "3.1.1",
            label: "Boom 2",
          },
        ],
      },
      {
        id: "3.2",
        label: "Sub Menu 2",
        submenu: [
          {
            id: "3.2.1",
            label: "Deep 1",
          },
          {
            id: "3.2.2",
            label: "Deep 2",
            submenu: [
              {
                id: "3.2.2.1",
                label: "Lorem 1",
              },
              {
                id: "3.2.2.2",
                label: "Lorem 2",
                submenu: [
                  {
                    id: "3.2.2.2.1",
                    label: "Super Deep",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "3.3",
        label: "Sub Menu 3",
      },
      {
        id: "3.4",
        label: "Sub Menu 4",
        submenu: [
          {
            id: "3.4.1",
            label: "Last 1",
          },
          {
            id: "3.4.2",
            label: "Last 2",
          },
          {
            id: "3.4.3",
            label: "Last 3",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    label: "Menu 4",
  },
];
const faqContent = [
  {
    id: 1,
    question: "q1",
    answer: "a1",
  },
  {
    id: 2,

    question: "q2",
    answer: "a2",
  },
  {
    id: 3,

    question: "q3",
    answer: "a3",
  },
  {
    id: 4,
    question: "q4",
    answer: "a4",
  },
];

const page = () => {
  return (
    <>
      <div className="max-w-screen min-h-screen bg-slate-600 p-4">
        <RadioTest></RadioTest>
        <FAQ faqContent={faqContent}></FAQ>
        <div className="">
          <MultiMenus menus={menus}></MultiMenus>
        </div>
        <TestMenu />
      </div>
    </>
  );
};

export default page;

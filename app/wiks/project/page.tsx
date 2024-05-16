"use client";

import CardProfile from "@/app/components/CardProfile";
import PageTitleNav from "@/app/components/PageTitleNav";
import { PlusIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { comment } from "postcss";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { BsChatText } from "react-icons/bs";
import { GrTask } from "react-icons/gr";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const projectlist = [
  {
    label: "project1",
    status: "ongoing",
    desc: "Lorem ipsum",
    tasks: [
      {
        label: "Main Task 1",
      },
      {
        label: "Main Task 2",
      },
    ],
    comments: [
      {
        comment: "test comment 1",
      },
      {
        comment: "test comment 2",
      },
      {
        comment: "test comment 3",
      },
    ],
    member: [
      {
        user: "user1",
        avatar: "avatar-1.jpg",
      },
      {
        user: "user2",
        avatar: "avatar-2.jpg",
      },
      {
        user: "user3",
        avatar: "avatar-3.jpg",
      },
    ],
    progress: 50,
  },
  {
    label: "project2",
    status: "finished",
    desc: "Lorem ipsum Desc",
    tasks: [
      {
        label: "Main Task 1",
      },
      {
        label: "Main Task 2",
      },
    ],
    comments: [
      {
        comment: "test comment 1",
      },
      {
        comment: "test comment 2",
      },
      {
        comment: "test comment 3",
      },
      {
        comment: "test comment 4",
      },
    ],
    member: [
      {
        user: "user4",
        avatar: "avatar-4.jpg",
      },
      {
        user: "user5",
        avatar: "avatar-5.jpg",
      },
      {
        user: "user6",
        avatar: "avatar-6.jpg",
      },
      {
        user: "user7",
        avatar: "avatar-7.jpg",
      },
      {
        user: "user8",
        avatar: "avatar-8.jpg",
      },
    ],
    progress: 100,
  },
];
const Page = () => {
  const [activeStatus, setActiveStatus] = useState("all");
  const handleMenuClick = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-[83vh]">
      <PageTitleNav></PageTitleNav>
      <div className="flex justify-between items-center my-4">
        <button className="bg-green-300 hover:bg-green-400 px-4 py-2 rounded-full flex items-center justify-center gap-1">
          <PlusIcon className="w-5 font-light " /> Add New
        </button>{" "}
        <div>
          <button
            className={`bg-blue-300 px-6 py-2 mr-3 rounded  hover:bg-opacity-90 ${
              activeStatus == "all" ? `bg-opacity-75` : ``
            }`}
            onClick={() => {
              setActiveStatus("all");
              handleMenuClick(activeStatus);
            }}
          >
            All
          </button>
          <button
            className={`bg-blue-300 px-6 py-2    hover:bg-opacity-90 ${
              activeStatus == "ongoing" ? `bg-opacity-75` : ``
            }`}
            onClick={() => {
              setActiveStatus("ongoing");
              handleMenuClick(activeStatus);
            }}
          >
            Ongoing
          </button>
          <button
            className={`bg-blue-300 px-6 py-2    hover:bg-opacity-90 ${
              activeStatus == "finished" ? `bg-opacity-75` : ``
            }`}
            onClick={() => {
              setActiveStatus("finished");
              handleMenuClick(activeStatus);
            }}
          >
            Finished
          </button>
          <button className="bg-blue-300 px-6 py-2 ml-3">List</button>
          <button className="bg-blue-300 px-6 py-2">Tiles</button>
        </div>
      </div>
      <div className=" grid grid-cols-4 gap-4">
        {projectlist.map((data, index) => {
          return (
            <>
              {(data.status == activeStatus || activeStatus == "all") && (
                <div
                  className="flex flex-col bg-white p-4 min-h-40"
                  key={data.label}
                >
                  <div className="flex justify-between">
                    <span className="font-semibold ">{data.label}</span>
                    <button>
                      <HiOutlineDotsHorizontal />
                    </button>
                  </div>
                  <div className="">
                    <span className="inline-flex items-center bg-green-500 px-2 py-1 text-xs font-medium rounded text-green-50 ring-1 ring-inset ring-green-600/20 flex-none mt-2">
                      {data.status}
                    </span>
                  </div>
                  <div className=" text-xs text-slate-500 my-4">
                    {data.desc}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <GrTask />
                      {data.tasks.length} task
                    </div>
                    <div className="flex items-center gap-1">
                      <BsChatText />
                      {data.comments.length}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 my-2">
                    {data.member.map((userdata, userindex) => {
                      if (userindex < 3) {
                        return (
                          <Image
                            className="rounded-full border-slate-600"
                            src={`/assets/images/users/${userdata.avatar}`}
                            alt="test"
                            width={24}
                            height={100}
                            title={userdata.user}
                            key={userdata.user}
                          />
                        );
                      } else if (userindex === 3) {
                        return `+ ${data.member.length - 3}`;
                      }
                    })}
                  </div>
                  <div className="flex justify-between">
                    <span>progress</span>
                    <span>{data.progress}%</span>
                  </div>
                  <div className="bg-slate-200 w-full h-1.5 my-4 rounded">
                    <div
                      className={`bg-blue-400 w-[${data.progress}%] h-full rounded`}
                    ></div>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Page;

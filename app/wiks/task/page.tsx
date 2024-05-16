"use client";

import CardExperience from "@/app/components/CardExperience";
import CardProfile from "@/app/components/CardProfile";
import DetailTaskCard from "@/app/components/DetailTaskCard";
import PageTitleNav from "@/app/components/PageTitleNav";
import PostNew from "@/app/components/PostNew";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";
import { FaRegCommentDots, FaShare, FaShareAlt } from "react-icons/fa";
import { GoTasklist } from "react-icons/go";
import { GrChat } from "react-icons/gr";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";

const alltasks = [
  {
    date: "past date",
    tasks: [
      {
        label: "Task 11",
        avatar: "avatar-1.jpg",
        assignto: "user1",
        deadline: "Today 10 am",
        priority: "high",
        desc: "Lorem ipsum",
        subtask: [
          {
            list: "testlist1",
          },
          {
            list: "testlist2",
          },
          {
            list: "testlist3",
          },
        ],
        comments: [
          {
            user: "user1",
            avatar: "avatar-1.jpg",
            commentedtime: "1 hour ago",
            comment: "testcomment1",
            replied: [
              {
                user: "user4",
                avatar: "avatar-4.jpg",
                commentedtime: "1 hour ago",
                comment: "testcomment1replied",
              },
              {
                user: "user5",
                avatar: "avatar-5.jpg",
                commentedtime: "1 hour ago",
                comment: "testcomment1replied2",
              },
            ],
          },
          {
            user: "user2",
            avatar: "avatar-2.jpg",
            commentedtime: "2 hour ago",
            comment: "testcomment2",
            replied: [
              {
                user: "user1",
                avatar: "avatar-1.jpg",
                commentedtime: "1 hour ago",
                comment: "testcomment2replied",
              },
            ],
          },
        ],
      },
      {
        label: "Task 2",
        avatar: "avatar-2.jpg",
        assignto: "user2",
        deadline: "Today 1 pm",
        priority: "low",
        desc: "Lorem ipsum",
        subtask: [
          {
            list: "testlist21",
          },
          {
            list: "testlist22",
          },
        ],
        comments: [
          {
            user: "user1",
            avatar: "avatar-1.jpg",
            commentedtime: "1 hour ago",
            comment: "testcomment21",
          },
          {
            user: "user1",
            avatar: "avatar-1.jpg",
            commentedtime: "1 hour ago",
            comment: "testcomment22",
          },
          {
            user: "user1",
            avatar: "avatar-1.jpg",
            commentedtime: "1 hour ago",
            comment: "testcomment32",
          },
        ],
      },
      {
        label: "Task 3",
        avatar: "avatar-3.jpg",
        assignto: "user3",
        deadline: "Today 4 pm",
        priority: "mid",
        desc: "Lorem ipsum",
        subtask: [
          {
            list: "testlist31",
          },
          {
            list: "testlist32",
          },
          {
            list: "testlist33",
          },
          {
            list: "testlist34",
          },
        ],
        comments: [
          {
            user: "user1",
            avatar: "avatar-1.jpg",
            commentedtime: "1 hour ago",
            comment: "testcomment31",
          },
          {
            user: "user1",
            avatar: "avatar-1.jpg",
            commentedtime: "1 hour ago",
            comment: "testcomment32",
          },
        ],
      },
    ],
  },
  {
    date: "today",
    tasks: [
      {
        label: "Task 111",
        avatar: "avatar-1.jpg",
        assignto: "user1",
        deadline: "Today 10 am",
        priority: "high",
        desc: "Lorem ipsum",
        subtask: [
          {
            list: "testlist1",
          },
          {
            list: "testlist2",
          },
          {
            list: "testlist3",
          },
        ],
      },
      {
        label: "Task 2",
        avatar: "avatar-2.jpg",
        assignto: "user2",
        deadline: "Today 1 pm",
        priority: "low",
        desc: "Lorem ipsum",
        subtask: [
          {
            list: "testlist21",
          },
          {
            list: "testlist22",
          },
        ],
        comments: [
          {
            user: "user1",
            avatar: "avatar-1.jpg",
            commentedtime: "1 hour ago",
            comment: "testcomment21",
          },
          {
            user: "user1",
            avatar: "avatar-1.jpg",
            commentedtime: "1 hour ago",
            comment: "testcomment22",
          },
          {
            user: "user1",
            avatar: "avatar-1.jpg",
            commentedtime: "1 hour ago",
            comment: "testcomment32",
          },
        ],
      },
      {
        label: "Task 3",
        avatar: "avatar-3.jpg",
        assignto: "user3",
        deadline: "Today 4 pm",
        priority: "mid",
        desc: "Lorem ipsum",
        subtask: [
          {
            list: "testlist31",
          },
          {
            list: "testlist32",
          },
          {
            list: "testlist33",
          },
          {
            list: "testlist34",
          },
        ],
        comments: [
          {
            user: "user1",
            avatar: "avatar-1.jpg",
            commentedtime: "1 hour ago",
            comment: "testcomment31",
          },
          {
            user: "user1",
            avatar: "avatar-1.jpg",
            commentedtime: "1 hour ago",
            comment: "testcomment32",
          },
        ],
      },
    ],
  },
  {
    date: "upcoming",
    tasks: [
      {
        label: "Task 111",
        avatar: "avatar-1.jpg",
        assignto: "user1",
        deadline: "Today 10 am",
        priority: "high",
        desc: "Lorem ipsum",
        subtask: [
          {
            list: "testlist1",
          },
          {
            list: "testlist2",
          },
          {
            list: "testlist3",
          },
        ],
        comments: [
          {
            user: "user1",
            avatar: "avatar-1.jpg",
            commentedtime: "1 hour ago",
            comment: "testcomment1",
            replied: [
              {
                user: "user1",
                avatar: "avatar-1.jpg",
                commentedtime: "1 hour ago",
                comment: "testcomment1replied",
              },
              {
                user: "user1",
                avatar: "avatar-1.jpg",
                commentedtime: "1 hour ago",
                comment: "testcomment1replied2",
              },
            ],
          },
          {
            user: "user2",
            avatar: "avatar-2.jpg",
            commentedtime: "2 hour ago",
            comment: "testcomment2",
            replied: [
              {
                user: "user1",
                avatar: "avatar-1.jpg",
                commentedtime: "1 hour ago",
                comment: "testcomment2replied",
              },
            ],
          },
        ],
      },
      {
        label: "Task 2",
        avatar: "avatar-2.jpg",
        assignto: "user2",
        deadline: "Today 1 pm",
        priority: "low",
        desc: "Lorem ipsum",
        subtask: [
          {
            list: "testlist21",
          },
          {
            list: "testlist22",
          },
        ],
        comments: [
          {
            user: "user1",
            avatar: "avatar-1.jpg",
            commentedtime: "1 hour ago",
            comment: "testcomment21",
          },
          {
            user: "user1",
            avatar: "avatar-1.jpg",
            commentedtime: "1 hour ago",
            comment: "testcomment22",
          },
          {
            user: "user1",
            avatar: "avatar-1.jpg",
            commentedtime: "1 hour ago",
            comment: "testcomment32",
          },
        ],
      },
      {
        label: "Task 3",
        avatar: "avatar-3.jpg",
        assignto: "user3",
        deadline: "Today 4 pm",
        priority: "mid",
        desc: "Lorem ipsum",
        subtask: [
          {
            list: "testlist31",
          },
          {
            list: "testlist32",
          },
          {
            list: "testlist33",
          },
          {
            list: "testlist34",
          },
        ],
        comments: [
          {
            user: "user1",
            avatar: "avatar-1.jpg",
            commentedtime: "1 hour ago",
            comment: "testcomment31",
          },
          {
            user: "user1",
            avatar: "avatar-1.jpg",
            commentedtime: "1 hour ago",
            comment: "testcomment32",
          },
        ],
      },
    ],
  },
];
const tasks = [
  {
    label: "Task 11",
    avatar: "avatar-1.jpg",
    assignto: "user1",
    deadline: "Today 10 am",
    priority: "high",
    desc: "Lorem ipsum",
    subtask: [
      {
        list: "testlist1",
      },
      {
        list: "testlist2",
      },
      {
        list: "testlist3",
      },
    ],
    comments: [
      {
        user: "user1",
        avatar: "avatar-1.jpg",
        commentedtime: "1 hour ago",
        comment: "testcomment1",
        replied: [
          {
            user: "user1",
            avatar: "avatar-1.jpg",
            commentedtime: "1 hour ago",
            comment: "testcomment1replied",
          },
          {
            user: "user1",
            avatar: "avatar-1.jpg",
            commentedtime: "1 hour ago",
            comment: "testcomment1replied2",
          },
        ],
      },
      {
        user: "user2",
        avatar: "avatar-2.jpg",
        commentedtime: "2 hour ago",
        comment: "testcomment2",
        replied: [
          {
            user: "user1",
            avatar: "avatar-1.jpg",
            commentedtime: "1 hour ago",
            comment: "testcomment2replied",
          },
        ],
      },
    ],
  },
  {
    label: "Task 2",
    avatar: "avatar-2.jpg",
    assignto: "user2",
    deadline: "Today 1 pm",
    priority: "low",
    desc: "Lorem ipsum",
    subtask: [
      {
        list: "testlist21",
      },
      {
        list: "testlist22",
      },
    ],
    comments: [
      {
        user: "user1",
        avatar: "avatar-1.jpg",
        commentedtime: "1 hour ago",
        comment: "testcomment21",
      },
      {
        user: "user1",
        avatar: "avatar-1.jpg",
        commentedtime: "1 hour ago",
        comment: "testcomment22",
      },
      {
        user: "user1",
        avatar: "avatar-1.jpg",
        commentedtime: "1 hour ago",
        comment: "testcomment32",
      },
    ],
  },
  {
    label: "Task 3",
    avatar: "avatar-3.jpg",
    assignto: "user3",
    deadline: "Today 4 pm",
    priority: "mid",
    desc: "Lorem ipsum",
    subtask: [
      {
        list: "testlist31",
      },
      {
        list: "testlist32",
      },
      {
        list: "testlist33",
      },
      {
        list: "testlist34",
      },
    ],
    comments: [
      {
        user: "user1",
        avatar: "avatar-1.jpg",
        commentedtime: "1 hour ago",
        comment: "testcomment31",
      },
      {
        user: "user1",
        avatar: "avatar-1.jpg",
        commentedtime: "1 hour ago",
        comment: "testcomment32",
      },
    ],
  },
];

const Page = () => {
  const [activeTask, setActiveTask] = useState(0);
  const [activeDate, setActiveDate] = useState(0);
  const handleMenuClick = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-[83vh]">
      <div className="main-content h-auto md:flex md:flex-row  gap-5">
        <div className="basis-4/6 flex flex-col mb-3 gap-3">
          <PageTitleNav></PageTitleNav>
          {alltasks.map((datedtasks, datedindex) => {
            return (
              <div key={datedtasks.date}>
                <div className="">{datedtasks.date}</div>
                <div className="card1 w-full bg-white p-4 flex flex-col rounded">
                  <ul className=" flex flex-col gap-4">
                    {datedtasks.tasks.map((data, index) => {
                      return (
                        <li
                          className="flex justify-between items-center w-full "
                          key={data.label}
                        >
                          <div
                            className="basis-5/12 font-medium opacity-75
                          "
                          >
                            <button
                              onClick={() => {
                                setActiveTask(index);
                                setActiveDate(datedindex);
                                handleMenuClick(
                                  "hari " + activeDate + " data " + activeTask
                                );
                              }}
                            >
                              {data.label}
                            </button>
                          </div>
                          <div className="basis-2/12 text-center">
                            <Image
                              className="mx-auto rounded-full border-slate-600"
                              src={`/assets/images/users/${data.avatar}`}
                              alt="test"
                              width={24}
                              height={100}
                              title={data.assignto}
                            />
                          </div>
                          <div className="basis-5/12 text-right float-right">
                            <div className="flex float-right gap-5">
                              <span className="flex items-center gap-2">
                                <IoCalendarOutline /> {data.deadline}
                              </span>
                              <span className="flex items-center gap-2">
                                <GoTasklist /> -/{data.subtask.length}
                              </span>
                              <span className="flex items-center gap-2">
                                <BsChatText />
                                {data.comments?.length || 0}
                              </span>
                              <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                {data.priority}
                              </span>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <div className="basis-2/6 ">
          <DetailTaskCard
            alltasks={alltasks}
            activetask={activeTask}
            activedate={activeDate}
            idchecked={`task-${activeDate}-${activeTask}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;

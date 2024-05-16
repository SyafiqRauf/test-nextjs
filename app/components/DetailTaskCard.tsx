"use client";

import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import PostNew from "./PostNew";
import { Menu } from "@headlessui/react";

const DetailTaskCard = ({
  alltasks,
  activetask,
  activedate,
  idchecked,
}: any) => {
  const [isChecked, setIsChecked] = useState(false);
  const [checkedList, setCheckedList] = useState([]);

  const handleCheckedList = (idChecked) => {
    let newCheckedList = [...checkedList];

    if (newCheckedList.includes(idChecked)) {
      var index = newCheckedList.indexOf(idChecked);
      if (index > -1) {
        newCheckedList.splice(index, 1);
      }
    } else {
      newCheckedList.push(idChecked);
    }

    setCheckedList(newCheckedList);
  };

  return (
    <>
      <div className="card1 min-h-96 w-full bg-white p-4 flex flex-col rounded">
        <div className="flex justify-between items-center border-b pb-3">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id={idchecked}
              onChange={() => {
                setIsChecked(!isChecked);
                handleCheckedList({ idchecked });
              }}
              // checked={checkedList.includes({ idChecked }) ? true : false}
            />
            <button
              onClick={() => {
                console.log(checkedList);
              }}
            >
              mark as complete
            </button>
          </div>

          <Menu as="div" className="relative">
            <Menu.Button>
              <HiOutlineDotsHorizontal />
            </Menu.Button>
            <Menu.Items className="absolute right-0 top-5 flex flex-col bg-white border rounded px-4 py-2 gap-3 max-w-48">
              <Menu.Item>
                {({ active }) => (
                  <a className={`${active && "bg-blue-500"}`} href="#">
                    Account settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a className={`${active && "bg-blue-500"}`} href="#">
                    Documentation
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        <div className="my-3">
          {alltasks[activedate].tasks[activetask].label}
        </div>
        <div className="flex">
          <div className="basis-1/2">
            <div>assign to</div>
            <div className="flex items-center gap-3">
              <Image
                className="rounded-full  border-slate-600"
                src={`/assets/images/users/${alltasks[activedate].tasks[activetask].avatar}`}
                alt="test"
                width={24}
                height={24}
              />
              <span>{alltasks[activedate].tasks[activetask].assignto}</span>
            </div>
          </div>
          <div className="basis-1/2">
            <div>due date</div>
            <div className="flex items-center gap-3">
              <IoCalendarOutline />
              <span>{alltasks[activedate].tasks[activetask].deadline}</span>
            </div>
          </div>
        </div>
        <div className="min-h-40 border my-5">
          {alltasks[activedate].tasks[activetask].desc}
        </div>
        <div className="my-3">
          <span>sub-task/checklist</span>
          {alltasks[activedate].tasks[activetask].subtask.map((data, index) => {
            return (
              <div className="flex gap-3 items-center" key={data.list}>
                <input type="checkbox" />
                <span>{data.list}</span>
              </div>
            );
          })}
        </div>
        <div>
          {alltasks[activedate].tasks[activetask].comments && (
            <div className="p-2 bg-slate-100 my-4 rounded">
              {alltasks[activedate].tasks[activetask].comments.map(
                (data, index) => {
                  return (
                    <div
                      className="sub-comment flex mb-5  gap-1"
                      key={data.comment}
                    >
                      <Image
                        className="mr-2 mt-1 rounded-full flex-initial w-auto h-8"
                        src={`/assets/images/users/${data.avatar}`}
                        alt="Generic placeholder image"
                        height={32}
                        width={32}
                      />
                      <div className="">
                        <div className="media-body flex items-center gap-2">
                          <h5 className="m-0 font-semibold text-[14px]">
                            {data.user}
                          </h5>
                          <p className="text-sm font-light">
                            <small>{data.commentedtime}</small>
                          </p>
                        </div>
                        <p className="text-justify">{data.comment}</p>
                        <div className="interaction my-2 ">
                          <a href="#" className="text-sm font-light">
                            <i className=""></i> Reply
                          </a>
                        </div>
                        {data.replied && (
                          <div className="sub-comment">
                            {data.replied.map((comment, commentindex) => {
                              return (
                                <div
                                  className="comment-content flex mb-5 mt-5"
                                  key={commentindex}
                                >
                                  <Image
                                    className="mr-2 mt-1 rounded-full flex-initial w-auto h-8"
                                    src={`/assets/images/users/${comment.avatar}`}
                                    alt="Generic placeholder image"
                                    height={32}
                                    width={32}
                                  />
                                  <div className="">
                                    <div className="media-body flex items-center gap-2">
                                      <h5 className="m-0 font-semibold text-[14px]">
                                        {comment.user}
                                      </h5>
                                      <p className="text-sm font-light">
                                        <small>{comment.commentedtime}</small>
                                      </p>
                                    </div>
                                    <p className="text-justify">
                                      {comment.comment}
                                    </p>
                                    <div className="interaction my-2">
                                      <a
                                        href="#"
                                        className="text-sm font-light"
                                      >
                                        <i className=""></i> Reply
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          )}

          <PostNew></PostNew>
        </div>
      </div>
    </>
  );
};

export default DetailTaskCard;

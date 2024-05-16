"use client";

import PageTitleNav from "@/app/components/PageTitleNav";
import PostNew from "@/app/components/PostNew";
import Image from "next/image";
import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { BsChatText } from "react-icons/bs";
import { GoTasklist } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";

const page = () => {
  const datachart = {
    labels: ["a", "b", "c"],
    datasets: [
      {
        label: "revenue",
        data: [200, 300, 400],
      },
      {
        label: "Test",
        data: [200, 300, 400],
      },
    ],
  };

  return (
    <div className="min-h-[83vh]">
      <PageTitleNav></PageTitleNav>
      <div className="main-content h-auto md:flex md:flex-row  gap-5">
        <div className="basis-4/6 flex flex-col mb-3 gap-3">
          <div className="card1 w-full bg-white p-4 rounded">
            <div className="flex justify-between items-center my-2">
              <span className="font-semibold text-2xl"> Project Title</span>
              <HiOutlineDotsHorizontal />
            </div>
            <span className="text-xs font-semibold mb-2 text-white bg-green-500 px-1 py-0.5 rounded">
              status project
            </span>
            <div className="my-3">
              <div className="font-semibold text-base">title desc</div>
              <div className="text-slate-500  text-sm">desc</div>
            </div>
            <div className="flex my-2">
              <div className="basis-1/3">
                <div className="font-semibold">Start Date</div>
                <div className="font-light">17 January 2022</div>
                <div className="font-light text-xs text-slate-400">1:00 PM</div>
              </div>
              <div className="basis-1/3">
                <div className="font-semibold">Due Date</div>
                <div className="font-light">17 Desember 2023</div>
                <div className="font-light text-xs text-slate-400">1:00 PM</div>
              </div>
              <div className="basis-1/3">main task</div>
            </div>
            <div className="my-4">
              <span className="font-semibold ">Team Members</span>
              <div className="flex gap-2 mt-2">
                <Image
                  className=" rounded-full border-slate-600"
                  src="/assets/images/users/avatar-1.jpg"
                  alt="test"
                  width={40}
                  height={100}
                />
                <Image
                  className=" rounded-full border-slate-600"
                  src="/assets/images/users/avatar-2.jpg"
                  alt="test"
                  width={40}
                  height={100}
                />
                <Image
                  className=" rounded-full border-slate-600"
                  src="/assets/images/users/avatar-3.jpg"
                  alt="test"
                  width={40}
                  height={100}
                />
              </div>
            </div>
          </div>
          <div className="card1 w-full bg-white p-4 flex flex-col rounded">
            <PostNew />
            <div className="p-4 bg-slate-200 mt-4 ">
              <div className="sub-comment flex mb-5  ">
                <Image
                  className="mr-2 mt-1 rounded-full flex-initial w-auto h-8"
                  src="/assets/images/users/avatar-1.jpg"
                  alt="Generic placeholder image"
                  height={32}
                  width={32}
                />
                <div className="">
                  <div className="media-body flex items-center gap-2">
                    <h5 className="m-0 font-semibold text-[14px]">John Doe</h5>
                    <p className="text-sm font-light">
                      <small>1 hour ago</small>
                    </p>
                  </div>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam provident repellendus mollitia doloremque sapiente
                    hic recusandae placeat error possimus impedit minima,
                    consequatur, at non numquam, optio asperiores laboriosam
                    omnis voluptates!
                  </p>
                  <div className="interaction my-2 ">
                    <a href="#" className="text-sm font-light">
                      <i className=""></i> Reply
                    </a>
                  </div>
                  <div className="sub-comment">
                    <div className="comment-content flex mb-5 mt-5">
                      <Image
                        className="mr-2 mt-1 rounded-full flex-initial w-auto h-8"
                        src="/assets/images/users/avatar-2.jpg"
                        alt="Generic placeholder image"
                        height={32}
                        width={32}
                      />
                      <div className="">
                        <div className="media-body flex items-center gap-2">
                          <h5 className="m-0 font-semibold text-[14px]">
                            Jean Paul
                          </h5>
                          <p className="text-sm font-light">
                            <small>1 hour ago</small>
                          </p>
                        </div>
                        <p className="text-justify">Test!</p>
                        <div className="interaction my-2">
                          <a href="#" className="text-sm font-light">
                            <i className=""></i> Reply
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="comment-content flex mb-5 mt-5">
                      <Image
                        className="mr-2 mt-1 rounded-full flex-initial w-auto h-8"
                        src="/assets/images/users/avatar-4.jpg"
                        alt="Generic placeholder image"
                        height={32}
                        width={32}
                      />
                      <div className="">
                        <div className="media-body flex items-center gap-2">
                          <h5 className="m-0 font-semibold text-[14px]">
                            Pierre Paul {">"} Jean Paul
                          </h5>
                          <p className="text-sm font-light">
                            <small>1 hour ago</small>
                          </p>
                        </div>
                        <p className="text-justify">OK</p>
                        <div className="interaction my-2">
                          <a href="#" className="text-sm font-light">
                            <i className=""></i> Reply
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="comment-content flex mb-5 mt-5">
                      <Image
                        className="mr-2 mt-1 rounded-full flex-initial w-auto h-8"
                        src="/assets/images/users/avatar-3.jpg"
                        alt="Generic placeholder image"
                        height={32}
                        width={32}
                      />
                      <div className="">
                        <div className="media-body flex items-center gap-2">
                          <h5 className="m-0 font-semibold text-[14px]">
                            Shaukat Antonija
                          </h5>
                          <p className="text-sm font-light">
                            <small>1 hour ago</small>
                          </p>
                        </div>
                        <p className="text-justify">Yup! It Works</p>
                        <div className="interaction my-2 ">
                          <a href="#" className="text-sm font-light">
                            <i className=""></i> Reply
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub-comment flex mb-5  ">
                <Image
                  className="mr-2 mt-1 rounded-full flex-initial w-auto h-8"
                  src="/assets/images/users/avatar-6.jpg"
                  alt="Generic placeholder image"
                  height={32}
                  width={32}
                />
                <div className="">
                  <div className="media-body flex items-center gap-2">
                    <h5 className="m-0 font-semibold text-[14px]">
                      Davie Lambert
                    </h5>
                    <p className="text-sm font-light">
                      <small>1 hour ago</small>
                    </p>
                  </div>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="interaction my-2 ">
                    <a href="#" className="text-sm font-light">
                      <i className=""></i> Reply
                    </a>
                  </div>
                </div>
              </div>

              <div className="sub-comment p-2 flex items-center">
                <a className="pr-2" href="#">
                  <Image
                    src="/assets/images/users/avatar-1.jpg"
                    className="rounded-full"
                    alt="Generic placeholder image"
                    height={32}
                    width={32}
                  />
                </a>
                <input
                  type="text"
                  id="comment3"
                  className="flex-1 rounded py-1 px-2 bg-white"
                  placeholder="Add comment"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="basis-2/6 flex flex-col gap-3">
          <div className="card1 min-h-96 w-full bg-white p-4 flex flex-col rounded">
            <div></div>
          </div>
          <div className="card1 min-h-96 w-full bg-white p-4 flex flex-col rounded">
            <div>
              main task
              <div className="pl-4">sub task</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

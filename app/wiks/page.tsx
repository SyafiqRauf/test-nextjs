import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import {
  FaAngleRight,
  FaCaretRight,
  FaHandPointRight,
  FaHome,
  FaSearch,
  FaShare,
  FaShareAlt,
} from "react-icons/fa";
import { FaCircleArrowRight, FaRegCommentDots } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import Topbar from "../components/Topbar";
import PageTitleNav from "../components/PageTitleNav";
import CardProfile from "../components/CardProfile";
import CardExperience from "../components/CardExperience";
import PostNew from "../components/PostNew";
import SidebarItem from "../components/SidebarItem";
import MultiMenus from "../components/MultiMenus";
import MultiMenusActive from "../components/MultiMenusActive";

const page = () => {
  return (
    <>
      <PageTitleNav></PageTitleNav>
      <div className="main-content h-auto md:flex md:flex-row  gap-5">
        <div className="basis-2/6 mb-3">
          <CardProfile></CardProfile>
          <CardExperience></CardExperience>
        </div>
        <div className="basis-4/6 ">
          <div className="card1 min-h-96 w-full bg-white p-4 flex flex-col rounded">
            <PostNew></PostNew>

            <div className="border rounded mb-3">
              <div className="p-3">
                <div className="main-comment flex mb-5">
                  <Image
                    className="mr-2 rounded-full"
                    src="/assets/images/users/avatar-3.jpg"
                    alt="Generic placeholder image"
                    height={32}
                    width={48}
                  />
                  <div className="media-body">
                    <h5 className="m-0 font-semibold">
                      Shaukat Antonija {">"} John Doe
                    </h5>
                    <p className="text-sm font-light">
                      <small>about 2 minuts ago</small>
                    </p>
                  </div>
                </div>
                <p className="mb-5">
                  Story based around the idea of time lapse, animation to post
                  soon!
                </p>
                <div className="image-group flex p-3 gap-3">
                  <Image
                    src="/assets/images/small/small-1.jpg"
                    alt="post-img"
                    className="rounded mr-1"
                    height={120}
                    width={120}
                  />
                  <Image
                    src="/assets/images/small/small-2.jpg"
                    alt="post-img"
                    className="rounded mr-1"
                    height={120}
                    width={120}
                  />
                  <Image
                    src="/assets/images/small/small-3.jpg"
                    alt="post-img"
                    className="rounded"
                    height={120}
                    width={120}
                  />
                </div>

                <div className="mt-2 mx-3 gap-10 flex">
                  <a href="#" className="text-sm font-light">
                    <i className=""></i>{" "}
                    <FaRegCommentDots className="fill-[red]"></FaRegCommentDots>{" "}
                    Reply!
                  </a>
                  <a href="#" className="text-sm font-light">
                    <i className="mdi mdi-heart-outline"></i>
                    <AiOutlineLike></AiOutlineLike> Like
                  </a>
                  <a href="#" className="text-sm font-light">
                    <i className="mdi mdi-share-variant"></i>
                    <FaShareAlt></FaShareAlt>
                    <FaShare></FaShare> Share
                  </a>
                </div>
              </div>
            </div>

            <div className="border rounded p-2 mb-3">
              <div className="p-3">
                <div className="media flex mb-5">
                  <Image
                    className="mr-2 rounded-full"
                    src="/assets/images/users/avatar-1.jpg"
                    alt="Generic placeholder image"
                    height={32}
                    width={48}
                  />
                  <div className="media-body">
                    <h5 className="m-0 font-semibold">John Doe</h5>
                    <p className="text-sm font-light">
                      <small>1 hour ago</small>
                    </p>
                  </div>
                </div>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis, quo tenetur, repudiandae expedita mollitia corrupti
                  vel eveniet soluta, ab voluptate velit ex sit nulla facilis
                  deserunt et neque rerum iste?
                </p>

                <div className="m-2 gap-10 flex">
                  <a href="#" className="text-sm font-light">
                    <i className="mdi mdi-reply"></i> Reply
                  </a>
                  <a href="#" className="text-sm font-light">
                    <i className="mdi mdi-heart-outline"></i> Like
                  </a>
                  <a href="#" className="text-sm font-light">
                    <i className="mdi mdi-share-variant"></i> Share
                  </a>
                </div>

                <div className="p-2 flex items-center">
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
                    id="comment2"
                    className="flex-1 rounded py-1 px-2 bg-slate-100"
                    placeholder="Add comment"
                  />
                </div>
              </div>
            </div>

            <div className="border rounded mb-3">
              <div className="p-3">
                <div className="flex mb-5">
                  <Image
                    className="mr-2 rounded-full"
                    src="/assets/images/users/avatar-5.jpg"
                    alt="Generic placeholder image"
                    height={32}
                    width={48}
                  />
                  <div className="media-body">
                    <h5 className="m-0 font-semibold">Jesse Siwan</h5>
                    <p className="text-sm font-light">
                      <small>1 hour ago</small>
                    </p>
                  </div>
                </div>
                <p className="mb-5 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis, quo tenetur, repudiandae expedita mollitia corrupti
                  vel eveniet soluta, ab voluptate velit ex sit nulla facilis
                  deserunt et neque rerum iste?
                </p>

                <div className="mt-2 mx-3 gap-10 flex">
                  <a href="#" className="text-sm font-light">
                    <i className=""></i> Reply
                  </a>
                  <a href="#" className="text-sm font-light">
                    <i className=""></i> Like
                  </a>
                  <a href="#" className="text-sm font-light">
                    <i className=""></i> Share
                  </a>
                </div>
              </div>

              <div className="p-2 bg-slate-200 mt-4 ">
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
                      <h5 className="m-0 font-semibold text-[14px]">
                        John Doe
                      </h5>
                      <p className="text-sm font-light">
                        <small>1 hour ago</small>
                      </p>
                    </div>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam provident repellendus mollitia doloremque
                      sapiente hic recusandae placeat error possimus impedit
                      minima, consequatur, at non numquam, optio asperiores
                      laboriosam omnis voluptates!
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
        </div>
      </div>
    </>
  );
};

export default page;

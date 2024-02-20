import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import {
  FaAngleRight,
  FaCaretRight,
  FaSearch,
  FaShare,
  FaShareAlt,
} from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

const page = () => {
  return (
    <>
      <div className="wrap w-screen h-screen flex">
        <div className="sidebar h-screen xl:w-72 md:w-20 bg-slate-700 hidden sm:flex sm:flex-col">
          <a href="#" className="flex justify-center p-5">
            <Image
              src="/assets/images/Wiks-logos_white.png"
              alt="logo"
              height={50}
              width={80}
              className=""
            />
          </a>
          <div className="nav-list text-white p-4">
            <ul className="">
              test
              <li>1</li>
              <li>2</li>
              <li>
                3
                <ul className="px-4">
                  <li>
                    a
                    <ul className="px-4 ">
                      <li>i</li>
                      <li>ii</li>
                      <li>iii test</li>
                    </ul>
                  </li>
                  <li>b</li>
                  <li>c</li>
                </ul>
              </li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
        </div>
        <div className="main w-full h-full relative overflow-x-hidden">
          <div className="topbar w-full min-h-16 flex justify-between px-4 ">
            <div className="flex items-center">
              <form
                id="search"
                className="flex items-center bg-slate-200 rounded-l pl-3"
              >
                <IoIosSearch className="fill-slate-500" />
                <input
                  type="text"
                  placeholder="Search ..."
                  className="bg-slate-200 px-4 py-2 outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-500 py-2 px-4 rounded-r text-white font-light"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="flex ">
              <a
                href="#"
                className="flex items-center bg-slate-50 h-full border-x px-4 py-2"
              >
                <div className="">
                  <Image
                    className="mr-2 rounded-full"
                    src="/assets/images/users/avatar-3.jpg"
                    alt="Generic placeholder image"
                    height={32}
                    width={30}
                  />
                </div>
                <p className="m-0 p-0 text-sm font-medium text-slate-400 leading-4">
                  John Doe <br />{" "}
                  <small className="text-[11px] font-normal">Founder</small>
                </p>
              </a>
            </div>
          </div>
          <div className="content flex-1 bg-slate-100 p-4">
            <div className="page-title-wrap flex relative py-4 mx-0 px-0 items-center justify-between">
              <h1 className="page-title font-semibold">Title Page</h1>
              <div className="page-title-right">
                <ol className="flex text-right gap-3">
                  <li className="flex items-center font-light text-sm">
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-950 text-sm"
                    >
                      1
                    </a>
                  </li>
                  <li className="flex items-center font-light text-sm">
                    <FaAngleRight className="fill-slate-300 size-3 mr-2" />
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-950 text-sm"
                    >
                      2
                    </a>
                  </li>
                  <li className="flex items-center font-light text-sm">
                    <FaAngleRight className="fill-slate-300 size-3 mr-2" />
                    <span className="text-slate-400 text-sm">3</span>
                  </li>
                </ol>
              </div>
            </div>
            <div className="main-content h-auto md:flex md:flex-row  gap-5">
              <div className="basis-2/6 mb-3">
                <div className="card1 min-h-[550px] w-full bg-white flex flex-col mb-3 rounded">
                  <Image
                    className="mx-auto mt-5 rounded-full p-1 border border-slate-600"
                    src="/assets/images/users/avatar-1.jpg"
                    alt="test"
                    width={100}
                    height={100}
                  />
                  <div className="name-title text-center">
                    <h1 className="font-bold font-sans">Name</h1>
                    <h3 className=" font-sans text-slate-600 text-sm">Title</h3>
                  </div>
                  <div className="description p-5">
                    <h4 className="font-semibold">About Me :</h4>
                    <p className="text-sm font-light text-slate-700 mb-4 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum ad sit autem officiis qui, assumenda inventore alias
                      dolores enim eos, laudantium numquam sequi in repellendus
                      eligendi sapiente itaque ex pariatur?
                    </p>
                    <p className="text-sm text-slate-700 mb-4">
                      <span className="font-semibold">Full Name : </span>John
                      Doe
                    </p>
                    <p className="text-sm text-slate-700 mb-4">
                      <span className="font-semibold">Phone : </span>+62 812
                      3456 7890
                    </p>
                    <p className="text-sm text-slate-700 mb-4">
                      <span className="font-semibold">Email : </span>
                      user@email.domain
                    </p>
                    <p className="text-sm text-slate-700 mb-4">
                      <span className="font-semibold">Location : </span>Jakarta,
                      Indonesia
                    </p>
                  </div>
                </div>
                <div className="card1 min-h-96 w-full bg-white mb-3 p-5 rounded">
                  <h4 className="font-bold">Experience</h4>
                  <div className="experience-timeline relative mt-4">
                    <div className="timeline-item flex">
                      <svg
                        className="absolute"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 200"
                        width={25}
                        height={25}
                      >
                        <circle cx="100" cy="100" r="100" fill="#888" />
                        <circle cx="100" cy="100" r="50" fill="#000" />
                      </svg>

                      <div className="timeline-info border-l ml-3 p-0 pl-5 border-black ">
                        <h5 className="mt-0 mb-1 font-semibold">
                          Senior Graphic Designer
                        </h5>
                        <p className="font-normal text-sm">
                          Software Inc.{" "}
                          <span className="ml-2 font-extralight text-xs">
                            Year: 2015 - 18
                          </span>
                        </p>
                        <p className="text-sm font-light mt-2 mb-0 pb-3 text-justify">
                          If several languages coalesce, the grammar of the
                          resulting language is more simple and regular than
                          that of the individual languages. The new common
                          language will be more simple and regular than the
                          existing European languages.
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item flex">
                      <svg
                        className="absolute"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 200"
                        width="25"
                        height="25"
                      >
                        <circle cx="100" cy="100" r="100" fill="#888" />
                        <circle cx="100" cy="100" r="50" fill="#000" />
                      </svg>

                      <div className="timeline-info border-l ml-3 p-0 pl-5 border-black ">
                        <h5 className="mt-0 mb-1 font-semibold">
                          Lead designer / Developer
                        </h5>
                        <p className="font-normal text-sm">
                          websitename.com
                          <span className="ml-2 font-extralight text-xs">
                            Year: 2012 - 15
                          </span>
                        </p>
                        <p className="text-sm font-light mt-2 mb-0 pb-3 text-justify">
                          Everyone realizes why a new common language would be
                          desirable: one could refuse to pay expensive
                          translators. To achieve this, it would be necessary to
                          have uniform grammar, pronunciation and more common
                          words.
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item flex">
                      <svg
                        className="absolute"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 200"
                        width="25"
                        height="25"
                      >
                        <circle cx="100" cy="100" r="100" fill="#888" />
                        <circle cx="100" cy="100" r="50" fill="#000" />
                      </svg>

                      <div className="timeline-info border-l ml-3 p-0 pl-5 border-black ">
                        <h5 className="mt-0 mb-1 font-semibold">
                          Graphic Designer
                        </h5>
                        <p className="font-normal text-sm">
                          websitename.com
                          <span className="ml-2 font-extralight text-xs">
                            Year: 2010 - 12
                          </span>
                        </p>
                        <p className="text-sm font-light mt-2 mb-0 pb-3 text-justify">
                          The European languages are members of the same family.
                          Their separate existence is a myth. For science music
                          sport etc, Europe uses the same vocabulary. The
                          languages only differ in their grammar their
                          pronunciation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-4/6 ">
                <div className="card1 min-h-96 w-full bg-white p-4 flex flex-col rounded">
                  <div className="border rounded mb-3">
                    <form
                      id="comment"
                      className="comment-area-box w-full flex flex-col "
                    >
                      <textarea
                        id="comment1"
                        rows={3}
                        className="p-2"
                        placeholder="Write something...."
                      ></textarea>
                      <div className="p-2 flex bg-slate-200">
                        <div className="flex flex-1 items-center gap-9 mx-6">
                          <a href="#" className="hover:bg-slate-200">
                            <i className="mdi mdi-account-circle"></i>a
                          </a>
                          <a href="#" className="hover:bg-slate-200">
                            <i className="mdi mdi-map-marker"></i>b
                          </a>
                          <a href="#" className="hover:bg-slate-200">
                            <i className="mdi mdi-camera"></i>c
                          </a>
                          <a href="#" className="hover:bg-slate-200">
                            <i className="mdi mdi-emoticon-outline"></i>d
                          </a>
                        </div>
                        <button
                          type="submit"
                          className="text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded"
                        >
                          Post
                        </button>
                      </div>
                    </form>
                  </div>

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
                        Story based around the idea of time lapse, animation to
                        post soon!
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
                        Debitis, quo tenetur, repudiandae expedita mollitia
                        corrupti vel eveniet soluta, ab voluptate velit ex sit
                        nulla facilis deserunt et neque rerum iste?
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
                        Debitis, quo tenetur, repudiandae expedita mollitia
                        corrupti vel eveniet soluta, ab voluptate velit ex sit
                        nulla facilis deserunt et neque rerum iste?
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam provident repellendus mollitia
                            doloremque sapiente hic recusandae placeat error
                            possimus impedit minima, consequatur, at non
                            numquam, optio asperiores laboriosam omnis
                            voluptates!
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
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
          </div>
          <div className="footer flex h-16 border-t border-slate-300 bg-slate-100 items-center justify-between p-6">
            <div>a</div>
            <div className="flex justify-around gap-5 text-slate-400">
              <a href="#">About </a>
              <a href="#">Contact</a>
              <a href="#">Support</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

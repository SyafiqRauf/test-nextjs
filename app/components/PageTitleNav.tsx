import React from "react";
import { FaAngleRight } from "react-icons/fa";

const PageTitleNav = () => {
  return (
    <>
      <div className="page-title-wrap flex relative py-4 mx-0 px-0 items-center justify-between">
        <h1 className="page-title font-semibold">Title Page</h1>
        <div className="page-title-right">
          <ol className="flex text-right gap-3">
            <li className="flex items-center font-light text-sm">
              <a href="#" className="text-blue-500 hover:text-blue-950 text-sm">
                1
              </a>
            </li>
            <li className="flex items-center font-light text-sm">
              <FaAngleRight className="fill-slate-300 size-3 mr-2" />
              <a href="#" className="text-blue-500 hover:text-blue-950 text-sm">
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
    </>
  );
};

export default PageTitleNav;

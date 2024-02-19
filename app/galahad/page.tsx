import Image from "next/image";
import Link from "next/link";
import React from "react";
import Parallax from "../components/Parallax";
import { Metadata } from "next";

const page = () => {
  return (
    <>
      <section className="hero bg-[url('../public/assets/images/galahad/Start1.png')] min-h-screen relative overflow-hidden bg-no-repeat bg-cover bg-center">
        <div className="topbar mx-auto max-w-[1200px]">
          <div
            id="topbar-logo"
            className="flex p-10 items-center justify-center"
          >
            <Link href="#" className="flex gap-2">
              <Image
                id="nav-logo"
                className=""
                src="/assets/images/galahad/icon-galahad.svg"
                alt="nav-logo"
                width={50}
                height={50}
              />
              <Image
                id="nav-text"
                className=""
                src="/assets/images/galahad/galahad.svg"
                alt="nav-text"
                width={150}
                height={150}
              />
            </Link>

            <Link
              id="launch-apps"
              href="#"
              className="launch-apps rounded-full px-5 py-3 ml-5 bg-[#66D1FF] hover:bg-[#51a7cc] text-black"
            >
              {" "}
              Launch Apps{" "}
            </Link>
            <Link
              href="#"
              className="early-access rounded-full px-5 py-3 bg-white hover:bg-slate-300 text-black ml-auto"
            >
              {" "}
              Early Access <i className=""></i>{" "}
            </Link>
          </div>
        </div>

        <Parallax />
      </section>
    </>
  );
};

export const metadata: Metadata = {
  title: {
    absolute: "Test Galahad",
  },
};

export default page;

import Image from "next/image";
import React from "react";

const CardProfile = () => {
  return (
    <>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ad
            sit autem officiis qui, assumenda inventore alias dolores enim eos,
            laudantium numquam sequi in repellendus eligendi sapiente itaque ex
            pariatur?
          </p>
          <p className="text-sm text-slate-700 mb-4">
            <span className="font-semibold">Full Name : </span>John Doe
          </p>
          <p className="text-sm text-slate-700 mb-4">
            <span className="font-semibold">Phone : </span>+62 812 3456 7890
          </p>
          <p className="text-sm text-slate-700 mb-4">
            <span className="font-semibold">Email : </span>
            user@email.domain
          </p>
          <p className="text-sm text-slate-700 mb-4">
            <span className="font-semibold">Location : </span>Jakarta, Indonesia
          </p>
        </div>
      </div>
    </>
  );
};

export default CardProfile;

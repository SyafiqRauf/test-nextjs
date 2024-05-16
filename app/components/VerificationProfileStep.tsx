"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FiUploadCloud } from "react-icons/fi";

const VerificationProfileStep = ({ setShowModal, setProgressVerif }: any) => {
  const [step, setStep] = useState(1);
  return (
    <>
      <div className="flex flex-col bg-neutral-900 p-6 gap-6 justify-center rounded-lg min-w-[624px]">
        <div className="flex justify-end">
          <CgClose
            className="text-white cursor-pointer w-5 h-auto"
            onClick={() => setShowModal(false)}
          ></CgClose>
        </div>
        <div className="flex flex-col bg-neutral-900 gap-6 justify-center rounded-lg ">
          <div className="flex flex-col gap-1.5 justify-start">
            <div className="flex flex-col ">
              <div className=" text-white text-xs font-semibold font-['Noto Sans'] leading-none">
                STEP {step} OF 2
              </div>
              <div className=" text-white text-xl font-semibold font-['Noto Sans'] leading-7">
                {step == 1 ? `Personal Information` : `ID Verification`}
              </div>
              <div className=" text-zinc-300 text-sm font-normal font-['Noto Sans'] leading-tight">
                {step == 1
                  ? `Please input your personal information`
                  : `Please upload yourself with your KTP/Passport`}
              </div>
            </div>
            <div className="border-b-2 my-7 border-neutral-600 "></div>

            <div className="flex flex-col gap-5">
              {step == 1 && (
                <>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="full_name"
                      className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
                    >
                      Full name<span className="text-red-500">*</span>
                    </label>
                    <input
                      id="full_name"
                      name="full_name"
                      type="text"
                      className="py-2.5 px-3.5 flex-1 flex w-full bg-black text-neutral-400 text-sm font-normal font-['Noto Sans'] leading-snug rounded"
                      placeholder={`Enter Your Full name`}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="id_number"
                      className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
                    >
                      ID Card Number / Passport Number
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="id_number"
                      name="id_number"
                      type="text"
                      className="py-2.5 px-3.5 flex-1 flex w-full bg-black text-neutral-400 text-sm font-normal font-['Noto Sans'] leading-snug rounded"
                      placeholder={`Enter Your ID Card / Passport Number`}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone_number"
                      className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
                    >
                      Phone number
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone_number"
                      name="phone_number"
                      type="text"
                      className="py-2.5 px-3.5 flex-1 flex w-full bg-black text-neutral-400 text-sm font-normal font-['Noto Sans'] leading-snug rounded"
                      placeholder={`+62     Input your phone number`}
                    />
                  </div>
                </>
              )}

              {step == 2 && (
                <div className="flex justify-center items-center gap-4">
                  <div className="flex rounded-lg w-36 h-auto">
                    <Image
                      className="object-cover w-full h-full z-10 rounded"
                      src="/assets/images/ggplay/selfie_ktp.png"
                      alt="Generic placeholder image"
                      title="profile"
                      height={256}
                      width={256}
                    />
                  </div>
                  <div className=" text-neutral-400 text-xs font-semibold font-['Noto Sans'] leading-7">
                    <div className="w-64 text-neutral-400 text-xs font-semibold font-['Noto Sans'] leading-7 ">
                      <ul className="list-disc list-outside ml-4">
                        <li>Please take your Photo with your ID</li>
                        <li>Make sure your face and ID are clearly visible</li>
                        <li>Take off your glasses (if you wear glasses)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="id_photo"
                  className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
                >
                  Upload Id Card
                  <span className="text-red-500">*</span>
                </label>
                <div
                  id="id_photo"
                  className=" min-h-[134px] px-6 py-4 bg-zinc-800 border border-stone-500 rounded  flex flex-col justify-center items-center gap-3"
                >
                  <FiUploadCloud className="text-neutral-400 w-11 h-auto relative flex-col justify-start items-start flex p-2.5 rounded-lg border-2 border-neutral-400 " />
                  <p className="text-neutral-400 text-[10px] font-normal font-['Noto Sans'] text-center leading-">
                    <span className="text-white">Click to upload</span> or drag
                    and drop <br /> SVG, PNG, JPG or GIF (max. 800x400px)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {step == 1 && (
            <div
              className="min-w-28 min-h-8 px-3 py-[5px] bg-pink-500 rounded justify-center items-center inline-flex text-white text-sm font-semibold font-['Noto Sans'] leading-tight cursor-pointer"
              onClick={() => setStep(2)}
            >
              Next
            </div>
          )}
          {step == 2 && (
            <div
              className="min-w-28 min-h-8 px-3 py-[5px] bg-pink-500 rounded justify-center items-center inline-flex text-white text-sm font-semibold font-['Noto Sans'] leading-tight cursor-pointer"
              onClick={() => {
                setShowModal(false);
                setProgressVerif(70);
              }}
            >
              Submit
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default VerificationProfileStep;

"use client";

import Image from "next/image";
import React, { useState } from "react";
import Modals from "./Modals";
import VerificationProfileStep from "./VerificationProfileStep";
import { CgClose } from "react-icons/cg";

const VerificationProgressCard = ({ progressVerif, setProgressVerif }: any) => {
  const [hideVerif, setHideVerif] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <Modals
          setShowModal={setShowModal}
          components={
            <VerificationProfileStep
              setShowModal={setShowModal}
              setProgressVerif={setProgressVerif}
            />
          }
        />
      )}
      {!hideVerif && (
        <div className="w-full relative p-6 bg-zinc-900 rounded-lg shadow border border-neutral-600 justify-center items-start gap-6 flex flex-col">
          {progressVerif === 100 && (
            <CgClose
              className="absolute flex flex-1 right-0 top-0 text-white/70 z-10 w-5 h-auto m-1.5 cursor-pointer"
              onClick={() => setHideVerif(true)}
            ></CgClose>
          )}
          <div className="flex flex-1 justify-between items-center gap-10 w-full">
            <div className="w-20 h-20 relative">
              {/* <Image
                alt="test"
                className="absolute"
                src="/assets/images/ggplay/default_profile.png"
                height={200}
                width={400}
              /> */}
              <div className="left-[26.66px] top-[30.67px] absolute text-white text-sm font-semibold font-['Noto Sans'] leading-[18.67px]">
                {progressVerif}%
              </div>
            </div>
            <div className="min-h-[87px] w-full justify-between items-center flex flex-1">
              <div className="grow shrink basis-0 self-stretch justify-between items-center flex">
                {progressVerif < 70 && (
                  <div className="grow shrink basis-0 self-stretch pr-12 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch text-white text-xl font-semibold font-['Noto Sans']">
                      Complete Data & Verification
                    </div>
                    <div className="self-stretch text-zinc-300 text-base font-normal font-['Noto Sans'] tracking-tight">
                      Please complete your KYC profile information
                    </div>
                  </div>
                )}
                {progressVerif == 70 && (
                  <div className="grow shrink basis-0 self-stretch pr-12 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch text-white text-xl font-semibold font-['Noto Sans']">
                      Upload your Photo Profile and Banner
                    </div>
                    <div className="self-stretch text-zinc-300 text-base font-normal font-['Noto Sans'] tracking-tight">
                      You{`'`}re almost there! Just a few more details, and your
                      profile will be complete.
                    </div>
                  </div>
                )}
                {progressVerif == 100 && (
                  <div className="grow shrink basis-0 self-stretch pr-12 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch text-white text-xl font-semibold font-['Noto Sans']">
                      Great job! Your account is now complete.
                    </div>
                    <div className="self-stretch text-zinc-300 text-base font-normal font-['Noto Sans'] tracking-tight">
                      You can now use this account for top-ups, withdrawals, and
                      other transactions.
                    </div>
                  </div>
                )}
              </div>
            </div>

            {progressVerif < 100 && (
              <button
                className="px-4 py-2 bg-pink-600 rounded justify-center items-center flex text-white text-base font-semibold font-['Noto Sans'] leading-snug"
                onClick={() => setShowModal(true)}
              >
                KYC Now
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default VerificationProgressCard;

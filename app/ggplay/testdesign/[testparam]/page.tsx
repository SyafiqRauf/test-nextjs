import MyProfileGGPlay from "@/app/components/MyProfileGGPlay";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaGoogle, FaTwitter } from "react-icons/fa";

const page = ({ params }: any) => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="bg-gradient-to-b from-zinc-800 to-[#171313]/[0.58] w-full min-h-[334px] rounded-lg ring-1 ring-zinc-600 flex mx-auto pt-4 pb-12">
          <div className="text-white flex flex-col mx-auto text-center items-center gap-4">
            <div className="w-48 h-48 rounded-full overflow-hidden">
              <Image
                className="object-cover w-full h-full"
                src="/assets/images/ggplay/default_profile.png"
                alt="Generic placeholder image"
                title="profile"
                height={200}
                width={400}
              />
            </div>
            <span className="mt-3 text-[#D7D2D2]">{params.publisherId}</span>
            <span className="bg-[#4C4400] ring-2 ring-[#FDE300] px-6 py-1 rounded-full">
              Unverified KYC
            </span>
            <div className="flex gap-4 text-zinc-400">
              <Link
                href="#"
                className="p-2 bg-[#333333] items-center justify-center flex rounded"
              >
                <FaTwitter className="w-4 h-auto" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-[#333333] items-center justify-center flex rounded "
              >
                <FaGoogle className="w-4 h-auto" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-[#333333] items-center justify-center flex rounded "
              >
                <FaDiscord className="w-4 h-auto" />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-[135px] p-6 bg-zinc-900 rounded-lg shadow border border-neutral-600 justify-center items-start gap-6 inline-flex">
          <div className="grow shrink basis-0 h-[87px] justify-center items-center gap-10 flex">
            <div className="w-20 h-20 relative">
              <Image
                alt="test"
                className="w-[30.73px] h-[43.06px] left-0 top-[34.99px] absolute"
                src="/assets/images/ggplay/default_profile.png"
                height={200}
                width={400}
              />
              <div className="left-[26.66px] top-[30.67px] absolute text-white text-sm font-semibold font-['Noto Sans'] leading-[18.67px]">
                20%
              </div>
            </div>
            <div className="grow shrink basis-0 h-[87px] justify-between items-center flex">
              <div className="grow shrink basis-0 self-stretch justify-between items-center flex">
                <div className="grow shrink basis-0 self-stretch pr-12 flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="self-stretch text-white text-xl font-semibold font-['Noto Sans']">
                    Complete Data & Verification
                  </div>
                  <div className="self-stretch text-zinc-300 text-base font-normal font-['Noto Sans'] tracking-tight">
                    Please complete your KYC profile information
                  </div>
                </div>
                <button className="px-4 py-2 bg-pink-600 rounded justify-center items-center flex text-white text-base font-semibold font-['Noto Sans'] leading-snug">
                  KYC Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <MyProfileGGPlay />
      </div>
    </>
  );
};

export default page;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaDiscord, FaGoogle, FaTwitter } from "react-icons/fa";
import VerificationProgressCard from "./VerificationProgressCard";

const ProfileImageGGPlay = ({ username }: any) => {
  const [progressVerif, setProgressVerif] = useState(20);
  const [isVerified, setIsVerified] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("gradient-to-b");
  const [profileImage, setProfileImage] = useState("default_profile.png");
  return (
    <>
      <div
        className={`bg-${backgroundImage}  bg-cover bg-center bg-no-repeat from-zinc-800 to-[#171313]/[0.58] w-full min-h-[334px] rounded-lg ring-1 ring-zinc-600 flex mx-auto pt-4 pb-12 cursor-pointer`}
        onClick={() => {
          setBackgroundImage("[url('/assets/images/ggplay/bg_image.jpeg')]");
          setProfileImage("arsy.png");
          setIsVerified(true);
          setProgressVerif(100);
        }}
      >
        <div className="text-white flex flex-col mx-auto text-center items-center gap-4">
          <div className="w-48 h-48 rounded-full overflow-hidden bg-pink-600">
            <Image
              className="object-cover w-full h-full z-10"
              src={`/assets/images/ggplay/${profileImage}`}
              alt="Generic placeholder image"
              title="profile"
              height={200}
              width={400}
            />
          </div>

          <div className="flex flex-col gap-1 items-center justify-center">
            {progressVerif >= 70 && (
              <div className="text-center text-white text-2xl font-semibold font-['Noto Sans'] leading-loose">
                Anindito Lanang Seto
              </div>
            )}
            <div className=" text-[#D7D2D2]">{username}</div>
            {!isVerified && (
              <span className="bg-[#4C4400] ring-2 ring-[#FDE300] px-6 py-1 rounded-full">
                Unverified KYC
              </span>
            )}
            {isVerified && (
              <div className="bg-[#54B054] ring-2 ring-[#107C10] px-6 py-1 rounded-full flex items-center justify-center gap-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.3932 2.1322C6.28835 2.22707 6.17817 2.31588 6.0632 2.3982C5.86453 2.53153 5.6412 2.62353 5.40653 2.6702C5.30453 2.6902 5.19786 2.69887 4.9852 2.71553C4.4512 2.7582 4.18386 2.77953 3.9612 2.8582C3.7066 2.94809 3.47535 3.09384 3.28443 3.28477C3.09351 3.47569 2.94776 3.70693 2.85786 3.96153C2.7792 4.1842 2.75786 4.45153 2.7152 4.98553C2.70793 5.12671 2.69279 5.26737 2.66986 5.40687C2.6232 5.64153 2.5312 5.86487 2.39786 6.06353C2.33986 6.1502 2.27053 6.23153 2.13186 6.39353C1.78453 6.80153 1.61053 7.00553 1.50853 7.21887C1.2732 7.7122 1.2732 8.28553 1.50853 8.77887C1.61053 8.9922 1.78453 9.1962 2.13186 9.6042C2.27053 9.7662 2.33986 9.84753 2.39786 9.9342C2.5312 10.1329 2.6232 10.3562 2.66986 10.5909C2.68986 10.6929 2.69853 10.7995 2.7152 11.0122C2.75786 11.5462 2.7792 11.8135 2.85786 12.0362C2.94776 12.2908 3.09351 12.522 3.28443 12.713C3.47535 12.9039 3.7066 13.0496 3.9612 13.1395C4.18386 13.2182 4.4512 13.2395 4.9852 13.2822C5.19786 13.2989 5.30453 13.3075 5.40653 13.3275C5.6412 13.3742 5.86453 13.4669 6.0632 13.5995C6.14986 13.6575 6.2312 13.7269 6.3932 13.8655C6.8012 14.2129 7.0052 14.3869 7.21853 14.4889C7.71186 14.7242 8.2852 14.7242 8.77853 14.4889C8.99187 14.3869 9.19586 14.2129 9.60386 13.8655C9.76587 13.7269 9.8472 13.6575 9.93386 13.5995C10.1325 13.4662 10.3559 13.3742 10.5905 13.3275C10.6925 13.3075 10.7992 13.2989 11.0119 13.2822C11.5459 13.2395 11.8132 13.2182 12.0359 13.1395C12.2905 13.0496 12.5217 12.9039 12.7126 12.713C12.9036 12.522 13.0493 12.2908 13.1392 12.0362C13.2179 11.8135 13.2392 11.5462 13.2819 11.0122C13.2985 10.7995 13.3072 10.6929 13.3272 10.5909C13.3739 10.3562 13.4665 10.1329 13.5992 9.9342C13.6572 9.84753 13.7265 9.7662 13.8652 9.6042C14.2125 9.1962 14.3865 8.9922 14.4885 8.77887C14.7239 8.28553 14.7239 7.7122 14.4885 7.21887C14.3865 7.00553 14.2125 6.80153 13.8652 6.39353C13.7703 6.28868 13.6815 6.1785 13.5992 6.06353C13.466 5.86479 13.3735 5.64159 13.3272 5.40687C13.3043 5.26737 13.2892 5.12671 13.2819 4.98553C13.2392 4.45153 13.2179 4.1842 13.1392 3.96153C13.0493 3.70693 12.9036 3.47569 12.7126 3.28477C12.5217 3.09384 12.2905 2.94809 12.0359 2.8582C11.8132 2.77953 11.5459 2.7582 11.0119 2.71553C10.8707 2.70826 10.73 2.69313 10.5905 2.6702C10.3558 2.62386 10.1326 2.53141 9.93386 2.3982C9.81903 2.31571 9.70886 2.22691 9.60386 2.1322C9.19586 1.78487 8.99187 1.61087 8.77853 1.50887C8.53499 1.39245 8.26847 1.33203 7.99853 1.33203C7.72859 1.33203 7.46208 1.39245 7.21853 1.50887C7.0052 1.61087 6.8012 1.78487 6.3932 2.1322ZM10.9139 6.5742C11.0081 6.47107 11.0589 6.33558 11.0558 6.19593C11.0526 6.05627 10.9957 5.92321 10.897 5.82444C10.7982 5.72566 10.6651 5.66878 10.5255 5.66563C10.3858 5.66248 10.2503 5.71331 10.1472 5.80753L6.91387 9.04087L5.84986 7.97753C5.74674 7.88331 5.61125 7.83248 5.47159 7.83563C5.33194 7.83878 5.19888 7.89566 5.1001 7.99444C5.00133 8.09321 4.94445 8.22627 4.9413 8.36593C4.93815 8.50558 4.98897 8.64107 5.0832 8.7442L6.52986 10.1909C6.6316 10.2924 6.76946 10.3494 6.9132 10.3494C7.05693 10.3494 7.19479 10.2924 7.29653 10.1909L10.9139 6.5742Z"
                    fill="white"
                  />
                </svg>
                <span>Verified</span>
              </div>
            )}
          </div>

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
      <VerificationProgressCard
        progressVerif={progressVerif}
        setProgressVerif={setProgressVerif}
      />
    </>
  );
};

export default ProfileImageGGPlay;

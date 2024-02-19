import React from "react";
import Image from "next/image";

const ViewUsersButton = () => {
  return (
    <div className="parallax relative flex justify-center cursor-pointer *:absolute">
      <svg
        id="ellipse-big"
        width="660"
        height="660"
        viewBox="0 0 660 660"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          id="ellipse-circle"
          cx="330"
          cy="330"
          r="325"
          stroke="url(#paint0_linear_929_4558)"
          strokeWidth="10"
        />
        <defs>
          <linearGradient
            id="paint0_linear_929_4558"
            x1="187.429"
            y1="-361.509"
            x2="901.725"
            y2="13.5715"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#86EDAA" />
            <stop offset="1" stopColor="#4857EA" />
          </linearGradient>
        </defs>
      </svg>
      <Image
        className="-top-12"
        id="galahad2"
        src="/assets/images/galahad/galahad-2-1.svg"
        alt="galahad2"
        width={400}
        height={500}
      />
      <Image
        className="top-[36vh]"
        id="galahad1"
        src="/assets/images/galahad/galahad-1-1.svg"
        alt="galahad1"
        width={500}
        height={500}
      />
      <div className="parallax-text text-center text-[#074a8d] top-[24vh]">
        <h1 className="text-4xl sm:text-[50px] leading-none font-bold">
          New exciting protocol that will <br />
          revolutionize the world of
          <br />
          decentralized finance
        </h1>
        <h4 className="text-xl sm:text-2xl font-medium leading-normal">
          First DeFi protocol that allows users to borrow against their ETH
          while <br />
          earning yield from the LSD protocol on Layer 1 - Ethereum.
        </h4>
      </div>
    </div>
  );
};

export default ViewUsersButton;

"use client";
import Image from "next/image";
import React, { useState } from "react";
import MenuDropDownMyProfile from "./MenuDropDownMyProfile";
import MenuDropDown from "./MenuDropDown";
import { CgClose, CgSwapVertical } from "react-icons/cg";
import { MdOutlineSwapVert, MdSwapVert } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

const InteractCurrency = ({ setShowModal, activeModal, currency }: any) => {
  const [currentBalance, setCurrentBalance] = useState(10000000);
  const [percentAmount, setPercentAmount]: any = useState(0);
  const [convertOption, setConvertOption] = useState(`GGGtoGXT`);
  const topuplist = [
    "5,000",
    "15,000",
    "25,000",
    "50,000",
    "100,000",
    "200,000",
  ];
  const percentileamount = [25, 50, 75, 100];
  const banklist = ["BNI", "BRI", "BCA", "BTN", "MANDIRI", "BSI"];
  const [bankSelect, setBankSelect] = useState(0);
  const [activeSwap, setActiveSwap] = useState(false);
  const GXTicon = (
    <Image
      src={"/assets/images/ggplay/GXT.svg"}
      alt="gxt-icon"
      width={24}
      height={24}
    />
  );
  const GGGicon = (
    <Image
      src={"/assets/images/ggplay/GGG_icon.svg"}
      alt="ggg-icon"
      width={24}
      height={24}
    />
  );
  return (
    <>
      <div className="flex flex-col p-6 bg-zinc-900 gap-2 min-w-[453px] text-white rounded-lg">
        <div className="flex justify-between items-center">
          <label
            htmlFor=""
            className="text-white text-xl font-semibold font-['Noto Sans'] leading-7"
          >
            {activeModal}
          </label>
          <CgClose
            className="text-white cursor-pointer w-5 h-auto"
            onClick={() => setShowModal(false)}
          ></CgClose>
        </div>

        {activeModal == "Top Up GXT" && (
          <div className="flex flex-col justify-center items-center gap-6 py-1.5">
            <div className="text-center gap-2 flex flex-col">
              <div className="text-white text-base font-normal font-['Noto Sans'] leading-snug flex gap-2.5 items-center justify-center">
                Balance {GXTicon} 15.000
              </div>
              <div className="w-[300px] text-center text-zinc-400 text-xs font-normal font-['Noto Sans'] leading-none">
                Choose ammount to top up your GXTChoose ammount to top up your
                GXT
              </div>
            </div>
            <div className="w-full border-b border-neutral-600"></div>
            <div className="w-full">
              {topuplist.map((data, index) => (
                <div
                  key={data}
                  className="flex w-full justify-between p-4 mb-4 bg-zinc-800 rounded border border-stone-500/40"
                >
                  <div className="text-base font-normal font-['Noto Sans'] leading-snug flex gap-2.5 items-center">
                    {GXTicon} {data}
                  </div>
                  <div className="text-base font-normal font-['Noto Sans'] leading-snug">
                    IDR {data}
                  </div>
                </div>
              ))}

              <div className="flex flex-col gap-4 w-full justify-between p-4 mb-4 bg-zinc-800 rounded border border-stone-500/40">
                <div className="text-white text-sm font-bold font-['Noto Sans'] leading-tight">
                  Custom Ammount
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-white text-xs font-normal font-['Noto Sans'] leading-none"
                    htmlFor=""
                  >
                    Nominal Lain <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="bg-black p-3 placeholder:text-neutral-400 text-white text-base font-normal font-['Noto Sans'] leading-snug rounded"
                    placeholder="Input Nominal"
                  />
                </div>
                <div className="flex justify-end">
                  <div className="w-[72px] h-8 px-3 py-[5px] bg-pink-600 rounded justify-center items-center inline-flex">
                    <div className="pb-0.5 justify-start items-start flex">
                      <div className="text-white text-sm font-semibold font-['Noto Sans'] leading-tight">
                        Top Up
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeModal == "Deposit GGG" && (
          <div className="flex flex-col items-center justify-center gap-10 mt-4 py-1.5">
            <div className="flex flex-col justify-center gap-6 bg-zinc-800 rounded-3xl shadow py-14 px-7">
              <div className=" text-white text-xl font-semibold font-['Noto Sans'] leading-7 justify-start flex items-start">
                Deposit GGG
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <div className="text-white/30 text-xs font-normal font-['Noto Sans'] leading-none">
                    Coin
                  </div>
                  <div className=" bg-stone-900 rounded-lg flex py-3 px-5 gap-3.5">
                    <span className="rounded-full flex bg-black grow-0 py-1 px-3 text-white text-base font-semibold  leading-3 items-center">
                      {GGGicon} GGG
                    </span>
                    <input
                      type="text"
                      placeholder="Good Games Guild Token"
                      className="bg-stone-900 placeholder:text-white/30 text-xl font-semibold font-['Noto Sans'] leading-7"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="text-white/30 text-xs font-normal font-['Noto Sans'] leading-none">
                    Network
                  </div>
                  <div className=" bg-stone-900 rounded-lg flex py-3 px-5 gap-3.5">
                    <span className="rounded-full flex grow-0  text-white text-base font-semibold  leading-3 items-center">
                      BSC
                    </span>
                    <input
                      type="text"
                      placeholder="BNB Smart Chain (BEP20)"
                      className="bg-stone-900 placeholder:text-white/30 text-xl font-semibold font-['Noto Sans'] leading-7"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="text-white/30 text-xs font-normal font-['Noto Sans'] leading-none">
                    Deposit to
                  </div>
                  <div className=" bg-stone-900 rounded-lg flex flex-col py-3 px-5 gap-2.5">
                    <div className="flex justify-between">
                      <div className="text-white text-base font-normal font-['Noto Sans'] leading-snug">
                        Address
                      </div>
                      <div className="flex gap-2">
                        <Image
                          src={"/assets/images/ggplay/Copy_small.svg"}
                          alt="small-copy-icon"
                          width={10}
                          height={10}
                        />
                        <Image
                          src={"/assets/images/ggplay/QR_small.svg"}
                          alt="small-qr-icon"
                          width={10}
                          height={10}
                        />
                      </div>
                    </div>
                    <div className="text-white/30 text-xs font-normal font-['Noto Sans'] leading-none">
                      0xf31ED1c6963c2117C7ED92b2fe3420eBF996aDfF
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-white/30 text-xs font-normal font-['Noto Sans'] gap-4 flex flex-col">
                <div className="flex">
                  <div className="flex flex-col gap-1.5 basis-1/2">
                    <div>Expected Arrival</div>
                    <div>15 Network confirmations</div>
                  </div>
                  <div className="flex flex-col gap-1.5 basis-1/2">
                    <div>Expected Unlock</div>
                    <div>15 Network confirmations</div>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex flex-col gap-1.5 basis-1/2">
                    <div>Minimum Deposit</div>
                    <div>0.1 GGG</div>
                  </div>
                  <div className="flex flex-col gap-1.5 basis-1/2">
                    <div>Contract Address</div>
                    <div>Ending in 73402</div>
                  </div>
                </div>

                <div>
                  <ul className="list-disc list-inside">
                    <li>Send only GGG to this deposit address.</li>
                    <li>
                      Ensure the network is
                      <span className="text-red-600">
                        {" "}
                        BNB Smart Chain (BEP20)
                      </span>
                    </li>
                    <li>Do not send NFTs to this address.</li>
                  </ul>
                </div>
              </div>
            </div>
            <button className="px-4 py-2 bg-pink-500 rounded justify-center items-center flex w-full text-white text-base font-semibold font-['Noto Sans'] leading-snug">
              Swap
            </button>
          </div>
        )}

        {activeModal == "Withdraw IDR" && (
          <div className="mt-2 py-14 flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="flex flex-col flex-1 h-20 py-1.5 px-2.5 bg-zinc-800 rounded-md border border-neutral-600 justify-start gap-2 ">
                <div className="text-stone-500 text-xs font-normal font-['Noto Sans'] leading-tight">
                  Payable amount
                </div>
                <div className="text-white text-xl font-semibold  leading-tight">
                  10.000.000
                </div>
              </div>

              <div className="flex flex-col flex-1 h-20 py-1.5 px-2.5 bg-zinc-800 rounded-md border border-neutral-600 justify-start gap-2 ">
                <div className="text-stone-500 text-xs font-normal font-['Noto Sans'] leading-tight">
                  Locked amount
                </div>
                <div className="text-white text-xl font-semibold  leading-tight">
                  5.000.000
                </div>
              </div>
            </div>

            <div className="w-full border-b border-neutral-600"></div>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <div className="flex flex-1 flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
                  >
                    Bank Name<span className="text-red-500">*</span>
                  </label>
                  <MenuDropDown dataset={banklist} selectitem={setBankSelect} />
                </div>

                <div className="flex flex-1 flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
                  >
                    Number Account Bank<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className=" p-3 bg-black text-white rounded-md placeholder:text-neutral-400 text-sm font-normal font-['Noto Sans'] leading-snug"
                    placeholder="Input your number bank account"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
                  >
                    ID Account Bank<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className=" p-3 bg-black text-white rounded-md placeholder:text-neutral-400 text-sm font-normal font-['Noto Sans'] leading-snug"
                    placeholder="ID Account Bank"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-1 flex-col gap-2.5">
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor=""
                      className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
                    >
                      Amount<span className="text-red-500">*</span>
                    </label>
                    <div className="text-white text-xs font-normal font-['Noto Sans'] leading-none">
                      Balance : {currentBalance} IDR
                    </div>
                  </div>
                  <div className="text-sm font-normal font-['Noto Sans'] leading-snug bg-black flex items-center rounded-md">
                    <input
                      type="number"
                      className=" p-3 bg-black text-white rounded-md placeholder:text-neutral-400 grow  "
                      placeholder="0000"
                      value={percentAmount}
                      onChange={(e) => setPercentAmount(e.target.value)}
                    />
                    <span className="text-neutral-400 flex-none px-5">IDR</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  {percentileamount.map((percent, index) => (
                    <button
                      key={percent}
                      className="px-8 py-3 bg-slate-600 rounded-lg justify-center items-center gap-2.5 inline-flex text-white text-base font-semibold font-['Noto Sans'] leading-none"
                      onClick={() =>
                        setPercentAmount((currentBalance * (index + 1)) / 4)
                      }
                    >
                      {percent}%
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button className="px-4 py-2 bg-pink-500 rounded justify-center items-center flex w-full text-white text-base font-semibold font-['Noto Sans'] leading-snug">
              Withdraw
            </button>
          </div>
        )}

        {activeModal == "Convert" && (
          <div className="flex flex-col justify-center items-center gap-6 py-1.5">
            <div className="text-center gap-2 flex flex-col">
              <div className="text-white text-base font-normal font-['Noto Sans'] leading-snug flex gap-2.5 items-center justify-center">
                Balance {GXTicon} {currency[1].saldo}
              </div>
              <div className="w-[300px] text-center text-zinc-400 text-xs font-normal font-['Noto Sans'] leading-none">
                Choose ammount to top up your GXTChoose ammount to top up your
                GXT
              </div>
            </div>
            <div className="w-full border-b border-neutral-600"></div>
            <div className="w-full p-1.5 bg-zinc-800 rounded-lg shadow-inner justify-start items-center gap-2 flex">
              <button
                className={`flex flex-1 h-9 px-3 py-2  rounded-md justify-center items-center gap-2 text-sm font-medium font-['DM Sans'] leading-tight ${
                  convertOption == `GGGtoGXT`
                    ? `bg-pink-500 text-white`
                    : `text-zinc-500`
                } `}
                onClick={() => {
                  setConvertOption(`GGGtoGXT`);
                  setActiveSwap(false);
                }}
              >
                GGG to GXT
              </button>
              <button
                className={`flex flex-1 h-9 px-3 py-2 rounded-md justify-center items-center gap-2 text-sm font-medium font-['DM Sans'] leading-tight ${
                  convertOption == `GXTtoIDR`
                    ? `bg-pink-500 text-white`
                    : `text-zinc-500`
                } `}
                onClick={() => {
                  setConvertOption(`GXTtoIDR`);
                  setActiveSwap(false);
                }}
              >
                GXT to IDR
              </button>
            </div>
            <div className="flex flex-col gap-10 px-3.5 py-4 items-center justify-center w-full h-full">
              <div className="text-white text-base font-semibold font-['Noto Sans']">
                {convertOption == "GGGtoGXT" ? "GGG to GXT" : "GXT to IDR"}
              </div>

              <div
                className={`flex flex-col${
                  activeSwap ? `-reverse` : ``
                } gap-3 relative w-full h-full justify-center items-center`}
              >
                <MdSwapVert
                  className="absolute w-12 h-12 bg-zinc-900 rounded-full p-1 cursor-pointer"
                  onClick={() => setActiveSwap(!activeSwap)}
                />

                <div className="flex bg-zinc-800 w-full py-8 px-5 rounded-lg justify-between items-center h-32">
                  <div className="flex flex-col justify-between h-full">
                    <div className="text-white/30 text-xs font-normal font-['Noto Sans'] leading-none">
                      {activeSwap ? `To` : `From`}
                    </div>
                    <div className="text-white text-2xl font-semibold font-['Noto Sans'] ">
                      0.00
                    </div>
                  </div>

                  <div className="flex flex-col justify-between h-full">
                    <div className="flex text-right text-white/30 text-xs font-normal font-['Noto Sans'] leading-none ">
                      Balance :{" "}
                      {convertOption == "GGGtoGXT"
                        ? `${currency[2].saldo} ${currency[2].currency}`
                        : `${currency[1].saldo} ${currency[1].currency}`}
                    </div>
                    <div className="flex justify-end">
                      {convertOption == "GGGtoGXT" ? (
                        <div className="rounded-full flex bg-black grow-0 py-2 px-4 leading-3 items-center text-white text-base font-normal font-['Noto Sans'] leading-snug gap-2">
                          {GGGicon} GGG
                        </div>
                      ) : (
                        <div className="rounded-full flex bg-black grow-0 py-2 px-4 leading-3 items-center text-white text-base font-normal font-['Noto Sans'] leading-snug gap-2">
                          {GXTicon} GXT
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex bg-zinc-800 w-full py-8 px-5 rounded-lg justify-between items-center h-32">
                  <div className="flex flex-col justify-between h-full">
                    <div className="text-white/30 text-xs font-normal font-['Noto Sans'] leading-none">
                      {!activeSwap ? `To` : `From`}
                    </div>
                    <div className="text-white text-2xl font-semibold font-['Noto Sans'] ">
                      0.00
                    </div>
                  </div>

                  <div className="flex flex-col justify-between h-full">
                    <div className="flex text-right text-white/30 text-xs font-normal font-['Noto Sans'] leading-none ">
                      Balance :{" "}
                      {convertOption == "GGGtoGXT"
                        ? `${currency[1].saldo} ${currency[1].currency}`
                        : `${currency[0].saldo} ${currency[0].currency}`}
                    </div>
                    <div className="flex justify-end">
                      {convertOption == "GGGtoGXT" ? (
                        <div className="rounded-full flex bg-black shrink py-2 px-4 leading-3 items-center text-white text-base font-normal font-['Noto Sans'] leading-snug gap-2">
                          {GXTicon} GXT
                        </div>
                      ) : (
                        <div className="rounded-full flex bg-black flex-0 py-2 px-4 leading-3 items-center text-white text-base font-normal font-['Noto Sans'] leading-snug gap-2">
                          Rp. IDR
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <button className="px-4 py-2 bg-pink-500 rounded justify-center items-center flex w-full text-white text-base font-semibold font-['Noto Sans'] leading-snug">
                Swap
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default InteractCurrency;

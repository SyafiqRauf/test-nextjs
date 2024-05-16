"use client";
import React, { Fragment, useState } from "react";
import MyProfileGGPlay from "./MyProfileGGPlay";
import { FaChevronDown, FaCircleArrowUp, FaCirclePlus } from "react-icons/fa6";
import { LuRepeat } from "react-icons/lu";
import { Menu, Transition } from "@headlessui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CgSearch } from "react-icons/cg";
import { GrDocumentTransfer } from "react-icons/gr";
import Modals from "./Modals";
import InteractCurrency from "./InteractCurrency";

const ProfileTabList = () => {
  const currency = [
    {
      currency: "IDR",
      saldo: "12.000.000",
    },
    {
      currency: "GXT",
      saldo: "100.000",
    },
    {
      currency: "GGG",
      saldo: "120",
    },
  ];
  const interactcurrency = [
    {
      text: "Top Up GXT",
      icon: <FaCirclePlus />,
    },
    {
      text: "Deposit GGG",
      icon: <FaCirclePlus />,
    },
    {
      text: "Withdraw IDR",
      icon: <FaCircleArrowUp />,
    },
    {
      text: "Convert",
      icon: <LuRepeat />,
    },
  ];
  const tablehead = [
    "ID_Transaction",
    "Transaction date",
    "Ammount",
    "Fee_Transaction",
    "Method",
    "Status",
    "Nett_Ammount",
  ];
  const datatransaction = [
    {
      ID_Transaction: "76352882311",
      Transaction_date: "22 Jan 2023",
      Status: "sukses",
    },
    {
      ID_Transaction: "76352882312",
      Transaction_date: "22 Jan 2023",
      Ammount: "- Rp. 5.000",
      Fee_Transaction: "- Rp. 5.000",
      Method: "- Rp. 5.000",
      Status: "pending",
      Nett_Ammount: "- Rp. 5.000",
    },
    {
      ID_Transaction: "76352882313",
      Transaction_date: "22 Jan 2023",
      Ammount: 100,
      Fee_Transaction: 10,
      Method: "Credit Card",
      Status: "Success",
      Nett_Ammount: 90,
    },
    {
      ID_Transaction: "76352882314",
      Transaction_date: "22 Jan 2023",
      Ammount: 150,
      Fee_Transaction: 15,
      Method: "PayPal",
      Status: "Failed",
      Nett_Ammount: 135,
    },
    {
      ID_Transaction: "76352882315",
      Transaction_date: "22 Jan 2023",
      Status: "sukses",
    },
    {
      ID_Transaction: "76352882316",
      Transaction_date: "22 Jan 2023",
      Ammount: "- Rp. 5.000",
      Fee_Transaction: "- Rp. 5.000",
      Method: "- Rp. 5.000",
      Status: "pending",
      Nett_Ammount: "- Rp. 5.000",
    },
    {
      ID_Transaction: "76352882317",
      Transaction_date: "22 Jan 2023",
      Ammount: 100,
      Fee_Transaction: 10,
      Method: "Credit Card",
      Status: "Success",
      Nett_Ammount: 90,
    },
    {
      ID_Transaction: "76352882318",
      Transaction_date: "22 Jan 2023",
      Ammount: 150,
      Fee_Transaction: 15,
      Method: "PayPal",
      Status: "Failed",
      Nett_Ammount: 135,
    },
    {
      ID_Transaction: "76352882319",
      Transaction_date: "22 Jan 2023",
      Status: "sukses",
    },
    {
      ID_Transaction: "76352882320",
      Transaction_date: "22 Jan 2023",
      Ammount: "- Rp. 5.000",
      Fee_Transaction: "- Rp. 5.000",
      Method: "- Rp. 5.000",
      Status: "pending",
      Nett_Ammount: "- Rp. 5.000",
    },
    {
      ID_Transaction: "76352882321",
      Transaction_date: "22 Jan 2023",
      Ammount: 100,
      Fee_Transaction: 10,
      Method: "Credit Card",
      Status: "Success",
      Nett_Ammount: 90,
    },
    {
      ID_Transaction: "76352882322",
      Transaction_date: "22 Jan 2023",
      Ammount: 150,
      Fee_Transaction: 15,
      Method: "PayPal",
      Status: "Failed",
      Nett_Ammount: 135,
    },
    {
      ID_Transaction: "76352882323",
      Transaction_date: "22 Jan 2023",
      Status: "sukses",
    },
    {
      ID_Transaction: "76352882324",
      Transaction_date: "22 Jan 2023",
      Ammount: "- Rp. 5.000",
      Fee_Transaction: "- Rp. 5.000",
      Method: "- Rp. 5.000",
      Status: "pending",
      Nett_Ammount: "- Rp. 5.000",
    },
    {
      ID_Transaction: "76352882325",
      Transaction_date: "22 Jan 2023",
      Ammount: 100,
      Fee_Transaction: 10,
      Method: "Credit Card",
      Status: "Success",
      Nett_Ammount: 90,
    },
    {
      ID_Transaction: "76352882326",
      Transaction_date: "22 Jan 2023",
      Ammount: 150,
      Fee_Transaction: 15,
      Method: "PayPal",
      Status: "Failed",
      Nett_Ammount: 135,
    },
  ];
  const [rowSelected, setRowSelected] = useState(2);
  const [pageSelect, setPageSelect] = useState(1);
  const [activeModal, setActiveModal] = useState("");
  const [showModal, setShowModal] = useState(false);
  const totalpage = Math.ceil(datatransaction.length / rowSelected);
  const startIndex = rowSelected * (pageSelect - 1) + 1;
  const endIndex = rowSelected * pageSelect;
  const rowsoption = [2, 4, 7, 8, 10, 25];
  const tablist = ["Balance", "My Profile", "Settings"];
  const [activeTabList, setActiveTabList] = useState("My Profile");
  const pagenavigation = (data: any) => {
    if (data == "+" && startIndex + rowSelected <= datatransaction.length) {
      setPageSelect(pageSelect + 1);
    }
    if (data == "-" && startIndex - rowSelected > 0) {
      setPageSelect(pageSelect - 1);
    }
  };

  const tdstyle = `py-3 px-6 bg-zinc-900 text-zinc-400 flex flex-1 text-center justify-center text-base font-semibold font-['Noto Sans'] leading-snug`;

  const tdcontent = "p-2.5";
  return (
    <>
      <div className="flex flex-1">
        <div className="min-w-full  py-4 justify-center items-center inline-flex">
          <div className="justify-start items-center flex">
            {tablist.map((tabsname) => (
              <div className="mx-2.5" key={tabsname}>
                <button
                  className={` text-sm  font-['Noto Sans'] leading-tight  py-3 ${
                    activeTabList == tabsname
                      ? `text-white font-semibold `
                      : `text-zinc-300 font-normal`
                  }`}
                  onClick={() => setActiveTabList(tabsname)}
                >
                  {tabsname}
                </button>
                <div
                  className={`h-[3px] rounded-full ${
                    activeTabList == tabsname && `bg-pink-600 `
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {activeTabList == "My Profile" && <MyProfileGGPlay />}
      {activeTabList == "Balance" && (
        <div>
          {/* {showModal && (
            <Modals
              setShowModal={setShowModal}
              components={
                activeModal == 0 ? (
                  <TopUpGXT setShowModal={setShowModal} />
                ) : activeModal == 1 ? (
                  <VerificationProfileStep setShowModal={setShowModal} />
                ) : activeModal == 2 ? (
                  <VerificationProfileStep setShowModal={setShowModal} />
                ) : (
                  <Convert setShowModal={setShowModal} />
                )
              }
            />
          )} */}
          {showModal && (
            <Modals
              setShowModal={setShowModal}
              components={
                <InteractCurrency
                  setShowModal={setShowModal}
                  activeModal={activeModal}
                  currency={currency}
                />
              }
            />
          )}
          <div className="flex flex-col mt-5 gap-6">
            <div className="flex gap-5">
              {currency.map((data) => (
                <div
                  key={data.currency}
                  className={`py-4 px-[7px] flex flex-col flex-1  min-h-4 bg-zinc-900 rounded border border-neutral-600`}
                >
                  <div className=" text-gray-300 text-sm font-medium font-['Noto Sans'] leading-tight">
                    Saldo {data.currency}
                  </div>
                  <div className="pl-1 text-white text-2xl font-semibold font-['Noto Sans'] leading-loose">
                    {data.saldo}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-6 py-2.5">
              {interactcurrency.map((interactdata, index) => (
                <button
                  key={interactdata.text}
                  className="flex flex-1 items-center justify-center gap-1.5 px-4 py-2 bg-pink-600 rounded text-white"
                  onClick={() => {
                    setActiveModal(interactdata.text);
                    setShowModal(true);
                  }}
                >
                  {interactdata.icon}
                  {interactdata.text}
                </button>
              ))}
            </div>
          </div>

          <hr className="my-12" />

          <div className="flex flex-col gap-6">
            <div className="gap-6">
              <div>
                <div className="text-white">Data Balance History</div>
              </div>

              <div className="flex justify-between items-center h-full">
                <div className="flex gap-3">
                  <div className="flex h-auto w-44 bg-zinc-800 text-neutral-400 gap-2.5 px-3 py-2.5 justify-between items-center rounded">
                    Filter <FaChevronDown />
                  </div>
                  <div className="flex h-auto w-44 bg-zinc-800 text-neutral-400 gap-2.5 px-3 py-2.5 justify-between items-center rounded">
                    Sort By <FaChevronDown />
                  </div>
                </div>

                <div className="flex gap-4 h-full">
                  <div className="flex rounded bg-zinc-800 text-zinc-400 items-center justify-center pl-3 gap-2 h-auto">
                    <CgSearch className="w-6 h-full" />
                    <input
                      className="text-zinc-400 text-base font-normal font-['Noto Sans'] leading-snug w-72 h-full bg-zinc-800 rounded-r justify-start items-center gap-2.5 inline-flex flex-1 ring-0 active:ring-0"
                      placeholder="Search"
                    />
                  </div>
                  <div className=" px-4 py-2 bg-pink-600 text-white rounded justify-center items-center gap-2 flex ">
                    <GrDocumentTransfer />
                    <div className="text-white text-base font-semibold font-['Noto Sans'] leading-snug">
                      Export CSV
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <table className="flex flex-1 flex-col">
                <tr className="flex flex-1 ">
                  {tablehead.map((th) => (
                    <th
                      key={th}
                      className="py-3 px-6 bg-zinc-800 text-zinc-400 flex flex-1 text-center text-xs font-medium  leading-none justify-center items-center"
                    >
                      {th}
                    </th>
                  ))}
                </tr>
                {datatransaction.map(
                  (datatransaksi, indextransaksi) =>
                    indextransaksi >= rowSelected * (pageSelect - 1) &&
                    indextransaksi < rowSelected * pageSelect && (
                      <tr
                        key={indextransaksi}
                        className="flex border-b border-neutral-600"
                      >
                        <td className={`${tdstyle}`}>
                          <span className={`${tdcontent}`}>
                            {datatransaksi?.ID_Transaction}
                          </span>
                        </td>
                        <td className={`${tdstyle}`}>
                          <span className={`${tdcontent}`}>
                            {datatransaksi?.Transaction_date}
                          </span>
                        </td>
                        <td className={`${tdstyle}`}>
                          <span className={`${tdcontent}`}>
                            {datatransaksi?.Ammount}
                          </span>
                        </td>
                        <td className={`${tdstyle}`}>
                          <span className={`${tdcontent}`}>
                            {datatransaksi?.Fee_Transaction}
                          </span>
                        </td>
                        <td className={`${tdstyle}`}>
                          <span className={`${tdcontent}`}>
                            {datatransaksi?.Method}
                          </span>
                        </td>
                        <td className={`${tdstyle}`}>
                          <span className={`${tdcontent}`}>
                            {datatransaksi?.Status}
                          </span>
                        </td>
                        <td className={`${tdstyle}`}>
                          <span className={`${tdcontent}`}>
                            {datatransaksi?.Nett_Ammount}
                          </span>
                        </td>
                      </tr>
                    )
                )}
              </table>
            </div>
            <div className="flex justify-between items-center text-center text-zinc-400 text-sm font-semibold font-['Noto Sans'] leading-tight px-4">
              <div>
                <Menu as="div" className="relative ">
                  <Menu.Button className={`flex w-full`}>
                    <div
                      className={`flex flex-1 w-full  p-3 rounded-md justify-between items-center gap-1 ${
                        rowSelected == 8 ? `text-[#999999]` : `text-white`
                      }`}
                    >
                      <span>Row of {rowSelected}</span>
                      <FaChevronDown />
                    </div>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      className={`absolute flex flex-col w-full z-10 bg-black text-white p-3 rounded-md mb-12 bottom-0`}
                    >
                      {rowsoption.map((data: any) => (
                        <Menu.Item key={data}>
                          {({ active }) => (
                            <div
                              className={`${
                                active && "bg-blue-500"
                              } items-start justify-start flex cursor-pointer`}
                              onClick={() => {
                                pageSelect >
                                  Math.ceil(
                                    datatransaction.length / rowSelected
                                  ) &&
                                  setPageSelect(
                                    datatransaction.length / rowSelected
                                  );
                                setRowSelected(data);
                              }}
                            >
                              {data}
                            </div>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <button onClick={() => pagenavigation("-")} className="">
                  <FaChevronLeft />
                </button>

                {totalpage >= 1 && (
                  <button
                    className={`w-8 h-8 justify-center items-center flex flex-1 rounded p-1
                      ${pageSelect == 1 ? `text-white bg-pink-600 ` : ``}`}
                    onClick={() => setPageSelect(1)}
                  >
                    1
                  </button>
                )}
                {totalpage >= 2 && (
                  <button
                    className={`w-8 h-8 justify-center items-center flex flex-1 rounded p-1
                      ${pageSelect == 2 ? `text-white bg-pink-600 ` : ``}`}
                    onClick={() => setPageSelect(2)}
                  >
                    2
                  </button>
                )}
                {totalpage == 3 && (
                  <button
                    className={` w-8 h-8 justify-center items-center flex flex-1 rounded p-1
                      ${pageSelect == 3 ? `text-white bg-pink-600 ` : ``}
                    `}
                    onClick={() => setPageSelect(3)}
                  >
                    3
                  </button>
                )}

                {pageSelect > 3 && totalpage > 4 && <button>...</button>}
                {pageSelect > 2 && pageSelect < totalpage - 1 && (
                  <button
                    className={`text-white bg-pink-600 justify-center items-center rounded p-1 flex flex-1 w-8 h-8`}
                  >
                    {pageSelect}
                  </button>
                )}
                {pageSelect < totalpage - 2 && totalpage > 4 && (
                  <button>...</button>
                )}
                {totalpage >= 4 && (
                  <button
                    className={`w-8 h-8 justify-center items-center flex flex-1 rounded p-1 ${
                      pageSelect == totalpage - 1
                        ? `text-white bg-pink-600 `
                        : ``
                    }`}
                    onClick={() => setPageSelect(totalpage - 1)}
                  >
                    {totalpage - 1}
                  </button>
                )}
                {totalpage >= 4 && (
                  <button
                    className={`w-8 h-8 justify-center items-center flex flex-1 rounded p-1 ${
                      pageSelect == totalpage ? `text-white bg-pink-600 ` : ``
                    }`}
                    onClick={() => setPageSelect(totalpage)}
                  >
                    {totalpage}
                  </button>
                )}

                <button onClick={() => pagenavigation("+")} className="">
                  <FaChevronRight />
                </button>
              </div>
              <div>
                {startIndex > datatransaction.length
                  ? datatransaction.length - rowSelected < 0
                    ? 1
                    : datatransaction.length - rowSelected
                  : startIndex}{" "}
                -{" "}
                {endIndex > datatransaction.length
                  ? datatransaction.length
                  : endIndex}{" "}
                of {datatransaction.length}
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTabList == "Settings" && (
        <div className="w-full">
          <form
            action="POST"
            className={`px-8 py-9 bg-zinc-900 flex flex-col rounded gap-6 justify-center w-full`}
          >
            <div className=" text-white text-2xl font-bold font-['Noto Sans'] tracking-tight">
              Change Email
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="old_email"
                className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
              >
                Old Email<span className="text-red-500">*</span>
              </label>

              <input
                id="old_email"
                name="old_email"
                type="text"
                disabled
                className="py-2.5 px-3.5 flex-1 flex w-full bg-zinc-700 text-white/30 text-sm font-normal font-['Noto Sans'] leading-snug rounded"
                value={`testemail@gmail.com`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="new_email"
                className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
              >
                New Email<span className="text-red-500">*</span>
              </label>
              <input
                id="new_email"
                name="new_email"
                type="text"
                className="py-2.5 px-3.5 flex-1 flex w-full bg-black text-neutral-400 text-sm font-normal font-['Noto Sans'] leading-snug rounded"
                placeholder={`testemail@gmail.com`}
              />
              <div className="text-neutral-400 text-xs font-normal font-['Noto Sans']">
                The email will change when you press the verification link sent
                to your new email.
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="new_email"
                className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
              >
                Verification Code<span className="text-red-500">*</span>
              </label>
              <div className="flex gap-16">
                <input
                  id="new_email"
                  name="new_email"
                  type="text"
                  className="py-2.5 px-3.5 flex-1 flex w-full bg-black text-neutral-400 text-sm font-normal font-['Noto Sans'] leading-snug rounded"
                  placeholder={`Enter 6 digits Code`}
                />
                <div className=" px-4 py-2 bg-pink-500 rounded justify-center items-center inline-flex text-white text-base font-semibold font-['Noto Sans'] leading-snug cursor-pointer">
                  Send Code
                </div>
              </div>
              <div className="text-neutral-400 text-xs font-normal font-['Noto Sans']">
                A verification code will be sent to the email you registered.
              </div>
            </div>
            <div className="flex">
              <button
                type="submit"
                className="px-4 py-2 bg-pink-600 rounded justify-center items-center inline-flex text-white text-sm font-semibold font-['Noto Sans'] leading-tight"
              >
                Change Email
              </button>
            </div>
          </form>

          <div className="my-8 w-full flex-1 justify-start items-start inline-flex self-stretch border-b border-neutral-600"></div>
          <form
            action="POST"
            className={`px-8 py-9 bg-zinc-900 flex flex-col rounded gap-6 justify-center w-full`}
          >
            <div className=" text-white text-2xl font-bold font-['Noto Sans'] tracking-tight">
              Change Password
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="old_password"
                className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
              >
                Old Password<span className="text-red-500">*</span>
              </label>

              <input
                id="old_password"
                name="old_password"
                type="password"
                className="py-2.5 px-3.5 flex-1 flex w-full bg-black text-white text-sm font-normal font-['Noto Sans'] leading-snug rounded"
                placeholder="**********"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="new_password"
                className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
              >
                New Password<span className="text-red-500">*</span>
              </label>
              <input
                id="new_password"
                name="new_password"
                type="password"
                className="py-2.5 px-3.5 flex-1 flex w-full bg-black text-white text-sm font-normal font-['Noto Sans'] leading-snug rounded"
                placeholder="**********"
              />
              <div className="text-neutral-400 text-xs font-normal font-['Noto Sans']">
                Use a minimum of 8 characters with a combination of letters and
                numbers.
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="confirm_password"
                className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
              >
                Confirm New Password<span className="text-red-500">*</span>
              </label>
              <input
                id="confirm_password"
                name="confirm_password"
                type="password"
                className="py-2.5 px-3.5 flex-1 flex w-full bg-black text-white text-sm font-normal font-['Noto Sans'] leading-snug rounded"
                placeholder="**********"
              />
            </div>
            <div className="flex">
              <button
                type="submit"
                className="px-4 py-2 bg-pink-600 rounded justify-center items-center inline-flex text-white text-sm font-semibold font-['Noto Sans'] leading-tight"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ProfileTabList;

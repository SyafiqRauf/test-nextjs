"use client";

import React, { useState } from "react";
import MenuDropDownMyProfile from "./MenuDropDownMyProfile";

const MyProfileGGPlay = () => {
  const countrydata = [
    {
      name: "indonesia",
      province: [
        {
          name: "DKI Jakarta",
          city: [
            {
              name: "Jakarta Utara",
            },
            {
              name: "Jakarta Selatan",
            },
            {
              name: "Jakarta Timur",
            },
            {
              name: "Jakarta Barat",
            },
            {
              name: "Jakarta Pusat",
            },
          ],
        },
        {
          name: "Gorontalo",
          city: [
            {
              name: "Kab. Bone Bolango",
            },
            {
              name: "Kota Gorontalo",
            },
            {
              name: "Kab. Gorontalo",
            },
            {
              name: "Kab. Boalemo",
            },
            {
              name: "Kab. Pohuato",
            },
          ],
        },
      ],
    },
    {
      name: "US America",
      province: [
        {
          name: "Texas",
          city: [
            {
              name: "Houston",
            },
            {
              name: "Dallas",
            },
            {
              name: "Austin",
            },
            {
              name: "Alamo",
            },
            {
              name: "Missouri City",
            },
          ],
        },
        {
          name: "California",
          city: [
            {
              name: "Los Angeles",
            },
            {
              name: "San Diego",
            },
            {
              name: "San Jose",
            },
            {
              name: "San Francisco",
            },
            {
              name: "Oakland",
            },
          ],
        },
      ],
    },
  ];
  const gender = [
    {
      name: "Male",
    },
    {
      name: "Female",
    },
    {
      name: "Other",
    },
  ];
  const [activeGender, setActiveGender] = useState(null);
  const [activeCountry, setActiveCountry] = useState(0);
  const [activeProvince, setActiveProvince] = useState(0);
  const [activeCity, setActiveCity] = useState(0);

  return (
    <>
      <div className="min-h-96 w-full rounded-md bg-[#171B21] py-9 px-8">
        <form action="#" method="GET" className="flex flex-col gap-[10px]">
          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor=""
                className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
              >
                Full name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className=" p-3 bg-black text-white rounded-md placeholder:text-[#999999]"
                placeholder="Enter Your Full Name"
              />
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor=""
                className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
              >
                Username<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="flex-1 p-3 bg-black text-white rounded-md placeholder:text-[#999999]"
                placeholder="Enter Your Username"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor=""
                className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
              >
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="flex-1 p-3 bg-black text-white rounded-md placeholder:text-[#999999]"
                placeholder="Input your phone number"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <label
              htmlFor=""
              className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
            >
              Country<span className="text-red-500">*</span>
            </label>
            <MenuDropDownMyProfile
              dataset={countrydata}
              selectitem={setActiveCountry}
              className="bg-black"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor=""
                className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
              >
                Province of Domicile<span className="text-red-500">*</span>
              </label>
              <MenuDropDownMyProfile
                dataset={countrydata[activeCountry].province}
                selectitem={setActiveProvince}
              />
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor=""
                className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
              >
                City of Domicile<span className="text-red-500">*</span>
              </label>
              <MenuDropDownMyProfile
                dataset={
                  countrydata[activeCountry].province[activeProvince].city
                }
                selectitem={setActiveCity}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor=""
                className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
              >
                Gender<span className="text-red-500">*</span>
              </label>
              <MenuDropDownMyProfile
                dataset={gender}
                selectitem={setActiveGender}
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor=""
                className="text-white text-xs font-semibold font-['Noto Sans'] leading-none"
              >
                Birthday<span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                className="flex-1 bg-black text-white p-3 rounded-md placeholder:text-[#999999]"
                placeholder="test"
              />
            </div>
          </div>
          <div className="flex flex-1 justify-end mt-10">
            <input
              type="submit"
              className=" text-white px-4 py-2 bg-pink-600 rounded justify-center items-center inline-flex text-base font-semibold font-['Noto Sans'] leading-snug cursor-pointer"
              value={`Save`}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default MyProfileGGPlay;

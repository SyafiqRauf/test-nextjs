"use client";

import React, { useState } from "react";

const TopUpGXT = ({ setShowModal }: any) => {
  const [amount, setAmount] = useState("");
  return (
    <>
      <div className="flex flex-col p-6 bg-zinc-900 gap-2">
        <div className="flex justify-between items-center">
          <label htmlFor="">title</label>
          <div
            className="text-white cursor-pointer"
            onClick={() => setShowModal(false)}
          >
            X
          </div>
        </div>
      </div>
    </>
  );
};

export default TopUpGXT;

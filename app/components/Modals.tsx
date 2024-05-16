"use client";

import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

const Modals = ({ setShowModal, components }: any) => {
  return (
    <>
      {setShowModal && (
        <div className="h-screen w-screen bg-white/10 backdrop-blur-sm fixed z-10 top-0 left-0 flex items-center justify-center overflow-auto">
          {components}
        </div>
      )}
    </>
  );
};

export default Modals;

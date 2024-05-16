"use client";

import React, { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const FAQ = ({ faqContent }: any) => {
  const [activeQuestion, setActiveQuestion] = useState();

  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center">
        {faqContent.map((faqs) => (
          <div key={faqs.question}>
            <button
              className="flex w-96 bg-white items-center justify-between p-4"
              onClick={() =>
                setActiveQuestion(activeQuestion === faqs.id ? null : faqs.id)
              }
            >
              {faqs.question}
              {activeQuestion === faqs.id ? (
                <FaMinusCircle />
              ) : (
                <FaPlusCircle />
              )}
            </button>
            {activeQuestion === faqs.id && (
              <div className="p-4 bg-slate-400">{faqs.answer}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;

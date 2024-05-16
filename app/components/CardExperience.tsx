import React from "react";

const CardExperience = () => {
  return (
    <>
      <div className="card1 min-h-96 w-full bg-white mb-3 p-5 rounded">
        <h4 className="font-bold">Experience</h4>
        <div className="experience-timeline relative mt-4">
          <div className="timeline-item flex">
            <svg
              className="absolute"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              width={25}
              height={25}
            >
              <circle cx="100" cy="100" r="100" fill="#888" />
              <circle cx="100" cy="100" r="50" fill="#000" />
            </svg>

            <div className="timeline-info border-l ml-3 p-0 pl-5 border-black ">
              <h5 className="mt-0 mb-1 font-semibold">
                Senior Graphic Designer
              </h5>
              <p className="font-normal text-sm">
                Software Inc.{" "}
                <span className="ml-2 font-extralight text-xs">
                  Year: 2015 - 18
                </span>
              </p>
              <p className="text-sm font-light mt-2 mb-0 pb-3 text-justify">
                If several languages coalesce, the grammar of the resulting
                language is more simple and regular than that of the individual
                languages. The new common language will be more simple and
                regular than the existing European languages.
              </p>
            </div>
          </div>
          <div className="timeline-item flex">
            <svg
              className="absolute"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              width="25"
              height="25"
            >
              <circle cx="100" cy="100" r="100" fill="#888" />
              <circle cx="100" cy="100" r="50" fill="#000" />
            </svg>

            <div className="timeline-info border-l ml-3 p-0 pl-5 border-black ">
              <h5 className="mt-0 mb-1 font-semibold">
                Lead designer / Developer
              </h5>
              <p className="font-normal text-sm">
                websitename.com
                <span className="ml-2 font-extralight text-xs">
                  Year: 2012 - 15
                </span>
              </p>
              <p className="text-sm font-light mt-2 mb-0 pb-3 text-justify">
                Everyone realizes why a new common language would be desirable:
                one could refuse to pay expensive translators. To achieve this,
                it would be necessary to have uniform grammar, pronunciation and
                more common words.
              </p>
            </div>
          </div>
          <div className="timeline-item flex">
            <svg
              className="absolute"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              width="25"
              height="25"
            >
              <circle cx="100" cy="100" r="100" fill="#888" />
              <circle cx="100" cy="100" r="50" fill="#000" />
            </svg>

            <div className="timeline-info border-l ml-3 p-0 pl-5 border-black ">
              <h5 className="mt-0 mb-1 font-semibold">Graphic Designer</h5>
              <p className="font-normal text-sm">
                websitename.com
                <span className="ml-2 font-extralight text-xs">
                  Year: 2010 - 12
                </span>
              </p>
              <p className="text-sm font-light mt-2 mb-0 pb-3 text-justify">
                The European languages are members of the same family. Their
                separate existence is a myth. For science music sport etc,
                Europe uses the same vocabulary. The languages only differ in
                their grammar their pronunciation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardExperience;

import React from "react";

const RebateRatio = () => {
  const rebateData = [
    {
      level: "L0",
      details: [
        { description: "1 level lower level commission rebate", rate: "0.6%" },
        { description: "2 level lower level commission rebate", rate: "0.18%" },
        {
          description: "3 level lower level commission rebate",
          rate: "0.054%",
        },
        {
          description: "4 level lower level commission rebate",
          rate: "0.016%",
        },
        {
          description: "5 level lower level commission rebate",
          rate: "0.0048%",
        },
        {
          description: "6 level lower level commission rebate",
          rate: "0.0014%",
        },
      ],
    },
    {
      level: "L1",
      details: [
        { description: "1 level lower level commission rebate", rate: "0.6%" },
        { description: "2 level lower level commission rebate", rate: "0.18%" },
        {
          description: "3 level lower level commission rebate",
          rate: "0.054%",
        },
        {
          description: "4 level lower level commission rebate",
          rate: "0.016%",
        },
        {
          description: "5 level lower level commission rebate",
          rate: "0.0048%",
        },
        {
          description: "6 level lower level commission rebate",
          rate: "0.0014%",
        },
      ],
    },
    {
      level: "L2",
      details: [
        { description: "1 level lower level commission rebate", rate: "0.6%" },
        { description: "2 level lower level commission rebate", rate: "0.18%" },
        {
          description: "3 level lower level commission rebate",
          rate: "0.054%",
        },
        {
          description: "4 level lower level commission rebate",
          rate: "0.016%",
        },
        {
          description: "5 level lower level commission rebate",
          rate: "0.0048%",
        },
        {
          description: "6 level lower level commission rebate",
          rate: "0.0014%",
        },
      ],
    },
    {
      level: "L3",
      details: [
        { description: "1 level lower level commission rebate", rate: "0.6%" },
        { description: "2 level lower level commission rebate", rate: "0.18%" },
        {
          description: "3 level lower level commission rebate",
          rate: "0.054%",
        },
        {
          description: "4 level lower level commission rebate",
          rate: "0.016%",
        },
        {
          description: "5 level lower level commission rebate",
          rate: "0.0048%",
        },
        {
          description: "6 level lower level commission rebate",
          rate: "0.0014%",
        },
      ],
    },
    {
      level: "L4",
      details: [
        { description: "1 level lower level commission rebate", rate: "0.6%" },
        { description: "2 level lower level commission rebate", rate: "0.18%" },
        {
          description: "3 level lower level commission rebate",
          rate: "0.054%",
        },
        {
          description: "4 level lower level commission rebate",
          rate: "0.016%",
        },
        {
          description: "5 level lower level commission rebate",
          rate: "0.0048%",
        },
        {
          description: "6 level lower level commission rebate",
          rate: "0.0014%",
        },
      ],
    },
    {
      level: "L5",
      details: [
        { description: "1 level lower level commission rebate", rate: "0.6%" },
        { description: "2 level lower level commission rebate", rate: "0.18%" },
        {
          description: "3 level lower level commission rebate",
          rate: "0.054%",
        },
        {
          description: "4 level lower level commission rebate",
          rate: "0.016%",
        },
        {
          description: "5 level lower level commission rebate",
          rate: "0.0048%",
        },
        {
          description: "6 level lower level commission rebate",
          rate: "0.0014%",
        },
      ],
    },
    {
      level: "L6",
      details: [
        { description: "1 level lower level commission rebate", rate: "0.6%" },
        { description: "2 level lower level commission rebate", rate: "0.18%" },
        {
          description: "3 level lower level commission rebate",
          rate: "0.054%",
        },
        {
          description: "4 level lower level commission rebate",
          rate: "0.016%",
        },
        {
          description: "5 level lower level commission rebate",
          rate: "0.0048%",
        },
        {
          description: "6 level lower level commission rebate",
          rate: "0.0014%",
        },
      ],
    },
    {
      level: "L7",
      details: [
        { description: "1 level lower level commission rebate", rate: "0.6%" },
        { description: "2 level lower level commission rebate", rate: "0.18%" },
        {
          description: "3 level lower level commission rebate",
          rate: "0.054%",
        },
        {
          description: "4 level lower level commission rebate",
          rate: "0.016%",
        },
        {
          description: "5 level lower level commission rebate",
          rate: "0.0048%",
        },
        {
          description: "6 level lower level commission rebate",
          rate: "0.0014%",
        },
      ],
    },
    {
      level: "L8",
      details: [
        { description: "1 level lower level commission rebate", rate: "0.6%" },
        { description: "2 level lower level commission rebate", rate: "0.18%" },
        {
          description: "3 level lower level commission rebate",
          rate: "0.054%",
        },
        {
          description: "4 level lower level commission rebate",
          rate: "0.016%",
        },
        {
          description: "5 level lower level commission rebate",
          rate: "0.0048%",
        },
        {
          description: "6 level lower level commission rebate",
          rate: "0.0014%",
        },
      ],
    },
    {
      level: "L9",
      details: [
        { description: "1 level lower level commission rebate", rate: "0.6%" },
        { description: "2 level lower level commission rebate", rate: "0.18%" },
        {
          description: "3 level lower level commission rebate",
          rate: "0.054%",
        },
        {
          description: "4 level lower level commission rebate",
          rate: "0.016%",
        },
        {
          description: "5 level lower level commission rebate",
          rate: "0.0048%",
        },
        {
          description: "6 level lower level commission rebate",
          rate: "0.0014%",
        },
      ],
    },
    {
      level: "L10",
      details: [
        { description: "1 level lower level commission rebate", rate: "0.6%" },
        { description: "2 level lower level commission rebate", rate: "0.18%" },
        {
          description: "3 level lower level commission rebate",
          rate: "0.054%",
        },
        {
          description: "4 level lower level commission rebate",
          rate: "0.016%",
        },
        {
          description: "5 level lower level commission rebate",
          rate: "0.0048%",
        },
        {
          description: "6 level lower level commission rebate",
          rate: "0.0014%",
        },
      ],
    },
    {
      level: "L11",
      details: [
        { description: "1 level lower level commission rebate", rate: "0.6%" },
        { description: "2 level lower level commission rebate", rate: "0.18%" },
        {
          description: "3 level lower level commission rebate",
          rate: "0.054%",
        },
        {
          description: "4 level lower level commission rebate",
          rate: "0.016%",
        },
        {
          description: "5 level lower level commission rebate",
          rate: "0.0048%",
        },
        {
          description: "6 level lower level commission rebate",
          rate: "0.0014%",
        },
      ],
    },
    {
      level: "L12",
      details: [
        { description: "1 level lower level commission rebate", rate: "0.6%" },
        { description: "2 level lower level commission rebate", rate: "0.18%" },
        {
          description: "3 level lower level commission rebate",
          rate: "0.054%",
        },
        {
          description: "4 level lower level commission rebate",
          rate: "0.016%",
        },
        {
          description: "5 level lower level commission rebate",
          rate: "0.0048%",
        },
        {
          description: "6 level lower level commission rebate",
          rate: "0.0014%",
        },
      ],
    },
  ];

  return (
    <>
      <div className="relative flex items-center justify-center py-2 ">
        {/* Back arrow (absolutely positioned) */}
        <button
          onClick={() => window.history.back()}
          className="absolute left-3 text-black hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Centered title */}
        <h1 className="text-sm font-medium text-black text-center">
          Rebate ratio
        </h1>
      </div>
      <div className="  min-h-screen flex flex-col items-center">
        <div className="w-full ">
          {/* Rebate Levels */}
          <div className="p-4 space-y-4 ">
            {rebateData.map((rebate, index) => (
              <div key={index} className="bg-white  rounded-lg p-4">
                <h2 className="text-[15px] flex items-center gap-2 text-black mb-3">
                  Rebate level{" "}
                  <p className="font-bold text-xl text-red italic">
                    {rebate.level}
                  </p>
                </h2>
                <ul className="space-y-2">
                  {rebate.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between text-ssm"
                    >
                      <div className="flex items-center justify-between text-ssm gap-2">
                        {/* <div className="border-[1px] border-[#D9AC4F] rounded-full h-[14px] flex items-center justify-center w-[14px] bg-white">
                        <p className="w-[5px] h-[5px] p-1 bg-[#D9AC4F] rounded-full"></p>
                      </div> */}
                        <span className="text-black text-start">
                          {detail.description}
                        </span>
                      </div>
                      <span className="text-black">{detail.rate}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RebateRatio;

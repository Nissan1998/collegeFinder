import React from "react";
import Counter from "../../Components/Counter/Counter";

const OurRecord = () => {
  return (
    <div className=" container mx-auto">
      <h2 className="text-center text-3xl font-bold my-10 underline">
        Our Records
      </h2>
      <div className="grid gap-5  text-center grid-cols-1 md:grid-cols-3 shadow">
        <div className="stat rounded-xl bg-blue-700">
          <div className="stat-figure  text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-white">Total College</div>
          <div className="stat-value text-yellow-500 ">
            <Counter start={0} Children={"k"} end={25} duration={3}></Counter>
          </div>
          <div className="stat-desc text-white">10% More Added</div>
        </div>

        <div className="stat rounded-xl bg-sky-500">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-white">Total Admission</div>
          <div className="stat-value text-secondary">
            <Counter end={100} Children={"K+"} duration={4}></Counter>
          </div>
          <div className="stat-desc text-white">21% more than last month</div>
        </div>

        <div className="stat rounded-xl  bg-blue-700">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title text-white">Success Rate</div>
          <div className="stat-value text-yellow-500">
            <Counter start={0} Children={"%"} end={86} duration={5}></Counter>
          </div>
          <div className="stat-desc text-white ">31 tasks remaining</div>
          <div className="stat-figure  text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRecord;

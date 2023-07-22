import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchClg = () => {
  return (
    <div className="bg-sky-500  rounded-b-2xl py-10">
      <div className="bg-gray-700 mt-14 p-10 border-y-8 border-dashed border-white">
        <div className="text-center container mx-auto">
          <input
            className="max-w-96 md:text-lg md:w-96 text-center border-4 rounded-lg"
            type="text"
            placeholder="Find Your College"
          />
          <span className="inline-block md:-ml-10 -ml-6 ">
            <FaSearch />
          </span>
        </div>
        <div>
          <h1 className="md:text-2xl text-center mt-5  text-white font-bold">
            &quot;Discover Your Path: Find Your Perfect College with
            <span> CollegeFinder</span>&quot;
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SearchClg;

import React from "react";
import useAllColleges from "../../Hooks/useAllColleges";
import { Link } from "react-router-dom";

const CollegesList = () => {
  const allColleges = useAllColleges();

  return (
    <div>
      <div className="p-20 pb-10 rounded-3xl glass bg-sky-500">
        <div className="text-center text-4xl flex justify-center justify-items-center font-bold shadow-2xl rounded-2xl rounded-t-none -mt-5 bg-black bg-opacity-20 text    pt-2 ">
          <h1 className="mb-14 mt-10 text-white">
            Are You Ready To Get Admission?
          </h1>
        </div>
      </div>
      <div className="-mt-10 bg-cover bg-sky-200 bg-fixed">
        <div className="bg-blag-opacity">
          <h2 className="pt-24 text-center text-3xl font-bold underline">
            College List
          </h2>
          <div className="overflow-scroll overflow-x-hidden overflow-y-hidden scroll-smooth">
            <div className="p-10 pt-0">
              {allColleges.map((d) => (
                <div className="mb-5 " key={d.id}>
                  <div className="mt-10 text-white">
                    <div className="flex rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 glass md:w-[50%] p-5  mx-auto gap-10 justify-center items-center">
                      <img className="w-24 object-cover" src={d.image} alt="" />
                      <h1 className="font-bold">{d.name}</h1>
                      <Link to="/admission">
                        <span className="font-semibold text-lg bg-sky-500 glass text-white px-4 py-1 rounded-full">
                          Get Admission
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegesList;

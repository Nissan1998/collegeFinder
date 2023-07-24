import React from "react";
import useAllColleges from "../../Hooks/useAllColleges";
import { Link } from "react-router-dom";

const Colleges = () => {
  const allColleges = useAllColleges();

  return (
    <div>
      <div className="p-20 pb-10 rounded-3xl glass bg-sky-500">
        <div className="text-center text-4xl flex justify-center justify-items-center font-bold shadow-2xl rounded-2xl rounded-t-none -mt-5 bg-black bg-opacity-20 text pt-2 ">
          <h1 className="mb-14 mt-10 text-white">Find Your Best College</h1>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/1146367630/vector/abstract-navy-background.jpg?s=612x612&w=0&k=20&c=4odz8sgWFQHHwQ09ouonbKdvotg79421iCgJ8-99RyE=)",
        }}
        className="-mt-10 bg-cover bg-fixed"
      >
        <div>
          <h2 className="pt-14 text-center text-3xl font-bold text-white underline">
            Colleges List
          </h2>
          <div className="overflow-scroll overflow-x-hidden overflow-y-hidden scroll-smooth">
            <div className="md:p-10 px-2 pt-0">
              {allColleges.map((d) => (
                <div className="mb-5 " key={d.id}>
                  <div className=" text-white">
                    <div className="flex rounded-xl bg-gradient-to-r from-sky-900 to-sky-600 glass w-full md:w-[50%] p-5  mx-auto gap-10 justify-center items-center">
                      <img
                        className="md:w-24 w-14 object-cover"
                        src={d.image}
                        alt=""
                      />
                      <Link className="md:font-bold text-xl">{d.name}</Link>
                      <Link to={`/collegedetails/${d._id}`}>
                        <span className="font-semibold text-xs md:text-lg md:bg-sky-500 glass text-white px-4 py-1 rounded-full">
                          See Details
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

export default Colleges;

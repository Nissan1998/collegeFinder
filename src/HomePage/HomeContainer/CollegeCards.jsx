import React, { useState } from "react";
import SearchClg from "../../Components/SearchClg";
import useAllColleges from "../../Hooks/useAllColleges";
import { Link } from "react-router-dom";

const CollegeCards = () => {
  const allColleges = useAllColleges();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter colleges based on the search term
  const filteredColleges = allColleges.filter((college) =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>
        <SearchClg searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>
      {/* college card section */}
      <div
        style={{
          backgroundImage: `url(https://img.freepik.com/free-vector/elegant-white-wallpaper-with-golden-details_23-2149095007.jpg?w=2000)`,
        }}
        className="w-full bg-fixed  max-w-screen-2xl mx-auto  bg-cover "
      >
        <div className="collegeContainer ">
          <h1 className="text-center font-bold text-3xl border-b-4 w-96 mx-auto border-black  pt-5">
            Top Three Colleges
          </h1>
          <div>
            <div className="p-5 container mx-auto">
              {filteredColleges?.length > 0 ? (
                filteredColleges?.slice(0, 3).map((college, index) => (
                  <div key={index}>
                    <div className=" mb-5 card card-side  bg-base-200 shadow-xl md:flex justify-center md:items-center">
                      <div className="md:w-52  w-40 md:p-5">
                        <img src={college.image} alt="college image" />
                      </div>
                      <div className="card-body">
                        <h2 className="card-title uppercase">{college.name}</h2>
                        <div>
                          <p>
                            <span className="font-semibold">
                              Addmission Deadline:-
                            </span>
                            {college.admissionDates}
                          </p>
                          <div>
                            <span className="font-semibold">Events:-</span>
                            <p className="ml-14">
                              {college.events?.map((program, ind) => (
                                <li key={ind}>{program}</li>
                              ))}
                            </p>
                          </div>
                          <div>
                            <span className="font-semibold">Sports:-</span>
                            <p className="ml-14">
                              {college.sports?.map((sports, ind) => (
                                <li key={ind}>{sports}</li>
                              ))}
                            </p>
                          </div>
                          <p>
                            <span className="font-semibold">
                              Research History:-
                            </span>
                            {college.researchHistory}
                          </p>
                        </div>
                        <div className="card-actions justify-end">
                          <Link
                            to={`/collegedetails/${college._id}`}
                            className="bg-sky-500 hover:text-black glass text-white px-2 py-1 rounded-xl"
                          >
                            Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-2xl font-bold text-red-500">
                  Not Found 😥
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCards;

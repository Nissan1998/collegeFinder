import React from "react";
import SearchClg from "../../Components/SearchClg";
import useAllColleges from "../../Hooks/useAllColleges";

const CollegeCards = () => {
  const allColleges = useAllColleges();
  console.log(allColleges);
  return (
    <div>
      <div>
        <SearchClg />
      </div>
      {/* college card section */}
      <div className="collegeContainer ">
        <div>
          <div className="p-5 container mx-auto">
            {allColleges?.map((college, index) => (
              <div key={index}>
                <div className="p-5 mb-5 card card-side bg-base-300 shadow-xl md:flex justify-center md:items-center">
                  <div className="md:w-52  w-40 md:p-5">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Logo_of_Notre_Dame_College%2C_Dhaka.svg/640px-Logo_of_Notre_Dame_College%2C_Dhaka.svg.png"
                      alt="college image"
                    />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">{college.name}</h2>
                    <div>
                      <p>
                        <span className="font-semibold">
                          Addmission Deadline:-
                        </span>
                        {college.admissionDates}
                      </p>
                      <p>
                        <span className="font-semibold">Events:-</span>
                        <p className="ml-14">
                          {college.events?.map((program, ind) => (
                            <li key={ind}>{program}</li>
                          ))}
                        </p>
                      </p>
                      <p>
                        <span className="font-semibold">
                          Research History:-
                        </span>
                        {college.researchHistory}
                      </p>
                    </div>
                    <div className="card-actions justify-end">
                      <button className="bg-sky-500 text-white px-2 py-1 rounded-xl">
                        Watch
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCards;

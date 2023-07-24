import { Link, useParams } from "react-router-dom";
import useAllColleges from "../../Hooks/useAllColleges";

const CollegeDetails = () => {
  const { id } = useParams();
  const allColleges = useAllColleges();
  console.log(id);

  const college = allColleges?.find((c) => c._id === id);

  //    picture, toy name, seller name, seller email, price, rating, available quantity, and detail description
  return (
    <div>
      <div className="container mx-auto pt-20">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={college?.image} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{college?.name}</h2>
            <h2 className="card-title">
              {" "}
              Admission Date:- {college?.admissionDates}
            </h2>
            <h2 className="card-title">
              {" "}
              Events:-{" "}
              {college?.events.map((d) => (
                <li>{d}</li>
              ))}
            </h2>
            <h2 className="card-title">
              Research:- {college?.researchHistory}
            </h2>
            <h2 className="card-title">
              Sports:-{" "}
              {college?.sports.map((s) => (
                <li>{s}</li>
              ))}
            </h2>
            <p>Admission Process:- {college?.admission_process}</p>
            <p>Event Details:-{college?.events_details} </p>
            <p>Research Works:-{college?.research_works} </p>
            <p>Sports Categories:-{college?.sports_categories} </p>
            <div className="card-actions justify-end">
              <Link
                to="/"
                className="btn text-white bg-gradient-to-r from-gray-950 border-e-8 border-t-8 to-sky-400"
              >
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;

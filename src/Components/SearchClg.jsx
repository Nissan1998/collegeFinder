import { FaSearch } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const SearchClg = ({ searchTerm, handleSearch }) => {
  return (
    <div className="bg-sky-500 rounded-b-2xl py-10">
      <div className="bg-gray-700 bg-fixed rounded-b-3xl bg-opacity-20 container mx-auto mt-8  p-5 ">
        <div className="text-center container mx-auto">
          <input
            className="max-w-96 md:text-lg md:w-96 text-center border-4 rounded-lg"
            type="text"
            placeholder="Find Your College by Name"
            value={searchTerm}
            onChange={handleSearch}
          />
          <span className="inline-block md:-ml-10 -ml-6 ">
            <FaSearch />
          </span>
        </div>
        <div>
          <h1 className="md:text-2xl text-center mt-5  text-white font-bold">
            &quot;Discover Your Path: <br /> Find Your Perfect College with
            <span> CollegeFinder</span>&quot;
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SearchClg;

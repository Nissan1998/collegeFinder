import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const MyColleges = () => {
  const [myColleges, setCollege] = useState([]);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/myadmission/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCollege(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(user?.email);

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmitFeedback = () => {
    // Handle the submission of feedback (send to the server, etc.)
    // You can use the 'rating' and 'feedback' state values here
    console.log("Rating:", rating);
    console.log("Feedback:", feedback);

    // Close the modal after submitting feedback
    closeModal();
  };

  return (
    <div>
      <div className="pt-16">
        <h1>{myColleges.length}</h1>
        <div>
          <div className="container mx-auto px-4 py-8">
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4">Photo</th>
                    <th className="py-2 px-4">College Name</th>
                    <th className="py-2 px-4">College Details</th>
                    <th className="py-2 px-4">FeedBack</th>
                  </tr>
                </thead>
                <tbody>
                  {myColleges.map((college) => (
                    <tr className="text-center" key={college?._id}>
                      <td className="py-2 px-4">
                        <img
                          className="avatar w-24 h-auto"
                          src={college?.photo}
                          alt={college?.name}
                        />
                      </td>
                      <td className="py-2 px-4">{college?.admitted}</td>
                      <td className="py-2 px-4">
                        <Link
                          to={`/details/${college?._id}`}
                          className="text-lg px-3 py-1 rounded-full text-white hover:bg-sky-700 bg-sky-400"
                        >
                          Details
                        </Link>
                      </td>
                      <td className="py-2 px-4">
                        <button
                          onClick={openModal} // Call openModal function when button is clicked
                          className="bg-red-500 text-white px-2 rounded py-1"
                        >
                          Feedback
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                {isModalOpen && (
                  <div
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                  >
                    <div className="bg-white p-4">
                      {/* Modal content */}
                      <h2 className="text-center mb-3 font-bold">
                        Rating & Feedback
                      </h2>

                      <div className="font-bold space-x-5">
                        <label htmlFor="rating">Rating:</label>
                        <input
                          className="w-24"
                          type="number"
                          id="rating"
                          min={1}
                          max={5}
                          value={rating}
                          onChange={handleRatingChange}
                        />
                      </div>
                      {/* Feedback Textarea */}
                      <div className="font-bold mt-10 mb-10">
                        <label htmlFor="feedback">Feedback:</label>
                        <textarea
                          className="border-2 border-black"
                          id="feedback"
                          value={feedback}
                          onChange={handleFeedbackChange}
                          rows={4}
                        />
                      </div>
                      {/* Add your feedback form or content here */}

                      <div className="flex justify-between">
                        <button
                          className="bg-red-500 font-semibold text-white px-3 hover:bg-red-700"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                        <button
                          onClick={handleSubmitFeedback}
                          className="text-white font-semibold px-3 bg-red-500"
                          type="submit"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyColleges;

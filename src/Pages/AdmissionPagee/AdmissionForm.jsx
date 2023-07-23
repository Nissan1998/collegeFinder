import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const AddCoffee = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const subject = form.subject.value;
    const email = form.email.value;
    const pNumber = form.number.value;
    const address = form.address.value;
    const dBirth = form.birth.value;
    const photo = form.photo.value;
    const myAdmission = {
      name,
      subject,
      email,
      pNumber,
      address,
      dBirth,
      photo,
    };
    console.log(myAdmission);

    // send data to the server
    fetch("http://localhost:5000/admission", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myAdmission),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Success!",
          text: "The Coffee Added Successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
        console.log(data);
      });
  };
  return (
    <div className="bg-[#F4F3F0]   ">
      <div className=" rounded-xl p-6 md:p-24 lg:p-12 xl:pt-14 xl:pb-0">
        <div className="bg-sky-500 w-full bg-opacity-60  glass p-5">
          <h3 className="text-center text-2xl md:text-4xl font-extrabold mt-5">
            Admission Form
          </h3>
          <form
            onSubmit={handleSubmit}
            className="md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto"
          >
            <div className="md:flex gap-5  mt-2 p-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text ">Name</span>
                </label>
                <label className="input-group">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    value={user?.displayName}
                    readOnly
                    className="input input-bordered md:w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <label className="input-group">
                  <span>Subject</span>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="input input-bordered md:w-full"
                  />
                </label>
              </div>
            </div>
            <div className="md:flex gap-5  mt-2 p-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <label className="input-group">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="input input-bordered md:w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <label className="input-group">
                  <span> +88 </span>
                  <input
                    type="text"
                    name="number"
                    required
                    placeholder="Phone Number"
                    className="input input-bordered md:w-full"
                  />
                </label>
              </div>
            </div>

            <div className="md:flex gap-5  mt-2 p-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text ">Address</span>
                </label>
                <label className="input-group">
                  <span>Address</span>
                  <input
                    type="text"
                    name="address"
                    required
                    placeholder="Address"
                    className="input input-bordered md:w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Date of Birth</span>
                </label>
                <label className="input-group">
                  <span>Date</span>
                  <input
                    type="date"
                    name="birth"
                    required
                    placeholder="Details"
                    className="input input-bordered md:w-full"
                  />
                </label>
              </div>
            </div>
            <div className="mx-5 pb-5">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <label className="input-group ">
                <span>Photo</span>
                <input
                  type="text"
                  name="photo"
                  required
                  placeholder="Photo"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <input
              type="submit"
              value="Submit"
              className="btn bg-sky-500 glass hover:bg-sky-600 text-white btn-block"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;

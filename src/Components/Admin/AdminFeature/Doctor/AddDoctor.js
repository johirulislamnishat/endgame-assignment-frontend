import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../../../../App.css";
const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("http://localhost:8000/doctors/", data)
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          alert("Success");
          reset();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div>
        <div className="form-box w-72 md:w-96">
          <h1 className="table-name">Add A New Doctor</h1>

          <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            {/* name  */}
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Doctor Name</label>
              <input
                {...register("name")}
                type="text"
                className="form-control"
                placeholder="Enter Doctor Name"
                required={true}
              />

              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            {/* number  */}
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Phone Number</label>
              <input
                {...register("phone")}
                type="text"
                className="form-control"
                placeholder="Enter Doctor Number"
                required={true}
              />

              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            {/* email  */}
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Email</label>
              <input
                {...register("email")}
                type="email"
                className="form-control"
                placeholder="Enter Doctor Email"
                required={true}
              />

              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            {/* education */}
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Education</label>
              <input
                {...register("education")}
                type="text"
                className="form-control"
                placeholder="Enter Doctor Education"
                required={true}
              />

              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            {/* designation */}
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Designation</label>
              <input
                {...register("designation")}
                type="text"
                className="form-control"
                placeholder="Enter Doctor Designation"
                required={true}
              />

              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            {/* department */}
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Department</label>
              <input
                {...register("department")}
                type="text"
                className="form-control"
                placeholder="Enter Doctor Department"
                required={true}
              />

              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            {/* chamber */}
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Chamber Name</label>
              <input
                {...register("chamber")}
                type="text"
                className="form-control"
                placeholder="Enter Chamber Name"
                required={true}
              />

              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            {/* time */}
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Time</label>
              <input
                {...register("time")}
                type="text"
                className="form-control"
                placeholder="Enter Time"
                required={true}
              />

              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            {/* fees */}
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Doctor Fee</label>
              <input
                {...register("fees")}
                type="number"
                className="form-control"
                placeholder="Enter Doctor Fee"
                required={true}
              />

              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            {/* image */}
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                Upload a image in
                <a
                  href="https://imgur.com/"
                  rel="noopen noreferrer"
                  target="_blank"
                  className="text-black px-2"
                >
                  <strong>imgur</strong>
                </a>
                & Or Others Image Link Paste Here
              </label>
              <input
                {...register("img")}
                type="text"
                className="form-control"
                placeholder="Upload Picture in imgur and paste the img link here"
                required={true}
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            {/* Rating  */}
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Rating</label>
              <input
                {...register("rating")}
                type="number"
                className="form-control"
                placeholder="Enter Rating"
                required={false}
              />

              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            <input
              className="form-btn btn-secondary mt-3"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddDoctor;

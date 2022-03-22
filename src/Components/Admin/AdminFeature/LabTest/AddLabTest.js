import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddLabTest = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("https://rocky-mountain-61787.herokuapp.com/lab/", data)
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
    <div>
      <div className="form-box w-72 md:w-96">
        <h1 className="table-name">Add A New Lab Test</h1>

        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
          {/* name  */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Test Name</label>
            <input
              {...register("testName")}
              type="text"
              className="form-control"
              placeholder="Enter Test Name"
              required={true}
            />

            {errors.exampleRequired && <span>This field is required</span>}
          </div>

          {/* type  */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Test Type</label>
            <input
              {...register("testType")}
              type="text"
              className="form-control"
              placeholder="Enter Test Type"
              required={true}
            />

            {errors.exampleRequired && <span>This field is required</span>}
          </div>

          {/* price  */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Test Price</label>
            <input
              {...register("testPrice")}
              type="number"
              className="form-control"
              placeholder="Enter Test Price"
              required={true}
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
  );
};

export default AddLabTest;

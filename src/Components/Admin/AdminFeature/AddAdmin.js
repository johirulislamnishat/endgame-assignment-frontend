import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const AddAdmin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("https://rocky-mountain-61787.herokuapp.com/users/admin/", data)
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
        <h1 className="table-name">Add A New Admin</h1>

        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
          {/* name  */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Admin Email</label>
            <input
              {...register("email")}
              type="email"
              className="form-control"
              placeholder="Enter Admin Email"
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

export default AddAdmin;

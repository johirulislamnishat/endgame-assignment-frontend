import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddBlogs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("http://localhost:8000/blogs/", data)
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
        <h1 className="table-name">Add A New Blog</h1>

        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
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

          {/* title  */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Title</label>
            <input
              {...register("title")}
              type="text"
              className="form-control"
              placeholder="Enter Blog Title"
              required={true}
            />

            {errors.exampleRequired && <span>This field is required</span>}
          </div>

          {/* description  */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Description</label>
            <input
              {...register("description")}
              type="text"
              className="form-control"
              placeholder="Enter Description"
              required={true}
            />

            {errors.exampleRequired && <span>This field is required</span>}
          </div>

          {/* tag1  */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Blog Tag 01</label>
            <input
              {...register("tag1")}
              type="text"
              className="form-control"
              placeholder="Enter Tag One"
              required={true}
            />

            {errors.exampleRequired && <span>This field is required</span>}
          </div>

          {/* tag2 */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Enter Tag 2</label>
            <input
              {...register("tag2")}
              type="text"
              className="form-control"
              placeholder="Enter Tag 2"
              required={true}
            />

            {errors.exampleRequired && <span>This field is required</span>}
          </div>

          {/* tag3 */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Blog Tag 3</label>
            <input
              {...register("tag3")}
              type="text"
              className="form-control"
              placeholder="Enter Tag 3"
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

export default AddBlogs;

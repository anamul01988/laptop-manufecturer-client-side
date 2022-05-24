import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "5a6efbe5c9880d263715e7f75c26da6b";
  const onSubmit = async (data) => {
    console.log("data", data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())

      .then((result) => {
        if (result.success) {
          console.log("imgbb", result);
          const img = result.data.url;
          const review = {
            name: data.name,
            ratings: data.ratings,
            description: data.description,
            img: img,
          };
          // send to your database
          fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(review),
          })
            .then((res) => res.json())
            .then((inserted) => {
              console.log("review", inserted);
              if (inserted.insertedId) {
                toast.success("Review added successfully");
                reset();
              } else {
                toast.error("Failed to add Review");
              }
            });
        }
      });
  };

  return (
    <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
      <div className="card-body">
        <h2 className="text-2xl">Add Review</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full "
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Ratings</span>
            </label>
            <input
              type="text"
              placeholder="pls ratings 1 to 5"
              className="input input-bordered w-full"
              {...register("ratings", {
                required: {
                  value: true,
                  message: "Rating is Required",
                },
              })}
            />
            <label className="label">
              {errors.ratings?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              placeholder="Description"
              className="input input-bordered w-full"
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is Required",
                },
              })}
            />
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full "
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <input
            className="btn w-full text-white"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;

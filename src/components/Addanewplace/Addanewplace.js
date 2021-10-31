import React from "react";
import { Card, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Addanewplace.css";

const Addanewplace = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://shrieking-beast-89876.herokuapp.com/addnewpackage", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("New Package Added Successful");
          reset();
        }
      });
  };
  return (
    <Container className="d-flex justify-content-center my-5">
      <Card className="p-5 shadow rounded">
        <h1 className="mb-5 add-packages-title fw-bolder">
          Add a new <span>Tour Package</span>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>
            <input
              placeholder="Enter Place Name"
              className="w-100 p-2"
              {...register("placename", { required: true })}
            />
            {errors.placename && (
              <span className="text-danger fw-bolder">
                Place Name is required
              </span>
            )}
          </p>
          <p>
            <input
              type="number"
              placeholder="Enter Per Person Rate"
              className="w-100 p-2"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-danger fw-bolder">
                Per Person Rate is required
              </span>
            )}
          </p>
          <p>
            <input
              placeholder="How many days/nights package it is?"
              className="w-100 p-2"
              {...register("stay", { required: true })}
            />
            {errors.stay && (
              <span className="text-danger fw-bolder">
                Days/Night is required
              </span>
            )}
          </p>
          <p>
            <input
              placeholder="Enter Rating"
              className="w-100 p-2"
              {...register("rating", { required: true })}
            />
            {errors.rating && (
              <span className="text-danger fw-bolder">Rating is required</span>
            )}
          </p>
          <p>
            <input
              placeholder="Enter Place Img URL"
              className="w-100 p-2"
              {...register("img", { required: true })}
            />
            {errors.img && (
              <span className="text-danger fw-bolder">Img is required</span>
            )}
          </p>
          <p>
            <textarea
              rows="2"
              className="w-100 p-2"
              placeholder="Enter Place Description"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-danger fw-bolder">
                Description is required
              </span>
            )}
          </p>
          <input
            type="submit"
            value="Add"
            className="w-100 bg-danger text-white border-0 py-2 rounded-pill"
          />
        </form>
      </Card>
    </Container>
  );
};

export default Addanewplace;

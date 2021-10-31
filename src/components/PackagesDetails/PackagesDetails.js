import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faDollarSign,
  faHotel,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import "./PackagesDetails.css";
import useAuth from "../../hooks/useAuth";

const PackagesDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  const { user } = useAuth();
  const { displayName, email, uid } = user;
  const [packages, setPackages] = useState([]);
  const { placename, price, stay, rating, description, img } = packages;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.packages = packages;
    data.status = "Pending";
    data.uid = uid;
    fetch("https://shrieking-beast-89876.herokuapp.com/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Congratulations.\nYou Book this Tour Successfully");
          history.push("/packages");
        }
      });
  };
  useEffect(() => {
    fetch(`https://shrieking-beast-89876.herokuapp.com/package/${id}`)
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, [id]);
  return (
    <Container className="my-5">
      <Row className="g-3">
        <Col lg={1}></Col>
        <Col xs={12} md={4}>
          <img
            className="img-fluid mx-auto d-block"
            src={img}
            alt={placename}
          />
          <h3 className="mt-3 mb-2 text-center fw-bolder">{placename}</h3>
          <p>{description}</p>
          <h1 className="fw-bold text-center">
            <FontAwesomeIcon className="offer-icon" icon={faDollarSign} />
            {price}
          </h1>
          <div className="d-flex justify-content-evenly">
            <p className="offer-price fw-bolder">
              <FontAwesomeIcon className="offer-icon me-1" icon={faHotel} />
              {stay}
            </p>
            <p className="offer-rating fw-bolder">
              <FontAwesomeIcon className="offer-icon me-1" icon={faStar} />
              {rating} ratings
            </p>
          </div>
        </Col>
        <Col lg={1}></Col>
        <Col xs={12} lg={5}>
          <Card className="shadow p-5">
            <h1 className="mb-4">Fill Up the Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p>
                <input
                  className="w-100 p-2"
                  defaultValue={displayName}
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-danger fw-bolder">
                    Name is required
                  </span>
                )}
              </p>
              <p>
                <input
                  className="w-100 p-2"
                  defaultValue={email}
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-danger fw-bolder">
                    Email is required
                  </span>
                )}
              </p>
              <p>
                <textarea
                  rows="2"
                  className="w-100 p-2"
                  placeholder="Enter Your Address"
                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <span className="text-danger fw-bolder">
                    Address is required
                  </span>
                )}
              </p>
              <p>
                <input
                  type="tel"
                  className="w-100 p-2"
                  placeholder="Enter Your Phone Number"
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <span className="text-danger fw-bolder">
                    Phone Number is required
                  </span>
                )}
              </p>
              <p>
                <input
                  type="number"
                  className="w-100 p-2"
                  placeholder="Number of Person"
                  {...register("person", { required: true })}
                />
                {errors.person && (
                  <span className="text-danger fw-bolder">
                    Number of person is required
                  </span>
                )}
              </p>
              <p>
                <input
                  type="date"
                  className="w-100 p-2"
                  {...register("date", { required: true })}
                />
                {errors.date && (
                  <span className="text-danger fw-bolder">
                    Journey Date is required
                  </span>
                )}
              </p>

              <input
                className="booknowBtn border-0 rounded-pill px-3 py-1"
                type="submit"
                value="Book Now"
              />
            </form>
          </Card>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Container>
  );
};

export default PackagesDetails;

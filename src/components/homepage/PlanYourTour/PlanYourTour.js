import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./PlanYourTour.css";

import plan1 from "../../../images/tourplans/adventure_icon_1.svg";
import plan2 from "../../../images/tourplans/adventure_icon_2.svg";
import plan3 from "../../../images/tourplans/adventure_icon_3.svg";

const PlanYourTour = () => {
  return (
    <Container className="mt-3 mb-5">
      <h1 className="text-center tour-plan-title fw-bolder">
        Plan <span>Your Tour</span> Easily
      </h1>
      <Row xs={1} md={3} className="my-5 gy-3">
        <Col className="text-center">
          <img className="d-block mx-auto" src={plan1} alt="" />
          <h3 className="mt-5">Itineraries studied in detail</h3>
          <p className="fw-light">
            We studies deeply about the places. Got the every single Details
            about the place.
          </p>
        </Col>
        <Col className="text-center">
          <img className="d-block mx-auto" src={plan2} alt="" />
          <h3 className="mt-5">Room and food included</h3>
          <p className="fw-light">
            We studies deeply about the places. Got the every single Details
            about the place.
          </p>
        </Col>
        <Col className="text-center">
          <img className="d-block mx-auto" src={plan3} alt="" />
          <h3 className="mt-5">Everything organized</h3>
          <p className="fw-light">
            We studies deeply about the places. Got the every single Details
            about the place.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PlanYourTour;

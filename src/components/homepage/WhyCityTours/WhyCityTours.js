import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./WhyCityTours.css";

import tourguide from "../../../images/whytourx/tour-guide.png";
import experience from "../../../images/whytourx/experience.png";
import travler from "../../../images/whytourx/traveller.png";
import trust from "../../../images/whytourx/trust.png";

const WhyCityTours = () => {
  return (
    <Container className="my-5">
      <h1 className="my-5 text-center whytourx fw-bolder">
        Why You Are <span>Travel</span> With <span>City Tours</span>?
      </h1>
      <Row xs={1} md={4} className="g-3">
        <Col>
          <Card className="p-4 shadow text-center">
            <img className="w-50 mx-auto" src={tourguide} alt="" />
            <h2 className="fw-bold mt-3 whytourx-title">10000+</h2>
            <p className="fw-bold">Our worldwide guide</p>
          </Card>
        </Col>
        <Col>
          <Card className="p-4 shadow text-center">
            <img className="w-50 mx-auto" src={trust} alt="" />
            <h2 className="fw-bold mt-3 whytourx-title">100%</h2>
            <p className="fw-bold">Trusted travel agency</p>
          </Card>
        </Col>
        <Col>
          <Card className="p-4 shadow text-center">
            <img className="w-50 mx-auto" src={experience} alt="" />
            <h2 className="fw-bold mt-3 whytourx-title">15+</h2>
            <p className="fw-bold">Year of travel experience</p>
          </Card>
        </Col>
        <Col>
          <Card className="p-4 shadow text-center">
            <img className="w-50 mx-auto" src={travler} alt="" />
            <h2 className="fw-bold mt-3 whytourx-title">90%</h2>
            <p className="fw-bold">of our traveller happy</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyCityTours;

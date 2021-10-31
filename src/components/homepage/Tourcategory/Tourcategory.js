import React from "react";
import "./Tourcategory.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import hiking from "../../../images/adventure/hiking.png";
import mountain from "../../../images/adventure/mountain.png";
import sunsine from "../../../images/adventure/sunrise.png";
import bagpack from "../../../images/adventure/bagpack.png";
import fire from "../../../images/adventure/bonfire.png";

const Tourcategory = () => {
  return (
    <Container className="my-5">
      <Row xs={1} md={5} className="g-3">
        <Col>
          <Card className="p-4 shadow hiking">
            <img className="w-50 mx-auto" src={hiking} alt="" />
            <h3 className="text-center fw-bold mt-3">Adventure</h3>
          </Card>
        </Col>
        <Col>
          <Card className="p-4 shadow sea-beach">
            <img className="w-50 mx-auto" src={sunsine} alt="" />
            <h3 className="text-center fw-bold mt-3">Sea Beach</h3>
          </Card>
        </Col>
        <Col>
          <Card className="p-4 shadow mountain">
            <img className="w-50 mx-auto" src={mountain} alt="" />
            <h3 className="text-center fw-bold mt-3">Mountain</h3>
          </Card>
        </Col>
        <Col>
          <Card className="p-4 shadow couple-tour">
            <img className="w-50 mx-auto" src={bagpack} alt="" />
            <h3 className="text-center fw-bold mt-3">Couple Tour</h3>
          </Card>
        </Col>
        <Col>
          <Card className="p-4 shadow night">
            <img className="w-50 mx-auto" src={fire} alt="" />
            <h3 className="text-center fw-bold mt-3">Night Fall</h3>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Tourcategory;

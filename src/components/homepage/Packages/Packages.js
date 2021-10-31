import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SingleOffer from "../SingleOffer/SingleOffer";
import "./Packages.css";

const Packages = () => {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://shrieking-beast-89876.herokuapp.com/packagesList")
      .then((res) => res.json())
      .then((data) => setOffers(data), setIsLoading(false));
  }, []);
  return (
    <Container className="my-5">
      <h1 className="text-center mb-3 ourservice-color fw-bolder">
        Our <span>Special</span> Packages
      </h1>
      {isLoading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="danger" />
        </div>
      ) : (
        <Row className="g-4 mt-4" xs={1} md={3} lg={4}>
          {offers.map((offer) => (
            <SingleOffer key={offer._id} offer={offer}></SingleOffer>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Packages;

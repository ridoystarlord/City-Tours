import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Banner from "../Banner/Banner";
import Ourpartners from "../Ourpartners/Ourpartners";
import PlanYourTour from "../PlanYourTour/PlanYourTour";
import SingleOffer from "../SingleOffer/SingleOffer";
import Tourcategory from "../Tourcategory/Tourcategory";
import WhyCityTours from "../WhyCityTours/WhyCityTours";

import "./Home.css";

const Home = () => {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://shrieking-beast-89876.herokuapp.com/packagesList")
      .then((res) => res.json())
      .then((data) => setOffers(data.slice(0, 8), setIsLoading(false)));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <Tourcategory></Tourcategory>
      <Container>
        <h1 className="packages-title fw-bolder text-center">
          Our <span>Popular</span> Package
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
      <Ourpartners></Ourpartners>
      <PlanYourTour></PlanYourTour>
      <WhyCityTours></WhyCityTours>
    </div>
  );
};

export default Home;

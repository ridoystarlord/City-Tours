import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bg-banner text-white ">
      <div className="bg-banner-opacity">
        <Container className="d-flex justify-content-center align-items-center flex-column bg-banner-container">
          <h1 className="banner-title text-center mb-3">
            Plan Your Best Holiday
            <br />
            With Us & Enjoy
          </h1>
          <p className="fs-4 text-center fw-light banner-tagline">
            Discover hidden wonders on trips curated by Citytours Tours Experts
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Banner;

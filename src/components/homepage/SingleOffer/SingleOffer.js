import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./SingleOffer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleOffer = (props) => {
  const { placename, description, price, rating, img, _id } = props.offer;
  return (
    <div>
      <Col className="h-100">
        <Card className="shadow-sm h-100">
          <Card.Img variant="top" height="250" src={img} />
          <Card.Body>
            <Card.Title className="text-center">{placename}</Card.Title>
            <Card.Text>{description.slice(0, 100)}</Card.Text>
            <div className="d-flex justify-content-around">
              <p className="offer-price fw-bolder">
                <FontAwesomeIcon
                  className="offer-icon me-1"
                  icon={faDollarSign}
                />
                {price}/Per Person
              </p>
              <p className="offer-rating fw-bolder">
                <FontAwesomeIcon className="offer-icon me-1" icon={faStar} />
                {rating} ratings
              </p>
            </div>
          </Card.Body>
          <Card.Footer className="bg-white text-center border-0">
            <Link to={`/packages-details/${_id}`}>
              <Button
                className="offer-btn border-0 px-lg-5 px-md-3 px-3 mb-3"
                variant="primary"
              >
                More Details
              </Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default SingleOffer;

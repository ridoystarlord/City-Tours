import React from "react";
import "./Notfound.css";
import notfound from "../../../images/notfound.jpg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Notfound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <img src={notfound} alt="" />
      <Link to="/">
        <Button className="mb-5" variant="danger">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default Notfound;

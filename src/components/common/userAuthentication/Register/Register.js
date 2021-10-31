import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./Register.css";
import logo from "../../../../images/logo.png";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Register = () => {
  const { googleSignIn, setUser } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || "/";
  const handleSignBtnClick = () => {
    googleSignIn()
      .then((result) => {
        const userinfo = result.user;
        setUser(userinfo);
        history.push(url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <Container className="d-flex justify-content-center my-5">
      <Card className="p-5 shadow rounded">
        <Card.Img className="" variant="top" src={logo} />
        <Card.Body>
          <Button
            onClick={() => {
              handleSignBtnClick();
            }}
            className="d-block w-100  my-3 rounded-pill registerBtn text-black fw-bolder"
            variant="outline-secondary"
          >
            <FontAwesomeIcon className="google-icon me-3" icon={faGoogle} />
            Continue with Google
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;

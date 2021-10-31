import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import "./Ourservices.css";

const Ourservices = () => {
  const [ourServices, setOurServices] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [travelGuider, setTravelGuider] = useState([]);
  const [isServiceLoading, setServiceLoading] = useState(true);
  const [isTeamLoading, setTeamLoading] = useState(true);
  const [isGuideLoading, setGuideLoading] = useState(true);
  useEffect(() => {
    fetch("https://shrieking-beast-89876.herokuapp.com/serviceslist")
      .then((res) => res.json())
      .then((data) => setOurServices(data), setServiceLoading(false));
  }, []);
  useEffect(() => {
    fetch("https://shrieking-beast-89876.herokuapp.com/team-memberlist")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data), setTeamLoading(false));
  }, []);
  useEffect(() => {
    fetch("https://shrieking-beast-89876.herokuapp.com/guiderlist")
      .then((res) => res.json())
      .then((data) => setTravelGuider(data), setGuideLoading(false));
  }, []);

  return (
    <Container className="mb-5 mt-3">
      <h1 className="text-center mb-5 ourservice-color fw-bolder">
        Our <span>Services</span>
      </h1>
      {isServiceLoading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="danger" />
        </div>
      ) : (
        <Row xs={1} md={2} className="g-3">
          {ourServices.map((service) => (
            <Col key={service._id}>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Row>
                    <Col xs={4}>
                      <img className="img-fluid" src={service.img} alt="" />
                    </Col>
                    <Col xs={8}>
                      <Card.Text className="fw-bolder fs-2">
                        {service.name}
                      </Card.Text>
                      <p>{service.description}</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      <h1 className="text-center my-5 ourservice-color fw-bolder">
        Our <span>Team</span>
      </h1>
      {isTeamLoading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="danger" />
        </div>
      ) : (
        <Row xs={1} md={3} lg={4} className="g-3">
          {teamMembers.map((member) => (
            <Col key={member._id} className="h-100">
              <Card className="shadow-sm h-100">
                <Card.Img variant="top" height="250" src={member.img} />
                <Card.Body className="text-center">
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text>{member.position}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      <h1 className="text-center my-5 ourservice-color fw-bolder">
        Our <span>Travel</span> Guider
      </h1>
      {isGuideLoading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="danger" />
        </div>
      ) : (
        <Row xs={1} md={3} lg={4} className="g-3">
          {travelGuider.map((guider) => (
            <Col key={guider._id} className="h-100">
              <Card className="shadow-sm h-100">
                <Card.Img variant="top" height="250" src={guider.img} />
                <Card.Body className="text-center">
                  <Card.Title>{guider.name}</Card.Title>
                  <Card.Text>{guider.specialist}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Ourservices;

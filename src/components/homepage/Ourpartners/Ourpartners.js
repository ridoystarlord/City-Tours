import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Ourpartners.css";
import partner1 from "../../../images/partners/partner-1.png";
import partner_hover_1 from "../../../images/hover-partners/partner-hover-1.png";
import partner2 from "../../../images/partners/partner-2.png";
import partner_hover_2 from "../../../images/hover-partners/partner-hover-2.png";
import partner3 from "../../../images/partners/partner-3.png";
import partner_hover_3 from "../../../images/hover-partners/partner-hover-3.png";
import partner4 from "../../../images/partners/partner-4.png";
import partner_hover_4 from "../../../images/hover-partners/partner-hover-4.png";
import partner5 from "../../../images/partners/partner-5.png";
import partner_hover_5 from "../../../images/hover-partners/partner-hover-5.png";
import partner6 from "../../../images/partners/partner-6.png";
import partner_hover_6 from "../../../images/hover-partners/partner-hover-6.png";

const Ourpartners = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center partners-title fw-bolder">
        Our <span>Royal</span> Partners
      </h1>
      <Row xs={1} md={3} lg={6} className="mt-5 gy-3">
        <Col>
          <Card className="shadow partners">
            <img src={partner1} alt="" />
            <img className="img-top" src={partner_hover_1} alt="" />
          </Card>
        </Col>
        <Col>
          <Card className="shadow partners">
            <img src={partner2} alt="" />
            <img className="img-top" src={partner_hover_2} alt="" />
          </Card>
        </Col>
        <Col>
          <Card className="shadow partners">
            <img src={partner3} alt="" />
            <img className="img-top" src={partner_hover_3} alt="" />
          </Card>
        </Col>
        <Col>
          <Card className="shadow partners">
            <img src={partner4} alt="" />
            <img className="img-top" src={partner_hover_4} alt="" />
          </Card>
        </Col>
        <Col>
          <Card className="shadow partners">
            <img src={partner5} alt="" />
            <img className="img-top" src={partner_hover_5} alt="" />
          </Card>
        </Col>
        <Col>
          <Card className="shadow partners">
            <img src={partner6} alt="" />
            <img className="img-top" src={partner_hover_6} alt="" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Ourpartners;

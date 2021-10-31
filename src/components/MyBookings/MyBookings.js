import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import "./MyBookings.css";

const MyBookings = () => {
  const { user } = useAuth();
  const [myBookingList, setMyBookingList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://shrieking-beast-89876.herokuapp.com/my-bookings/${user.uid}`)
      .then((res) => res.json())
      .then((data) => setMyBookingList(data), setIsLoading(false));
  }, [user.uid]);
  const handleDelete = (id) => {
    const procced = window.confirm("Are You Want to Delete this Booking?");
    if (procced) {
      fetch(`https://shrieking-beast-89876.herokuapp.com/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Order Cancel Successful");
            setMyBookingList(myBookingList.filter((book) => book._id !== id));
          }
        });
    }
  };
  return (
    <Container className="mb-5">
      <h1 className="text-center mt-3 mb-5 ourservice-color fw-bolder">
        Your <span>Booking</span> List
      </h1>
      {isLoading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="danger" />
        </div>
      ) : (
        <Row xs={1} md={3} lg={4} className="g-3">
          {myBookingList.map((order) => (
            <Col key={order._id} className="h-100">
              <Card className="shadow-sm h-100">
                <Card.Img variant="top" height="250" src={order.packages.img} />
                <Card.Body className="text-center">
                  <Card.Title className="fw-bolder">
                    {order.packages.placename}
                  </Card.Title>
                  <Card.Text>
                    {order.packages.description.slice(0, 200)}
                  </Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="fw-bold">
                      Total Cost:{" "}
                      {parseInt(order.person) * order.packages.price}
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-bold">
                      Journey Date: {order.date}
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-bold">
                      Stay: {order.packages.stay}
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-bold">
                      Status:{" "}
                      <span
                        className={
                          order.status === "Approved"
                            ? "fw-bold text-success"
                            : "fw-bold text-danger"
                        }
                      >
                        {order.status}
                      </span>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer className="bg-white text-center border-0">
                  <Button
                    onClick={() => handleDelete(order._id)}
                    className="read-more border-0 px-lg-5 px-md-3 px-3 mb-3"
                    variant="danger"
                  >
                    Cancel Booking
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default MyBookings;

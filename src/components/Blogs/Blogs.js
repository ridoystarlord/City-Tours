import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://shrieking-beast-89876.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data), setIsLoading(false));
  }, []);
  return (
    <Container className="my-5">
      <h1 className="text-center my-5 ourservice-color fw-bolder">
        Top <span>Travel</span> Post
      </h1>
      {isLoading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="danger" />
        </div>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-3">
          {blogs.map((blog) => (
            <Col key={blog._id} className="h-100">
              <Card className="shadow-sm h-100">
                <Card.Img variant="top" height="250" src={blog.img} />
                <Card.Body className="text-center">
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.description.slice(0, 200)}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white text-center border-0">
                  <Button
                    className="read-more border-0 px-lg-5 px-md-3 px-3 mb-3"
                    variant="primary"
                  >
                    Read More
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

export default Blogs;

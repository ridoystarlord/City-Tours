import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Table } from "react-bootstrap";
import ManageBooking from "../ManageBooking/ManageBooking";
import "./ManageAllBookings.css";

const ManageAllBookings = () => {
  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    fetch("https://shrieking-beast-89876.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, []);
  return (
    <Container className="my-5">
      <h1 className="text-center all-booking-title mb-5 fw-bolder">
        All <span>Booking</span> List
      </h1>
      <Table responsive striped bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Place Name</th>
            <th>Journey Date</th>
            <th>Status</th>
            <th>Approve</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allBookings.map((booking, index) => (
            <ManageBooking
              key={booking._id}
              index={index + 1}
              items={booking}
            ></ManageBooking>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageAllBookings;

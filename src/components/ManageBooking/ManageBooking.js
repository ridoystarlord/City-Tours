import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const ManageBooking = (props) => {
  const { packages, _id } = props.items;
  const { placename } = packages;
  const index = props.index;
  const [singleBook, setSingleBook] = useState({});

  useEffect(() => {
    fetch(`https://shrieking-beast-89876.herokuapp.com/bookinglist/${_id}`)
      .then((res) => res.json())
      .then((data) => setSingleBook(data));
  }, [_id]);

  const handleApproved = (id) => {
    const newStatus = "Approved";
    const newBook = { ...singleBook };
    newBook.status = newStatus;
    setSingleBook(newBook);
    console.log("test", id, newBook);

    fetch(
      `https://shrieking-beast-89876.herokuapp.com/update-booking-status/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newBook),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Booking Status Updated");
        }
      });
  };

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
            window.location.reload();
          }
        });
    }
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{singleBook.name}</td>
      <td>{singleBook.email}</td>
      <td>{placename}</td>
      <td>{singleBook.date}</td>
      <td>{singleBook.status}</td>
      <td>
        <Button onClick={() => handleApproved(_id)} variant="success">
          Approved
        </Button>
      </td>
      <td>
        <Button onClick={() => handleDelete(_id)} variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ManageBooking;

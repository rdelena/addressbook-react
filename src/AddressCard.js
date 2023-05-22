import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function AddressCard(props) {
  const [showMoreInfo, setInfo] = useState(false);

  const showInfo = () => {
    setInfo(!showMoreInfo);
  };

  const {
    img,
    email,
    firstName,
    lastName,
    addressNumber,
    street,
    city,
    state,
    zip,
    age,
    phone,
  } = props;

  return (
    <Card
      bg="dark"
      border="light"
      text="white"
      style={{ width: "16rem", textAlign: "center", margin: "15px" }}
    >
      <Card.Img src={img} alt="user-image" />
      <Card.Body>
        <Card.Title>
          {firstName} {lastName}
        </Card.Title>
        <Button variant="info" onClick={showInfo}>
          {showMoreInfo ? "Hide Details" : "More Information"}
        </Button>
        {showMoreInfo && (
          <Card.Text>
            Age: {age}
            <br />
            Phone: {phone}
            <br />
            Email: {email}
            <br />
            Address: {addressNumber} {street}
            <br />
            {city}, {state}, {zip}
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}

export default AddressCard;

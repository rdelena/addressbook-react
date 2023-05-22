import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import AddressCard from "./AddressCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      usersArray: [],
    };
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api?results=15").then((res) => {
      const { data } = res;
      this.setState({ usersArray: data.results });
    });
  }
  render() {
    return (
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            fontFamily: "Brush Script MT, Brush Script Std, cursive",
            backgroundColor: "#CAFFE8",
          }}
        >
          Address Book
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          {this.state.usersArray.map((user, index) => (
            <AddressCard
              key={index}
              img={user.picture.large}
              firstName={user.name.first}
              lastName={user.name.last}
              email={user.email}
              addressNumber={user.location.street.number}
              street={user.location.street.name}
              city={user.location.city}
              state={user.location.state}
              zip={user.location.postcode}
              age={user.dob.age}
              phone={user.phone}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

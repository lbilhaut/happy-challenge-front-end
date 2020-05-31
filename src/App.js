import React from "react";
import "./App.css";
import PhoneNumber from "./PhoneNumber";
import Challenge from "./Challenge";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const challengeTypes = {
  types: [
    {
      id: "1",
      type: "Healthy",
      image: "healthy-challenges.jpg",
    },
    {
      id: "2",
      type: "Declutter",
      image: "declutter-challenges.jpg",
    },
    {
      id: "3",
      type: "Kindness",
      image: "kindness-challenges.jpg",
    },
  ],
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          ~ <strong>HAPPY</strong> CHALLENGE is still in development ~
        </p>
        <img src="images/Logo-whiteBG-small.png" alt="logo" />
        <h1>Connect with your friends & make your life better!</h1>
        <Container>
          <Row>
            <Col
              xs={12}
              md={6}
              className="justify-content-center d-flex pb-3 pb-sm-3"
            >
              <PhoneNumber user={"challenger"}></PhoneNumber>
            </Col>
            <Col
              xs={12}
              md={6}
              className="justify-content-center d-flex pb-3 pb-sm-3"
            >
              <PhoneNumber user={"defender"}></PhoneNumber>
            </Col>
          </Row>
        </Container>
        <h2>Pick a challenge type</h2>
        <Container>
          <Row>
            {challengeTypes.types.map((challengeType) => {
              return (
                <Col
                  xs={12}
                  md={4}
                  className="justify-content-center d-flex pb-3 pb-sm-3"
                >
                  <Challenge challenge={challengeType} />
                </Col>
              );
            })}
          </Row>
        </Container>
        <a
          className="App-link"
          href="https://happychallenge.fun/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about the Happy Challenge Project
        </a>
      </header>
    </div>
  );
}

export default App;

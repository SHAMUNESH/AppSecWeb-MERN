import React, { useEffect } from "react";
import { Alert, Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";
const LandingPage = () => {
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");

  //   if (userInfo) {
  //     history.push("/mynotes");
  //   }
  // }, [history]);
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <Alert variant="success">
              <Alert.Heading className="title">
                Welcome to Application Security!
              </Alert.Heading>
              <p className="subtitle">
                Lock your data and authentication with our "AppSec Key"
              </p>
              <hr />
              <p className="subtitle">
                Create an Account, Configure your customizable Sequence-based
                Multi-factor Authentication to login!
              </p>
              <div className="buttonContainer">
                <a href="/login">
                  <Button className="landingbutton" size="lg">
                    Login
                  </Button>
                </a>
                <a href="/register">
                  <Button
                    className="landingbutton"
                    size="lg"
                    variant="outline-primary"
                  >
                    Signup
                  </Button>
                </a>
              </div>
            </Alert>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;

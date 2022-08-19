import React from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import "../styles/LoginStyle.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container fluid className="main-wrapper">
      <div className="container m-0 p-0 d-flex justify-content-center align-items-center m-auto con-signs">
        <Card className="sm-w-100 d-flex card-signs">
          <Card.Body>
            <span className="sm-display-6 text-success md-display-4 lg-display-1 sm-pt-5 d-block s-txt-t">
              Sign In
            </span>
            <span className="sm-display-6 sm-fs-6 text-secondary d-block d-signs">
              please enter your login credentials to get started.
            </span>
            <Container className="c-wrapper p-0">
              <Form className="m-0 p-0">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="sm-hidden">Email address</Form.Label>
                  <div className="input-wrapper">
                    <i className="bi bi-envelope-fill"></i>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      className="inputs"
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="sm-hidden">Password</Form.Label>
                  <div className="input-wrapper">
                    <i className="bi bi-lock-fill"></i>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="inputs"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember my logins?" />
                </Form.Group>

                <Link to="/home">
                  <Button variant="success" type="submit" className="s-btn">
                    Submit
                  </Button>
                </Link>
                
              </Form>
            </Container>
            <span className="sm-display-6 sm-fs-5 s-txt-bl">
              Don't have an account?{" "}
              <Link to="/signUp" className="link">
                <span className="text-primary ps-2">Sign Up</span>
              </Link>
            </span>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Login;

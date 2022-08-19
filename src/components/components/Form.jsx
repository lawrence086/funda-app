import React from "react";
import { Button, Form } from "react-bootstrap";

const Forms = () => {
  return (
    <div className="mt-2">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicFullnames">
          {/* <Form.Label>Full Names</Form.Label> */}
          <Form.Control type="text" placeholder="Lawrence Sekgoka" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control
            type="email"
            placeholder="lawrencesekgoka086@gmail.com"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhonenumber">
          {/* <Form.Label>Phone number</Form.Label> */}
          <Form.Control type="text" placeholder="0609245249" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLocation">
          {/* <Form.Label>Location</Form.Label> */}
          <Form.Control type="text" placeholder="Polokwane" />
        </Form.Group>

        <Button variant="primary" type="submit" className="s-btn">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Forms;

import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class PhoneNumber extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{this.props.user}'s phone number</Form.Label>
          <Form.Control type="email" placeholder="Enter number" />
        </Form.Group>
      </Form>
    );
  }
}

export default PhoneNumber;

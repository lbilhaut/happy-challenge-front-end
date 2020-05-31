import React, { Component } from "react";
import Card from "react-bootstrap/Card"

class Challenge extends Component {
    render(){
        const {type, image } = this.props.challenge

    return (<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={"images/challengeTypes/" + image} />
    <Card.Body>
      <Card.Title>{type} Challenge</Card.Title>
    </Card.Body>
  </Card>)
    }
}

export default Challenge
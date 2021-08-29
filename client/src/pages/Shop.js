import React from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {TypeBar} from "../components/TypeBar";

export const Shop = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}></Col>
      </Row>
    </Container>
  );
};

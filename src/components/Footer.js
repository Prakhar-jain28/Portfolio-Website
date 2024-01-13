import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <center>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year}</h3>
          </Col>
        </center>
      </Row>
    </Container>
  );
}

export default Footer;

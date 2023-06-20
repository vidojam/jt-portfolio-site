import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Layout from "../layout/AppLayout.jsx";
import ResumeImage from "./Jose_Torres_Resume.pdf";

const handleButtonClick = () => {
  window.open(ResumeImage, "_blank");
};

export default function Resume() {
  return (
    <Layout>
      <Container id="resume">
        <Row>
          <Col className="resumeCol-img">
            <Image className="img-res" href={ResumeImage} fluid />
            <Button onClick={handleButtonClick}>Resumé</Button>
          </Col>
        </Row>
        <Row
          className="d-flex justify-content-center"
          style={{ fontSize: "200px" }}
        >
          <Col md={10}></Col>
        </Row>
      </Container>
    </Layout>
  );
}

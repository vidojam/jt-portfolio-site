import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../layout/AppLayout.jsx";
import Gallery from "../components/Gallery/index.jsx";

export default function Projects() {

  return(
    <Layout>
      <Container id="project">
        <Row>
          <Col className="text-center">
            <h1 className="projTitle">Projects</h1>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col md={9}>
          <p className="projText">My software program projects demonstrate my practical experience in applying programming concepts and techniques. They show that I have hands-on experience with coding, debugging, testing, and project management.</p>
          </Col>
        </Row>
      </Container>

      <Gallery />
    </Layout>
  )
}
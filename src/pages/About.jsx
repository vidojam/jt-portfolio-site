import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Layout from "../layout/AppLayout.jsx";

export default function About() {
  const imagePath = process.env.PUBLIC_URL + '/images/jose.webp';
 
  return (
    <Layout>
      <Container id="about">
        <Row>
          <Col className="text-center">
            <h1 className="soft-title">Software Engineer</h1>
          </Col>
          <Col className="about-img" >
            <Image className="jtImg" src={imagePath} fluid alt="Jose" />
            
          </Col>
        </Row>

        <Row className="d-flex justify-content-center" font-size="150">
          <Col md={10}>
            <h2 className="about-text">
              With a passion for software engineering, I embarked on a journey to retrain and reintegrate myself into the tech industry. Armed with five years of previous IT experience and fresh off graduating from the esteemed Boca Code bootcamp, I have specialized in JavaScript, React, Node.js, MongoDB, and various other programming languages. 
            </h2>
          </Col>
          <Col className="text-center">
            <h1 className="name-title">Jose Torres</h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  )  
}
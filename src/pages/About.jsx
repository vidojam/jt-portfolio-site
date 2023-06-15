import { Container, Row, Col, Image } from "react-bootstrap";
import Layout from "../layout/AppLayout.jsx";
import joseImage from "/Users/josetorres/code/ux-ui-intern-projects/jt-portfolio-site/src/image/jose.webp";

export default function About() {
  return (
    <Layout>
      <Container id="about">
        <Row>
          <Col className="text-center">
            <h1 className="soft-title">Software Engineer</h1>
          </Col>
          <Col className="about-img">
            <Image className="jtImg" src={joseImage} fluid />  
          </Col>
        </Row>

        <Row className="d-flex justify-content-center" font-size="150">
          <Col md={10}>
            <h2 className="about-text">
              Motivated by my unyielding passion for software engineering, I embarked on a journey to retrain and reintegrate myself into the tech industry. Armed with five years of previous IT experience and fresh off graduating from the esteemed Boca Code bootcamp, I have specialized in JavaScript, React, Node.js, MongoDB, and various other programming languages. 
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
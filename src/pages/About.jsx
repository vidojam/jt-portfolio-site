import { Container, Row, Col } from "react-bootstrap";

import Layout from "../layout/AppLayout.jsx";

export default function About() {
  return (
    <Layout>
      <Container id="about">
        <Row>
          <Col className="text-center">
            <h2>About</h2>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center" font-size="200">
          <Col md={7}>
          <p>
          Motivated by my unyielding passion for software engineering, I embarked on a journey to retrain and reintegrate myself into the tech industry. Armed with five years of previous IT experience and fresh off graduating from the esteemed Boca Code bootcamp, I have specialized in JavaScript, React, Node.js, MongoDB, and various other programming languages. This career transition follows a fruitful decade as a State of Florida Business Specialist and Recruitment Specialist, during which I adeptly orchestrated recruitment events for more than 150 employers each year, effectively planning, coordinating, and executing successful live events.
          </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )  
}
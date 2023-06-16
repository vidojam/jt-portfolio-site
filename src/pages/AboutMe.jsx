import { Container, Row, Col } from "react-bootstrap";
import Layout from "../layout/AppLayout.jsx";
import Gallery from "../components/Gallery2/index.jsx";

export default function Projects() {

  return(
    <Layout>
      <Container id="project">
        <Row>
          <Col className="text-center">
            <h1 className="aboutMeTitle">About Me</h1>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col md={9}>
          <p className="aboutme-text">My current hobbies include participating in Toastmaster speech and leadership events, bowling with a goal of achieving the perfect 300 game (highest so far is 289), and maintaining a regular exercise routine which includes bicyling and completing a minimum of 100 pushups per day.</p>
          </Col>
        </Row>
      </Container>
      <Gallery />
    </Layout>
  )
}
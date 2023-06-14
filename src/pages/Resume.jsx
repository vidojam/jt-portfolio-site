import { Container, Row, Col, Image } from "react-bootstrap";
import Layout from "../layout/AppLayout.jsx";
import ResumeImage from "/Users/josetorres/code/ux-ui-intern-projects/jt-portfolio-site/src/image/Jt-Resume.webp";

export default function Resume() {
  return (
    <Layout>
      <Container id="resume">
        <Row>
          <Col className="resumeCol-img">
            <Image className= "img-res" src={ResumeImage} fluid />  
          </Col>
        </Row>
        <Row className="d-flex justify-content-center" font-size="200">
          <Col md={10}>
          </Col>
        </Row>
      </Container>
    </Layout>
  )  
}
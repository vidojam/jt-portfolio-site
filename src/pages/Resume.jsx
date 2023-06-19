import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import Layout from "../layout/AppLayout.jsx";
import ResumeImage from "../layout/Jose_Torres_Resume.pdf"

export default function Resume() {
  return (

    <Layout>
      <Container id="resume">
        <Row> add 
          <Col className="resumeCol-img">
            {/* <Image className= "img-res" src={ResumeImage} fluid />   */}
            <button className="btn-footer"><Nav.Link href="/images/Jose_Torres_Resume.pdf" rel="noreferrer" target="_blank">Resume</Nav.Link></button> 
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
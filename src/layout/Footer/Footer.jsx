import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const gitHubUrl = ""
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
          <p>&copy; {currentYear} Jose Torres
          <br/>
          <a href={gitHubUrl}
          target="_blank"
          rel="noreferrer">Code in Github:https://github.com/vidojam/</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
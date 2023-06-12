import { Container, Row, Col } from "react-bootstrap";
import AppLayout from "../layout/AppLayout"

export default function Error404() {
return (
  <AppLayout>
    <Container>
      <Row>
        <Col>
        <h1>Error 404</h1>
        </Col>
      </Row>
    </Container>
  </AppLayout>
 )
}
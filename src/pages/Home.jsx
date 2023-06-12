import { Container, Row, Col } from "react-bootstrap";
import Layout from "../layout/AppLayout.jsx";
import Gallery from "../components/Gallery/index.jsx";

export default function Home() {

  return(
    <Layout>
      <Container id="home">
        <Row>
          <Col className="text-center">
            <h2>Home</h2>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col md={7}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero nostrum fuga veniam est ad magni, incidunt accusamus veritatis, corporis, dolorem perferendis minima beatae aut ea culpa totam autem eligendi a. A, aperiam alias. Consequatur, voluptatum iste, quasi cum atque, facilis sequi minima doloribus asperiores aliquam nisi eveniet perferendis. Doloribus, quo.</p>
          </Col>
        </Row>
      </Container>

      <Gallery />
    </Layout>
  )
}
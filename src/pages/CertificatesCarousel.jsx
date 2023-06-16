import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import Layout from "../layout/AppLayout.jsx";
import { Carousel } from 'react-bootstrap';


const CertificatesCarousel = () => {
  return (
    <Layout>
      <Container id="certificates">
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <Image fluid
                  className="d-block w-100"
                  src="/images/CertImage1.jpg"
                  alt="Certificate 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image fluid
                  className="d-block w-100"
                  src="/images/CertImage2.jpg"
                  alt="Certificate 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image fluid
                  className="d-block w-100"
                  src="/images/CertImage3.jpg"
                  alt="Certificate 3"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image fluid
                  className="d-block w-100"
                  src="/images/CertImage4.jpg"
                  alt="Certificate 4"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image fluid
                  className="d-block w-100"
                  src="/images/CertImage5.jpg"
                  alt="Certificate 5"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image fluid
                  className="d-block w-100"
                  src="/images/CertImage6.jpg"
                  alt="Certificate 6"
                />
              </Carousel.Item>
            </Carousel>
        </Col>
      </Row>
      </Container>
    </Layout>
  );
};

export default CertificatesCarousel;

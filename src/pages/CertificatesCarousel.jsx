import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../layout/AppLayout.jsx";
import { Carousel } from 'react-bootstrap';
import CertImage1 from "/Users/josetorres/code/ux-ui-intern-projects/jt-portfolio-site/src/image/CertImage1.jpg";
import CertImage2 from "/Users/josetorres/code/ux-ui-intern-projects/jt-portfolio-site/src/image/CertImage2.jpg";
import CertImage3 from "/Users/josetorres/code/ux-ui-intern-projects/jt-portfolio-site/src/image/CertImage3.jpg";
import CertImage4 from "/Users/josetorres/code/ux-ui-intern-projects/jt-portfolio-site/src/image/CertImage4.jpg";
import CertImage5 from "/Users/josetorres/code/ux-ui-intern-projects/jt-portfolio-site/src/image/CertImage5.jpg";
import CertImage6 from "/Users/josetorres/code/ux-ui-intern-projects/jt-portfolio-site/src/image/CertImage6.jpg";



const CertificatesCarousel = () => {
  return (
    <Layout>
      <Container id="certificates">
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={CertImage1.jpg}
                  alt="Certificate 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={CertImage2.jpg}
                  alt="Certificate 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={CertImage3.jpg}
                  alt="Certificate 3"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={CertImage4.jpg}
                  alt="Certificate 4"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={CertImage5.jpg}
                  alt="Certificate 5"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={CertImage6.jpg}
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

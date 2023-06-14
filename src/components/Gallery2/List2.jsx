import { Container, Row } from "react-bootstrap";
import Panel2 from "./Panel2.jsx";
import data from "../../data/gallery2.json";

export default function List2() {

  return (    
    <Container id="gallery2">
      <Row className="d-flex justify-content-center g-4">
      {
        data.map( (element, index) => {
          return (
            <Panel2 
              key={index}
              element={element} />
            );          
        }).reverse()
      }
      </Row>
    </Container>
  )
}
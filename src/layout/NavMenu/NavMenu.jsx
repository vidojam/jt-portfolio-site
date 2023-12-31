import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// const handleButtonClick = () => {
//   window.open(ResumeImage, "_blank");
// };

export default function NavMenu() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container id="navmenu">
        <Navbar.Brand as={Link} to="/about">
          <h2 className="navtitle">Portfolio</h2>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="nav-navmenu" />


        <Navbar.Collapse id="nav-navmenu">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutme">
              AboutMe
            </Nav.Link>
            <Nav.Link as={Link} to="/project">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/certificates">
              Certificates
            </Nav.Link>
            <Nav.Link as={Link} to="/skills">
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Button><Nav.Link href="/images/resume.pdf" rel="noreferrer" target="_blank">Resumé</Nav.Link></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import resume from "../../layout/Jose_Torres_Resume.pdf"

export default function NavMenu () {
  
  const handleButtonClick = () => {
    // Perform the desired action here
    // For example, open the resume in a new tab
    window.open(resume, "_blank");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">  
      <Container id="navmenu">  
        <Navbar.Brand as={Link} to="/about"><h2>Portfolio</h2></Navbar.Brand>  

        <Navbar.Toggle aria-controls="nav-navmenu" /> 
        
        <Navbar.Collapse id="nav-navmenu">  
          <Nav className="ms-auto">  
            <Nav.Link as={Link} to="/about">About</Nav.Link>          
            <Nav.Link as={Link} to="/aboutme">AboutMe</Nav.Link>          
            <Nav.Link as={Link} to="/project">Projects</Nav.Link>                          
            <Nav.Link as={Link} to="/certificates">Certificates</Nav.Link>    
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>    
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link> 
            <Button class="cti" onClick={handleButtonClick} > <div class="CTI">Resumé</div> </Button>           
          </Nav>  
        </Navbar.Collapse>  
      </Container>  
  </Navbar>  
  )
}

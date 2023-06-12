import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function NavMenu () {
  
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">  
      <Container id="navmenu">  
        <Navbar.Brand as={Link} to="/"><h1>Jose Torres - Portfolio Site</h1></Navbar.Brand>  

        <Navbar.Toggle aria-controls="nav-navmenu" /> 
        
        <Navbar.Collapse id="nav-navmenu">  
          <Nav className="ms-auto">  
          <Nav.Link as={Link} to="/">Home</Nav.Link>  
            <Nav.Link as={Link} to="/about">About</Nav.Link>          
            <Nav.Link as={Link} to="/project">Projects</Nav.Link>                         
            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>    
            <Nav.Link as={Link} to="/resume">Certificates</Nav.Link>    
            <Nav.Link as={Link} to="/resume">Skills</Nav.Link>    
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>            
          </Nav>  
        </Navbar.Collapse>  
      </Container>  
  </Navbar>  
  )
}

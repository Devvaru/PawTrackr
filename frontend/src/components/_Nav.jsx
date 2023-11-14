import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">PawTrackr</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Pets</Nav.Link>
            <Nav.Link href="#features">Reminders</Nav.Link>
            <Nav.Link href="#pricing">Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>      
    </>
  );
}

export default ColorSchemesExample;
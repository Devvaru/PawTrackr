import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample(props) {
  const { showPets, setShowPets, showReminders, setShowReminders } = props;

  useEffect(() => {
    if (showPets) {
      setShowReminders(false);
    } 

    if (showReminders) {
      setShowPets(false);
    }
  }, [showPets, showReminders]);

  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand onClick={() => setShowPets(true)}>PawTrackr</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link onClick={() => setShowPets(true)}>Pets</Nav.Link>
            <Nav.Link onClick={() => setShowReminders(true)}>Reminders</Nav.Link>
            {/* <Nav.Link href='#contacts'>Contacts</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
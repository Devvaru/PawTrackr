import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigationbar(props) {
  const { showPets, setShowPets, showReminders, setShowReminders, showContacts, setShowContacts } = props;

  useEffect(() => {
    if (showPets) {
      setShowReminders(false);
      setShowContacts(false);
    } 

    if (showReminders) {
      setShowPets(false);
      setShowContacts(false);
    }

    if (showContacts) {
      setShowPets(false);
      setShowReminders(false);
    } 

  }, [showPets, showReminders, showContacts]);

  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand onClick={() => setShowPets(true)}>PawTrackr</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link onClick={() => setShowPets(true)}>Pets</Nav.Link>
            <Nav.Link onClick={() => setShowReminders(true)}>Reminders</Nav.Link>
            <Nav.Link onClick={() => setShowContacts(true)}>Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;
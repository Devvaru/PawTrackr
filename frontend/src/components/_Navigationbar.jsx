import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigationbar(props) {
  const { setShowPets, setShowReminders, setShowContacts } = props;

  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand onClick={() => setShowPets()}>PawTrackr</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link onClick={() => setShowPets()}>Pets</Nav.Link>
            <Nav.Link onClick={() => setShowReminders()}>Reminders</Nav.Link>
            <Nav.Link onClick={() => setShowContacts()}>Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;
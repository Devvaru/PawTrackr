import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import logo from '../logo/logo.png';

function Navigationbar(props) {
  const { setShowPets, setShowReminders, setShowContacts } = props;

  const togglemodes = () => {
    const element = document.body;
    element.dataset.bsTheme =
      element.dataset.bsTheme === 'light' ? 'dark' : 'light';
  };

  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark' fixed='top' className='nav-bar'>
        <Navbar.Brand
          className='logo'
          onClick={() => setShowPets()}
          aria-label='PawTrackr - Home'
        >
          <img
            src={logo}
            alt='pawtrackr logo with pawprint'
            className='main-logo'
          ></img>
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link onClick={() => setShowPets()} aria-label='Go to Pets'>
            Pets
          </Nav.Link>
          <Nav.Link
            onClick={() => setShowReminders()}
            aria-label='Go to Reminders'
          >
            Reminders
          </Nav.Link>
          <Nav.Link
            onClick={() => setShowContacts()}
            aria-label='Go to Contacts'
          >
            Contacts
          </Nav.Link>
          <Nav.Link href="https://github.com/Devvaru/PawTrackr/" target='_blank' className='nav-link'>About</Nav.Link>
        </Nav>

        <Form>
          <Form.Check
            type='switch'
            id='custom-switch'
            label='Toggle Light/Dark Mode'
            onClick={togglemodes}
            style={{ color: 'rgba(255, 255, 255, 0.55)' }}
            aria-label='Toggle Light/Dark Mode'
          />
        </Form>
      </Navbar>
    </>
  );
}

export default Navigationbar;
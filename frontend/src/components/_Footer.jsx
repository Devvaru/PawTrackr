import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer(props) {
  const { setShowTeam } = props;

  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark' fixed='bottom'>
        <Container className='justify-content-center'>
          <Nav>
            <Nav.Link onClick={() => setShowTeam()}>Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
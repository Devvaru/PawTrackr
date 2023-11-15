import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/_Nav';
import PetsGrid from './components/PetsGrid';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PetModal from './components/PetModal';


function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className='App'>
      <Nav />
      <PetsGrid />
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      {modalShow && <PetModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />}
    </div>
  );
}

export default App;
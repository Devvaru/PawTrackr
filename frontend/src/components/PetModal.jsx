import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PetModal(props) {
  console.log(props)
  const { pet } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {pet.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        modal
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={(e) => {
          props.onHide();
          e.stopPropagation();
        }}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PetModal;
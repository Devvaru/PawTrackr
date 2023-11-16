import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
      <Modal.Header closeButton onClick={(e) => {
          props.onHide();
          e.stopPropagation();
        }}>
        <Modal.Title id="contained-modal-title-vcenter">
          <p>{pet.name}'s Details</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Col xs={10} md={10}>
          <Image src={pet.pet_img_url} rounded />
          <p><strong>Date of Birth:</strong> {pet.date_of_birth}</p>
          <p><strong>Species:</strong> {pet.variant}</p>
          <p><strong>Weight:</strong> {pet.weight} grams</p>
          <p><strong>Food:</strong> {pet.food}</p>
          <p><strong>Comments:</strong> {pet.comment}</p>
        </Col>
      </Modal.Body>
      <Modal.Footer>
        <p>Upcoming Reminders</p>
      </Modal.Footer>
    </Modal>
  );
}

export default PetModal;
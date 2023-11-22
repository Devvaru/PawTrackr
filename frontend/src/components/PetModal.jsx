import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import PetReminders from './PetReminders';

function PetModal(props) {
  console.log(props);
  const { pet } = props;

  // Display Pet Date of Birth in YYYY/MM/DD format
  const dateOfBirth = new Date(pet.date_of_birth);
  const formattedDateOfBirth = `${dateOfBirth.getFullYear()}/${(
    dateOfBirth.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}/${dateOfBirth.getDate().toString().padStart(2, '0')}`;

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
          <div className='modalImageContainer'>
            <Image src={pet.pet_img_url} rounded />
          </div>
          <div class='modalTextContainer'>
            <p><strong>Date of Birth:</strong> {formattedDateOfBirth}</p>
            <p><strong>Species:</strong> {pet.variant}</p>
            <p><strong>Weight:</strong> {pet.weight} kg</p>
            <p><strong>Food:</strong> {pet.food}</p>
            <p><strong>Comments:</strong> {pet.comment}</p>
          </div>
        </Col>
      </Modal.Body>
      <Modal.Body>
        <PetReminders pet={pet} />
      </Modal.Body>
    </Modal>
  );
}

export default PetModal;
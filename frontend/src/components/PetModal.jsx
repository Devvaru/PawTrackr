import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import PetReminders from './PetReminders';
import Table from 'react-bootstrap/Table';
import CloseButton from 'react-bootstrap/CloseButton';

function PetModal(props) {
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
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>
          <p>{pet.name}'s Details</p>
        </Modal.Title>
        <CloseButton
          onClick={(e) => {
            props.onHide();
            e.stopPropagation();
          }}
        ></CloseButton>
      </Modal.Header>
      <Modal.Body>
        <Col xs={10} md={10} className='modalColumn'>
          <div className='modalImageContainer'>
            <Image src={pet.pet_img_url} alt={`${pet.name} the ${pet.variant}`} className='modalImage' rounded />
          </div>
          <div class='modalTextContainer'>
            <Table bordered>
              <thead>
                <tr>
                  <th><strong>Date of Birth</strong></th>
                  <th><strong>Species</strong></th>
                  <th><strong>Weight</strong></th>
                  <th><strong>Food</strong></th>
                  <th><strong>Comments</strong></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> {formattedDateOfBirth}</td>
                  <td> {pet.variant}</td>
                  <td> {pet.weight} kg</td>
                  <td> {pet.food}</td>
                  <td> {pet.comment}</td>
                </tr>
              </tbody>
            </Table>
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
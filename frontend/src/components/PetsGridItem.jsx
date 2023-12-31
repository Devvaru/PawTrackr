import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import PetModal from './PetModal';
import { useState } from 'react';

function PetsGridItem(props) {
  const { pet } = props;
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Col>
        <Card className='pet-card' onClick={() => setModalShow(true)}>
          <Card.Img
            variant='top'
            src={pet.pet_img_url}
            alt={`${pet.name} the ${pet.variant}`}
          />
          {modalShow && <PetModal
            key={pet.id}
            id={pet.id}
            show={modalShow}
            onHide={() => setModalShow(false)}
            pet={pet}
          />}
          {/* <Image src={pet.pet_img_url} roundedCircle /> */}
          <Card.Body>
            <Card.Title>{pet.name}</Card.Title>
            <Card.Text>{pet.comment}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default PetsGridItem;

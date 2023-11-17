import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import PetModal from './PetModal';
import { useState } from 'react';

// TODO: Remove commented code
// https://react-bootstrap.netlify.app/docs/components/cards#grid-cards

function PetsGridItem(props) {
  const { pet } = props;
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Col>
        <Card onClick={() => setModalShow(true)}>
          <Card.Img
            variant='top'
            src={pet.pet_img_url}
            alt={`Photo of ${pet.name}`}
          />
          {modalShow && <PetModal
            key={pet.id}
            id={pet.id}
            show={modalShow}
            setModalShow={setModalShow}
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

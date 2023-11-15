import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';

// TODO: Remove commented code
// https://react-bootstrap.netlify.app/docs/components/cards#grid-cards

function PetsGridItem(props) {
  const { pet } = props;

  const displayModal = () => {
    
  };

  return (
    <div>
      <Col>
        <Card>
          <Card.Img onClick={displayModal}
            variant='top'
            src={pet.pet_img_url}
            alt={`Photo of ${pet.name}`}
          />
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

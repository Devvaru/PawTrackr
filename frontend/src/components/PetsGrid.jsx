import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';

// TODO: Remove commented code
// https://react-bootstrap.netlify.app/docs/components/cards#grid-cards

function PetsGrid() {
  const [pets, setPets] = useState([]);
  console.log(pets);

  useEffect(() => {
    fetch('http://localhost:8080/api/pets')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        console.log('Hello');
        return res.json();
      })
      .then((data) => {
        setPets(data);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []);

  return (
    <div>
      {pets.length !== 0 && (
        <Row xs={1} md={4} className='g-4'>
          {pets.map((pet) => (
            <Col key={pet.id}>
              <Card>
                <Card.Img
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
          ))}
        </Row>
      )}
      {pets.length === 0 && <div>Loading</div>}
    </div>
  );
}

export default PetsGrid;

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';

// TODO: Remove commented code
// https://react-bootstrap.netlify.app/docs/components/cards#grid-cards

function PetsGrid() {
  const [pets, setPets] = useState([]);
  console.log(pets);

  useEffect(() => {
    fetch('http://localhost:8080/api/pets')
      .then((res) => {
        // if (!res.ok) {
        //   throw new Error(`HTTP error! status: ${res.status}`);
        // }
        console.log("Hello");
        return res.json();
      })
      .then((data) => {
        setPets(data);
      })
      // .catch((error) => {
      //   console.error('Fetch error:', error);
      // });
  }, []);

  return (
    <div>
    {
      pets.length !== 0 && <Row xs={1} md={4} className='g-4'>
      {pets.map((pet, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant='top' src='holder.js/100px160' />
            <Card.Body>
              <Card.Title>{ pet.name }</Card.Title>
              <Card.Text>{ pet.comment }</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    }
    {
      pets.length === 0 && <div>Loading</div>
    }
    </div>
  );
}

export default PetsGrid;

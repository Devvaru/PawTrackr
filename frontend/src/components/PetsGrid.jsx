import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import PetsGridItem from './PetsGridItem';

// TODO: Remove commented code
// https://react-bootstrap.netlify.app/docs/components/cards#grid-cards

function PetsGrid(props) {

  const [pets, setPets] = useState([]);

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
            <PetsGridItem
              key={pet.id}
              pet={pet}
            />
          ))}
        </Row>
      )}
      {pets.length === 0 && <div>Loading</div>}
    </div>
  );
}

export default PetsGrid;

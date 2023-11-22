import Row from 'react-bootstrap/Row';
import PetsGridItem from './PetsGridItem';
import PetAccordion from './PetAccordion';
import { useState, useEffect } from 'react';

// TODO: Remove commented code
// https://react-bootstrap.netlify.app/docs/components/cards#grid-cards

function PetsGrid() {
  const [pets, setPets] = useState([]);

  const loadPets = () => {
    fetch('http://localhost:8080/api/pets')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setPets(data);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  };

  useEffect(() => {
    loadPets();
  }, []);

  return (
    <div>
      <PetAccordion
        onPetAdded={() => {
          loadPets();
        }}
      />
      <div className='petsGrid'>
        {pets.length !== 0 && (
          <Row xs={1} md={4} className='g-4' style={{ margin: '0px' }}>
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
    </div>
  );
}

export default PetsGrid;

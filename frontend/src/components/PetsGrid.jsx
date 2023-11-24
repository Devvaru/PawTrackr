import Row from 'react-bootstrap/Row';
import PetsGridItem from './PetsGridItem';
import PetAccordion from './PetAccordion';
import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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

  const onDragEnd = (result) => {
    // Check if the drop was successful
    if (!result.destination) {
      return;
    }

    // Reorder the pets in the state based on the drag result
    const updatedPets = Array.from(pets);
    const [reorderedPet] = updatedPets.splice(result.source.index, 1);
    updatedPets.splice(result.destination.index, 0, reorderedPet);

    // Update the state with the new order of pets
    setPets(updatedPets);
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
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="pets">
          {(provided) => (
            <div className='petsGrid pets' {...provided.droppableProps} ref={provided.innerRef}>
              {pets.length !== 0 && (
                <Row xs={1} md={4} className='g-4' style={{ margin: '0px' }}>
                  {pets.map((pet, index) => {
                    return (
                      <Draggable key={pet.id} draggableId={pet.id.toString()} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <PetsGridItem key={pet.id} pet={pet} />
                          </div>
                        )}
                      </Draggable>
                    )}
                  )}
                  {provided.placeholder}
                </Row>
              )}
              {pets.length === 0 && <div>Loading</div>}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default PetsGrid;

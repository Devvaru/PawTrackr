import Row from 'react-bootstrap/Row';
import PetsGridItem from './PetsGridItem';
import PetAccordion from './PetAccordion';
import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import PetsTableItem from './PetTableItem';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

function PetsGrid() {
  const [pets, setPets] = useState([]);
  const [activeView, setActiveView] = useState('grid');

  const loadPets = () => {
    axios
      .get('/api/pets')
      .then((res) => {
        setPets(res.data);
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

      {/* Grid Table Toggle  */}
      <ButtonGroup>
        <ToggleButton
          type='button'
          value='Switch to Grid View'
          variant={activeView === 'grid' ? 'info' : 'outline-info'}
          onClick={() => {
            setActiveView('grid');
          }}
          aria-label='Switch to Grid View'
        >
          <strong>GRID</strong>
        </ToggleButton>

        <ToggleButton
          type='button'
          value='Switch to Table View'
          variant={activeView === 'table' ? 'info' : 'outline-info'}
          onClick={() => {
            setActiveView('table');
          }}
          aria-label='Switch to Table View'
        >
          <strong>TABLE</strong>
        </ToggleButton>
      </ButtonGroup>

      {/* Grid view */}
      {activeView === 'grid' && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='pets'>
            {(provided) => (
              <div
                className='petsGrid pets'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {pets.length !== 0 && (
                  <Row xs={1} md={4} className='g-4' style={{ margin: '0px' }}>
                    {pets.map((pet, index) => {
                      return (
                        <Draggable
                          key={pet.id}
                          draggableId={pet.id.toString()}
                          index={index}
                        >
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
                      );
                    })}
                    {provided.placeholder}
                  </Row>
                )}
                {pets.length === 0 && (
                  <div>
                    <Spinner animation='border' role='status' variant='info'>
                      <span className='visually-hidden'>Loading...</span>
                    </Spinner>
                  </div>
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}

      {/* Table view */}
      {activeView === 'table' && (
        <Table responsive='sm' striped bordered className='petsTable'>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Pet Name</th>
              <th>Date of Birth</th>
              <th>Species</th>
              <th>Food</th>
              <th>Weight</th>
              <th>Comment</th>
            </tr>
          </thead>
          {pets.length !== 0 && (
            <tbody>
              {pets.map((pet) => (
                <tr key={pet.id} className='petsTableRow'>
                  <PetsTableItem pet={pet} />
                </tr>
              ))}
            </tbody>
          )}
          {pets.length === 0 && (
            <tbody>
              <tr>
                <td colSpan={7}><FontAwesomeIcon icon={faPaw} bounce style={{color: "#0dcaf0",}} /> No Pets </td>
              </tr>
            </tbody>
          )}
        </Table>
      )}
    </div>
  );
}

export default PetsGrid;

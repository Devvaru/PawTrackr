import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AddPetForm from './AddPetForm';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
  );

  return (
    <Button
      type="button"
      variant="info"
      style={{ color: 'white', fontWeight: '600' }}
      onClick={decoratedOnClick}
    >
      {children}
    </Button>
  );
}

function PetAccordion(props) {
  return (
    <Accordion defaultActiveKey="null">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">ADD PET</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <AddPetForm onPetAdded={props.onPetAdded} />
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default PetAccordion;
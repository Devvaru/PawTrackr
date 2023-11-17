import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AddContactForm from './AddContactForm';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
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

function ContactAccordion(props) {
  return (
    <Accordion defaultActiveKey='null'>
      <Card>
        <Card.Header>
          <CustomToggle eventKey='0'>ADD CONTACT</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey='0'>
          <AddContactForm onContactAdded={props.onContactAdded} />
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default ContactAccordion;

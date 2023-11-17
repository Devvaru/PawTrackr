import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function AddContactForm(props) {
  const newContact = {};

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    newContact.user_id = formData.get('user_id');
    newContact.name = formData.get('name');
    newContact.phone_number = formData.get('phone_number');
    newContact.email = formData.get('email');
    newContact.website = formData.get('website');

    axios
      .post('http://localhost:8080/api/contacts', newContact)
      .then((res) => {
        console.log({ res });
        props.onContactAdded();
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row className='mb-3'>
          <Form.Group as={Col} md='6' controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='Name' name='name' />
          </Form.Group>
        </Row>
        <Row className='mb-3'>
          <Form.Group as={Col} md='6' controlId='phone_number'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type='number' placeholder='Phone Number' name='phone_number' />
          </Form.Group>
        </Row>
        <Row className='mb-3'>
          <Form.Group as={Col} md='6' controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Email' name='email' />
          </Form.Group>
        </Row>
        <Row className='mb-3'>
          <Form.Group as={Col} md='6' controlId='website'>
            <Form.Label>Website</Form.Label>
            <Form.Control type='text' placeholder='Website' name='website' />
          </Form.Group>
        </Row>
        <Button type='submit'>Submit form</Button>
      </Form>
    </>
  );
}

export default AddContactForm;

import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function AddContactForm(props) {
  const formRef = useRef();
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
      .post('/api/contacts', newContact)
      .then(() => {
        props.onContactAdded();
        formRef.current.reset();
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <>
      <Row className='justify-content-md-center' style={{ marginTop: '30px' }}>
        <Col md={6}>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Row className='mb-3'>
              <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='Name' name='name' />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group controlId='phone_number'>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type='text' placeholder='Phone Number' name='phone_number' />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Email' name='email' />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group controlId='website'>
                <Form.Label>Website</Form.Label>
                <Form.Control type='text' placeholder='Website' name='website' />
              </Form.Group>
            </Row>
            <Button type='submit' variant="info" style={{ color: "#212529", fontWeight: '600', marginBottom: '50px' }}>SUBMIT</Button>
          </Form>
        </Col>
      </Row >
    </>
  );
}

export default AddContactForm;

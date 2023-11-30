import { useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function AddReminderForm(props) {
  const [pets, setPets] = useState([]);

  const formRef = useRef();
  const newReminder = {};

  useEffect(() => {
    axios
      .get(`/api/pets`)
      .then((res) => {
        setPets(res.data);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    newReminder.pet_id = formData.get('name');
    newReminder.title = formData.get('title');
    newReminder.date = formData.get('date');
    newReminder.comment = formData.get('comment');

    axios
      .post('/api/reminders', newReminder)
      .then(() => {
        props.onReminderAdded();
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
                <Form.Select aria-label='select pet name' name='name' defaultValue='0'>
                  <option value='0' disabled>
                    Choose Pet Name
                  </option>
                  {pets.map((pet) => (
                    <option key={pet.id} value={pet.id}>
                      {pet.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group controlId='title'>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' placeholder='Title' name='title' />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group controlId='date'>
                <Form.Label>Date</Form.Label>
                <Form.Control type='date' placeholder='Date' name='date' />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group controlId='comment'>
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Comment'
                  name='comment'
                />
              </Form.Group>
            </Row>
            <Button
              type='submit'
              variant='info'
              style={{
                color: '#212529',
                fontWeight: '600',
                marginBottom: '50px',
              }}
            >
              SUBMIT
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default AddReminderForm;

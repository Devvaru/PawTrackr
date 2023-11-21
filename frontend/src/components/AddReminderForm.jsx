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
      .get(`http://localhost:8080/api/pets`)
      .then((res) => {
        console.log('Response', res);
        setPets(res.data);
        console.log('Res.data', res.data);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    newReminder.petname = formData.get('name');
    newReminder.title = formData.get('title');
    newReminder.date = formData.get('date');
    newReminder.comment = formData.get('comment');

    axios
      .post('http://localhost:8080/api/reminders', newReminder)
      .then((res) => {
        console.log({ res });
        props.onReminderAdded();
        formRef.current.reset();
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  console.log('Line 47 Pet names:', pets);

  return (
    <>
      <Row className='justify-content-md-center' style={{ marginTop: '30px' }}>
        <Col md={6}>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Row className='mb-3'>
              <Form.Select aria-label='Default select example' name='name'>
                {pets.map((pet) => (
                  <option key={pet.id} value={pet.id}>
                    {pet.name}
                  </option>
                ))}
              </Form.Select>
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
                color: 'white',
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

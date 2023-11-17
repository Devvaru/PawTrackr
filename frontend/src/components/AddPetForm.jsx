import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function AddPetForm(props) {
  const formRef = useRef();
  const newPet = {};

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    newPet.name = formData.get('name');
    newPet.pet_img_url = formData.get('pet_img_url');
    newPet.date_of_birth = formData.get('date_of_birth');
    newPet.variant = formData.get('variant');
    newPet.weight = formData.get('weight');
    newPet.food = formData.get('food');
    newPet.comment = formData.get('comment');

    axios
      .post('http://localhost:8080/api/pets', newPet)
      .then((res) => {
        console.log({ res });
        props.onPetAdded();
        formRef.current.reset();
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <>
      <Row className='justify-content-md-center'>
        <Col md={6}>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Row className='mb-3'>
              <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='Name' name='name' />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group controlId='pet_img_url'>
                <Form.Label>Image</Form.Label>
                <Form.Control type='text' placeholder='Image' name='pet_img_url' />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group controlId='date_of_birth'>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type='date'
                  placeholder='Date of Birth'
                  name='date_of_birth'
                />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group controlId='variant'>
                <Form.Label>Species</Form.Label>
                <Form.Control type='text' placeholder='Species' name='variant' />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group controlId='weight'>
                <Form.Label>Weight</Form.Label>
                <Form.Control type='text' placeholder='Weight' name='weight' />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group controlId='food'>
                <Form.Label>Food</Form.Label>
                <Form.Control type='text' placeholder='Food' name='food' />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group controlId='comment'>
                <Form.Label>Comment</Form.Label>
                <Form.Control type='text' placeholder='Comment' name='comment' />
              </Form.Group>
            </Row>
            <Button type='submit' variant="info" style={{ color: "white", fontWeight: '600', marginBottom: '50px' }}>SUBMIT</Button>
          </Form>

        </Col>
      </Row>
    </>
  );
}

export default AddPetForm;
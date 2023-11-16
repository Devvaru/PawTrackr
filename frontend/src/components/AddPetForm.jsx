import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

function AddPetForm() {
  const [ name, setName ] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target)
    console.log(formData.get('name'));
    console.log(formData.get('breed'));
  };



  return (
    <>
      <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" name="name" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="pet_img_url">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Image" name="pet_img_url" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="date_of_birth">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="text" placeholder="Date of Birth" name="date_of_birth" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="variant">
              <Form.Label>Species</Form.Label>
              <Form.Control type="text" placeholder="Species" name="variant" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="weight">
              <Form.Label>Species</Form.Label>
              <Form.Control type="text" placeholder="Weight" name="weight" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="food">
              <Form.Label>Food</Form.Label>
              <Form.Control type="text" placeholder="Food" name="food" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="comment">
              <Form.Label>Comment</Form.Label>
              <Form.Control type="text" placeholder="Comment" name="comment" />
            </Form.Group>
          </Row>
        <Button type="submit">Submit form</Button>
      </Form>
      {/* </Container> */}
    </>
  );
}

export default AddPetForm;
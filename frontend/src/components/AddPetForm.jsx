import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function AddPetForm() {
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

    console.log(newPet);
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
              <Form.Label>Image</Form.Label>
              <Form.Control type="text" placeholder="Image" name="pet_img_url" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="date_of_birth">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" placeholder="Date of Birth" name="date_of_birth" />
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
              <Form.Label>Weight</Form.Label>
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
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function AddPetForm() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  // // const [imageUrl, setImageUrl] = useState('');
  
  // const handleSubmit = () => {
  //   const newPet = {
  //     name: name,
  //     // image_url: imageUrl,
  //   }
  //   console.log(newPet);
  // };
  // console.log(name);

  const handleSubmit = (event) => {

    console.log(name);
    console.log(date);
  };

  return (
    <>
      <Container>
        <br/>
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Name
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Image
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Date of Birth
            </InputGroup.Text>
            <Form.Control type="date"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Species
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Weight
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Food
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Comment
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <br />
          <Button type="submit">Submit form</Button>
        </Form>
      </Container>
    </>
  );
}

export default AddPetForm;
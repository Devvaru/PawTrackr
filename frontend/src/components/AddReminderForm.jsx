import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function AddReminderForm(props) {
  const newReminder = {};

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    newReminder.title = formData.get('title');
    newReminder.date = formData.get('date');
    newReminder.comment = formData.get('comment');

    axios
      .post('http://localhost:8080/api/reminders', newReminder)
      .then((res) => {
        console.log({ res });
        props.onReminderAdded();
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row className='mb-3'>
          <Form.Group as={Col} md='6' controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' placeholder='Title' name='title' />
          </Form.Group>
        </Row>
        <Row className='mb-3'>
          <Form.Group as={Col} md='6' controlId='date'>
            <Form.Label>Date</Form.Label>
            <Form.Control type='date' placeholder='Date' name='date' />
          </Form.Group>
        </Row>
        <Row className='mb-3'>
          <Form.Group as={Col} md='6' controlId='comment'>
            <Form.Label>Comment</Form.Label>
            <Form.Control type='text' placeholder='Comment' name='comment' />
          </Form.Group>
        </Row>
        <Button type='submit'>Submit form</Button>
      </Form>
    </>
  );
}

export default AddReminderForm;

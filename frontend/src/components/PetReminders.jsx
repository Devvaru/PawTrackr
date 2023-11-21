import { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

function PetReminders(props) {
  const { pet } = props;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/reminders/${pet.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, [pet]);

  return (
    <>
      <ListGroup>
        <ListGroup.Item><strong>Upcoming Reminders:</strong></ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    </>
  );
}

export default PetReminders;
import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

function PetReminders(props) {
  const { pet } = props;
  const [petReminders, setPetReminders] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/reminders/${pet.id}`)
      .then((res) => {
        setPetReminders(res.data)
      })
      .catch((err) => {
        console.log({ err });
      });
  }, [pet]);

  const mapPetReminders = petReminders.map((petReminder) => {
    // Display Reminder Date in YYYY/MM/DD format
    const reminderDate = new Date(petReminder.date);
    const formattedReminderDate = `${reminderDate.getFullYear()}/${(
      reminderDate.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}/${reminderDate
        .getDate()
        .toString()
        .padStart(2, '0')} ${reminderDate
          .getHours()
          .toString()
          .padStart(2, '0')}:${reminderDate
            .getMinutes()
            .toString()
            .padStart(2, '0')}`;
    return <p key={petReminder.title}>{formattedReminderDate} - <strong>{petReminder.title}</strong> - {petReminder.comment} </p>
  })

  return (
    <>
      <ListGroup>
        <ListGroup.Item><strong>Upcoming Reminders:</strong></ListGroup.Item>
        <ListGroup.Item>{mapPetReminders}</ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default PetReminders;
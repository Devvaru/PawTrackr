import FormCheck from 'react-bootstrap/FormCheck';
import { useState } from 'react';
import axios from 'axios';

function UpcomingReminderItem(props) {
  const { upcomingReminder, loadReminders } = props;
  const [isDone, setIsDone] = useState(upcomingReminder.done);

  // Display Reminder Date in YYYY/MM/DD format
  const reminderDate = new Date(upcomingReminder.date);
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

  const handleEdit = (reminderId) => {
    setIsDone(!isDone);
    axios
      .put(`/api/reminders/${reminderId}`, {
        done: isDone,
      })
      .then(() => {
        loadReminders();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <td className='tableItem'>{upcomingReminder.pet_name}</td>
      <td className='tableItem'>{upcomingReminder.title}</td>
      <td className='tableItem'>{formattedReminderDate}</td>
      <td className='tableItem'>{upcomingReminder.comment}</td>
      <td className='tableItem'>
        <FormCheck className='doneCheckmark'
          aria-label='Mark Reminder as Done'
          checked={isDone}
          onChange={() => {
            handleEdit(upcomingReminder.id);
          }}
        />
      </td>
    </>
  );
}

export default UpcomingReminderItem;

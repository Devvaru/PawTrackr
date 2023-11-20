import Form from 'react-bootstrap/Form';

function ReminderItem(props) {
  const { reminder } = props;

  // Display Reminder Date in YYYY/MM/DD format
  const reminderDate = new Date(reminder.date);
  const formattedReminderDate = `${reminderDate.getFullYear()}/${(
    reminderDate.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}/${reminderDate.getDate().toString().padStart(2, '0')} ${reminderDate.getHours().toString().padStart(2, '0')}:${reminderDate.getMinutes().toString().padStart(2, '0')}`;


  return (
    <>
      <td>{reminder.title}</td>
      <td>{formattedReminderDate}</td>
      <td>{reminder.comment}</td>
      <td><Form.Check aria-label="option 1" /></td>
    </>
  );
}

export default ReminderItem;
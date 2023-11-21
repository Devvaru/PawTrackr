function CompletedReminderItem(props) {
  const { completedReminder } = props;

  // Display Reminder Date in YYYY/MM/DD format
  const reminderDate = new Date(completedReminder.date);
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


  return (
    <>
      <td>{completedReminder.name}</td>
      <td>{completedReminder.title}</td>
      <td>{formattedReminderDate}</td>
      <td>{completedReminder.comment}</td>
      <td>✔</td>
    </>
  );
}

export default CompletedReminderItem;

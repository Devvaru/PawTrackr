import Table from 'react-bootstrap/Table';
import UpcomingReminderItem from './UpcomingReminderItem';
import CompletedReminderItem from './CompletedReminderItem';
import ReminderAccordion from './ReminderAccordion';
import { useState, useEffect } from 'react';
import axios from 'axios';

function RemindersTable() {
  const [upcomingReminders, setUpcomingReminders] = useState([]);
  const [completedReminders, setCompletedReminders] = useState([]);

  const loadReminders = () => {
    const upcomingRemindersPath = 'http://localhost:8080/api/reminders/upcoming';
    const completedRemindersPath = 'http://localhost:8080/api/reminders/completed';

    axios.all([
      axios.get(upcomingRemindersPath),
      axios.get(completedRemindersPath)
    ])
      .then(axios.spread((response1, response2) => {
        console.log('Data from upcomingRemindersPath:', response1.data);
        console.log('Data from completedRemindersPath:', response2.data);
        setUpcomingReminders(response1.data)
        setCompletedReminders(response2.data)
      }))
      .catch(error => {
        console.error('Error fetching reminders:', error);
      });
  };

  useEffect(() => {
    loadReminders();
  }, []);

  return (
    <div>
      <ReminderAccordion
        onReminderAdded={() => {
          loadReminders();
        }}
      />
      <h2>Upcoming Reminders</h2>
      <Table responsive='sm'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Comment</th>
            <th>Done</th>
          </tr>
        </thead>
        {upcomingReminders.length !== 0 && (
          <tbody>
            {upcomingReminders.map((reminder) => (
              <tr key={reminder.id}>
                <UpcomingReminderItem upcomingReminder={reminder} loadReminders={loadReminders} />
              </tr>
            ))}
          </tbody>
        )}
        {upcomingReminders.length === 0 && (
          <tbody>
            <tr>
              <td colSpan={3}> No reminders </td>
            </tr>
          </tbody>
        )}
      </Table>
      <h2>Completed Reminders</h2>
      <Table responsive='sm'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Comment</th>
          </tr>
        </thead>
        {completedReminders.length !== 0 && (
          <tbody>
            {completedReminders.map((reminder) => (
              <tr key={reminder.id}>
                <CompletedReminderItem completedReminder={reminder} />
              </tr>
            ))}
          </tbody>
        )}
        {completedReminders.length === 0 && (
          <tbody>
            <tr>
              <td colSpan={3}> No reminders </td>
            </tr>
          </tbody>
        )}
      </Table>
    </div>
  );
}

export default RemindersTable;

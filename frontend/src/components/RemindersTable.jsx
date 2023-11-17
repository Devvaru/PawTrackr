import Table from 'react-bootstrap/Table';
import ReminderItem from './ReminderItem';
import ReminderAccordion from './ReminderAccordion';
import { useState, useEffect } from 'react';

function RemindersTable() {
  const [reminders, setReminders] = useState([]);

  const loadReminders = () => {
    fetch('http://localhost:8080/api/reminders')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setReminders(data);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
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
      <Table responsive='sm'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Comment</th>
          </tr>
        </thead>
        {reminders.length !== 0 && (
          <tbody>
            {reminders.map((reminder) => (
              <tr key={reminder.id}>
                <ReminderItem reminder={reminder} />
              </tr>
            ))}
          </tbody>
        )}
        {reminders.length === 0 && (
          <tbody>
            <tr>
              <td colSpan={3}> Loading </td>
            </tr>
          </tbody>
        )}
      </Table>
    </div>
  );
}

export default RemindersTable;

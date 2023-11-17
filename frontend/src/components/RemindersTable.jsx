import Table from 'react-bootstrap/Table';
import ReminderItem from './ReminderItem';
import ReminderAccordion from './ReminderAccordion';
import { useState, useEffect } from 'react';

function RemindersTable() {

  const [reminders, setReminders] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <div>
      <Table responsive="sm">
        <div>

          <ReminderAccordion />
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Comment</th>
            </tr>
          </thead>
          {reminders.length !== 0 && (
            <tbody>

              {
                reminders.map((reminder) => (
                  <tr>
                    <ReminderItem
                      key={reminder.id}
                      reminder={reminder}
                    />
                  </tr>
                ))
              }

            </tbody>


          )}
          {reminders.length === 0 && <div>Loading</div>}
        </div>


      </Table>
    </div>
  );
}

export default RemindersTable;
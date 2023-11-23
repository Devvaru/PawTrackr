import Table from 'react-bootstrap/Table';
import UpcomingReminderItem from './UpcomingReminderItem';
import CompletedReminderItem from './CompletedReminderItem';
import ReminderAccordion from './ReminderAccordion';
import { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import axios from 'axios';

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function RemindersTable() {
  const [upcomingReminders, setUpcomingReminders] = useState([]);
  const [completedReminders, setCompletedReminders] = useState([]);
  const [state, setState] = useState({
    data: [],
    limit: 10,
    activePage: 1
  });

  useEffect(() => {
    loadReminders();
    axios
      .get(
        `http://localhost:8080/api/reminders/upcoming?_page=1&_limit=${state.limit}`
      )
      .then((res) => {
        setState((prev) => ({
          ...prev,
          data: res.data
        }));
      })
      .catch((error) => console.log(error));
  }, [state.limit]);

  const handlePageChange = (pageNumber) => {
    setState((prev) => ({ ...prev, activePage: pageNumber }));

    axios
      .get(`http://localhost:8080/api/reminders/upcoming?_page=${pageNumber}`)
      .then((res) => {
        setState((prev) => ({
          ...prev,
          data: res.data
        }));
      })
      .catch((error) => console.log(error));
  };

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

  // useEffect(() => {
  //   loadReminders();
  // }, []);

  return (
    <div>
      <ReminderAccordion
        onReminderAdded={() => {
          loadReminders();
        }}
      />
      <h2 className='headers'>Upcoming Reminders</h2>
      {/* <ul className="list-group p-4">
        {state.data.map((item) => {
          return (
            <li key={item.id} className="list-group-item">
              <span className="font-weight-bold pr-2">{item.id}.</span>{" "}
              {item.title}
            </li>
          );
        })}
      </ul> */}
      <Pagination className="px-4">
        {state.data.map((_, index) => {
          return (
            <Pagination.Item
              onClick={() => handlePageChange(index + 1)}
              key={index + 1}
              active={index + 1 === state.activePage}
            >
              {index + 1}
            </Pagination.Item>
          );
        })}
      </Pagination>
      <Table responsive='sm'>
        <thead>
          <tr>
            <th>Pet Name</th>
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
      <h2 className='headers'>Completed Reminders</h2>
      <Table responsive='sm'>
        <thead>
          <tr>
            <th>Pet Name</th>
            <th>Title</th>
            <th>Date</th>
            <th>Comment</th>
            <th>Done</th>
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

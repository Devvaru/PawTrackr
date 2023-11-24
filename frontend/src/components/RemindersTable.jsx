import Table from 'react-bootstrap/Table';
import UpcomingReminderItem from './UpcomingReminderItem';
import CompletedReminderItem from './CompletedReminderItem';
import ReminderAccordion from './ReminderAccordion';
import { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import axios from 'axios';

function RemindersTable() {
  const [upcomingReminders, setUpcomingReminders] = useState([]);
  const [completedReminders, setCompletedReminders] = useState([]);
  const [upcomingCurrentPage, setUpcomingCurrentPage] = useState(1);
  const [upcomingShowedData, upcomingShowData] = useState([]);
  const [upcomingTotalPages, setUpcomingTotalPages] = useState();
  const [completedCurrentPage, setCompletedCurrentPage] = useState(1);
  const [completedShowedData, completedShowData] = useState([]);
  const [completedTotalPages, setCompletedTotalPages] = useState();

  // Define rowsPerPage as a constant since it does not change
  const rowsPerPage = 5;
  const upcomingPages = Array.from({ length: upcomingTotalPages }, (_, index) => index + 1);
  const completedPages = Array.from({ length: completedTotalPages }, (_, index) => index + 1);

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

  useEffect(() => {
    // The pagination logic here will run whenever contacts or currentPage changes
    const upcomingFirstIndex = (upcomingCurrentPage - 1) * rowsPerPage;
    const upcomingLastIndex = upcomingFirstIndex + rowsPerPage;
    upcomingShowData(upcomingReminders.slice(upcomingFirstIndex, upcomingLastIndex));
    setUpcomingTotalPages(Math.ceil(upcomingReminders.length / rowsPerPage));

  }, [upcomingReminders, upcomingCurrentPage, rowsPerPage]);

  useEffect(() => {
    // The pagination logic here will run whenever contacts or currentPage changes
    const completedFirstIndex = (completedCurrentPage - 1) * rowsPerPage;
    const completedLastIndex = completedFirstIndex + rowsPerPage;
    completedShowData(completedReminders.slice(completedFirstIndex, completedLastIndex));
    setCompletedTotalPages(Math.ceil(completedReminders.length / rowsPerPage));

  }, [completedReminders, completedCurrentPage, rowsPerPage]);

  const upcomingHandleClick = (page) => {
    setUpcomingCurrentPage(page);
    const pageIndex = page - 1;
    const firstIndex = pageIndex * rowsPerPage;
    const lastIndex = pageIndex * rowsPerPage + rowsPerPage;
    upcomingShowData(upcomingReminders.slice(firstIndex, lastIndex));
  };

  const completedHandleClick = (page) => {
    setCompletedCurrentPage(page);
    const pageIndex = page - 1;
    const firstIndex = pageIndex * rowsPerPage;
    const lastIndex = pageIndex * rowsPerPage + rowsPerPage;
    completedShowData(completedReminders.slice(firstIndex, lastIndex));
  };

  console.log('completedShowedData', completedShowedData)

  return (
    <div>
      <ReminderAccordion
        onReminderAdded={() => {
          loadReminders();
        }}
      />
      <h2 className='headers'>Upcoming Reminders</h2>
      <Pagination
        role='navigation'
        aria-label='Page Navigation'
        className='pagination'
      >
        {upcomingPages.map((page) => (
          <Pagination.Item
            key={page}
            active={page === upcomingCurrentPage}
            onClick={() => upcomingHandleClick(page)}
            aria-current={page === upcomingCurrentPage ? 'page' : null}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
      <Table responsive='sm' striped bordered>
        <thead>
          <tr>
            <th>Pet Name</th>
            <th>Title</th>
            <th>Date</th>
            <th>Comment</th>
            <th>Done</th>
          </tr>
        </thead>
        {upcomingShowedData.length !== 0 && (
          <tbody>
            {upcomingShowedData.map((reminder) => (
              <tr key={reminder.id}>
                <UpcomingReminderItem upcomingReminder={reminder} loadReminders={loadReminders} />
              </tr>
            ))}
          </tbody>
        )}
        {upcomingReminders.length === 0 && (
          <tbody>
            <tr>
              <td colSpan={5}> No Reminders </td>
            </tr>
          </tbody>
        )}
      </Table>
      <h2 className='headers'>Completed Reminders</h2>
      <Pagination
        role='navigation'
        aria-label='Page Navigation'
        className='pagination'
      >
        {completedPages.map((page) => (
          <Pagination.Item
            key={page}
            active={page === completedCurrentPage}
            onClick={() => completedHandleClick(page)}
            aria-current={page === completedCurrentPage ? 'page' : null}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
      <Table responsive='sm' striped bordered>
        <thead>
          <tr>
            <th>Pet Name</th>
            <th>Title</th>
            <th>Date</th>
            <th>Comment</th>
            <th>Done</th>
          </tr>
        </thead>
        {completedShowedData.length !== 0 && (
          <tbody>
            {completedShowedData.map((reminder) => (
              <tr key={reminder.id}>
                <CompletedReminderItem completedReminder={reminder} />
              </tr>
            ))}
          </tbody>
        )}
        {completedReminders.length === 0 && (
          <tbody>
            <tr>
              <td colSpan={5}> No Reminders </td>
            </tr>
          </tbody>
        )}
      </Table>
    </div>
  );
}

export default RemindersTable;

import Table from 'react-bootstrap/Table';
import ContactItem from './ContactItem';
import ContactAccordion from './ContactAccordion';
import { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';

function ContactsTable() {
  const [contacts, setContacts] = useState([]);

  const loadContacts = () => {
    fetch('http://localhost:8080/api/contacts')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setContacts(data);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const rows = contacts.length;
  const rowsPerPage = 2;
  // use lastPage later to map pagination items and arrows
  const lastPage = Math.ceil(rows / rowsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [showedData, showData] = useState(contacts.slice(0, rowsPerPage));
  // console.log({ data });
  // console.log({ showedData });
  const handleClick = (page) => {
    setCurrentPage(page);
    const pageIndex = page - 1;
    const firstIndex = pageIndex * rowsPerPage;
    const lastIndex = pageIndex * rowsPerPage + rowsPerPage;
    // console.log({ firstIndex });
    // console.log({ lastIndex });
    showData(contacts.slice(firstIndex, lastIndex));
  };

  return (
    <div>
      <ContactAccordion
        onContactAdded={() => {
          loadContacts();
        }}
      />
      <h2 class='headers'>Contacts</h2>
      <Table responsive='sm'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Website</th>
            <th>Delete</th>
          </tr>
        </thead>
        {contacts.length !== 0 && (
          <tbody>
            {showedData.map((contact, index) => (
              <tr key={index}>
                <ContactItem contact={contact} loadContacts={loadContacts} />
              </tr>
            ))}
          </tbody>
        )}
        {contacts.length === 0 && (
          <tbody>
            <tr>
              <td colSpan={3}> Loading </td>
            </tr>
          </tbody>
        )}
      </Table>
      <Pagination>
        <Pagination.Item
          active={1 === currentPage}
          onClick={() => handleClick(1)}
        >
          {1}
        </Pagination.Item>
        <Pagination.Item
          active={2 === currentPage}
          onClick={() => handleClick(2)}
        >
          {2}
        </Pagination.Item>
      </Pagination>
    </div>
  );
}

export default ContactsTable;

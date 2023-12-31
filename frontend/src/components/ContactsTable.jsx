import Table from 'react-bootstrap/Table';
import ContactItem from './ContactItem';
import ContactAccordion from './ContactAccordion';
import { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

function ContactsTable() {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showedData, showData] = useState([]);
  const [totalPages, setTotalPages] = useState();

  // Define rowsPerPage as a constant since it does not change
  const rowsPerPage = 5;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  useEffect(() => {
    loadContacts();
  }, []);

  useEffect(() => {
    // The pagination logic here will run whenever contacts or currentPage changes
    const firstIndex = (currentPage - 1) * rowsPerPage;
    const lastIndex = firstIndex + rowsPerPage;
    showData(contacts.slice(firstIndex, lastIndex));
    setTotalPages(Math.ceil(contacts.length / rowsPerPage));
  }, [contacts, currentPage, rowsPerPage]);

  const loadContacts = () => {
    axios.get('/api/contacts')
      .then((res) => {
        setContacts(res.data);
      })
      .catch((error) => {
        console.error('Error loading contacts:', error);
      });
  };

  const handleClick = (page) => {
    setCurrentPage(page);
    const pageIndex = page - 1;
    const firstIndex = pageIndex * rowsPerPage;
    const lastIndex = pageIndex * rowsPerPage + rowsPerPage;
    showData(contacts.slice(firstIndex, lastIndex));
  };

  return (
    <div>
      <ContactAccordion
        onContactAdded={() => {
          loadContacts();
        }}
      />
      <h2 className='headers'>Contacts</h2>
      <Pagination
        aria-label='Page Navigation'
        className='pagination'
      >
        {pages.map((page) => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => handleClick(page)}
            aria-current={page === currentPage ? 'page' : null}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
      <div className='contacts-container'>
        <Table responsive='sm' className='contacts-table' striped bordered>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Website</th>
              <th>Delete</th>
            </tr>
          </thead>
          {showedData.length !== 0 && (
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
                <td colSpan={5}><FontAwesomeIcon icon={faAddressBook} beatFade style={{color: "#0dcaf0",}} /> No Contacts </td>
              </tr>
            </tbody>
          )}
        </Table>
      </div>
    </div>
  );
}

export default ContactsTable;

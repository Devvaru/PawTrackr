import Table from 'react-bootstrap/Table';
import ContactItem from './ContactItem';
import ContactAccordion from './ContactAccordion';
import { useState, useEffect } from 'react';

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

  return (
    <div>
      <ContactAccordion
        onContactAdded={() => {
          loadContacts();
        }}
      />
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
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <ContactItem contact={contact} />
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
    </div>
  );
}

export default ContactsTable;

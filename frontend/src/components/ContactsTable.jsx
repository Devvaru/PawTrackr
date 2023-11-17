import Table from 'react-bootstrap/Table';
import ContactItem from './ContactItem';
import ContactAccordion from './ContactAccordion';
import { useState, useEffect } from 'react';

function ContactsTable() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <div>
      <Table responsive='sm'>
        <div>
          <ContactAccordion />
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Website</th>
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
          {contacts.length === 0 && <div>Loading</div>}
        </div>
      </Table>
    </div>
  );
}

export default ContactsTable;

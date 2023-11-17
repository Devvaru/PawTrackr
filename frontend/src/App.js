import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/_Navigationbar';
import PetsGrid from './components/PetsGrid';
import RemindersTable from './components/RemindersTable';
import ContactsTable from './components/ContactsTable';
import { useState } from 'react';

function App() {
  const [activePage, setActivePage] = useState('pets');

  return (
    <div className='App'>
      <Navigationbar
        setShowPets={() => {
          setActivePage('pets');
        }}
        setShowReminders={() => {
          setActivePage('reminders');
        }}
        setShowContacts={() => {
          setActivePage('contacts');
        }}
      />
      {activePage === 'pets' && <PetsGrid />}
      {activePage === 'reminders' && <RemindersTable />}
      {activePage === 'contacts' && <ContactsTable />}
    </div>
  );
}

export default App;

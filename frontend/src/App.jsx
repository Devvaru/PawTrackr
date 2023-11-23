import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/_Navigationbar';
import Footer from './components/_Footer';
import PetsGrid from './components/PetsGrid';
import RemindersTable from './components/RemindersTable';
import ContactsTable from './components/ContactsTable';
import Team from './components/Team';
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
      <Footer
        setShowTeam={() => {
          setActivePage('team');
        }}
      />
      {activePage === 'pets' && <PetsGrid />}
      {activePage === 'reminders' && <RemindersTable />}
      {activePage === 'contacts' && <ContactsTable />}
      {activePage === 'team' && <Team />}
    </div>
  );
}

export default App;

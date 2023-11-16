import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/_Navigationbar';
import PetsGrid from './components/PetsGrid';
import RemindersTable from './components/RemindersTable';
import ContactsTable from './components/ContactsTable';
import { useState } from 'react';

function App() {
  const [showPets, setShowPets] = useState(true);
  const [showReminders, setShowReminders] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  return (
    <div className='App'>
      <Navigationbar 
        showPets={showPets}
        setShowPets={setShowPets}
        showReminders={showReminders}
        setShowReminders={setShowReminders}
        showContacts={showContacts}
        setShowContacts={setShowContacts}
      />
      {showPets && <PetsGrid />}
      {showReminders && <RemindersTable />}
      {showContacts && <ContactsTable />}
    </div>
  );
}

export default App;
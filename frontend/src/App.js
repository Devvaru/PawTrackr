import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/_Nav';
import PetsGrid from './components/PetsGrid';
import RemindersTable from './components/RemindersTable';
import { useState } from 'react';

function App() {
  const [showPets, setShowPets] = useState(true);
  const [showReminders, setShowReminders] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  return (
    <div className='App'>
      <Nav 
        showPets={showPets}
        setShowPets={setShowPets}
        showReminders={showReminders}
        setShowReminders={setShowReminders}
        showContacts={showContacts}
        setShowContacts={setShowContacts}
      />
      {showPets && <PetsGrid />}
      {showReminders && <RemindersTable />}
      {/* {showContacts && <ContactsTable />} */}
    </div>
  );
}

export default App;
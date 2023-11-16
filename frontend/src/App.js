import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/_Nav';
import PetsGrid from './components/PetsGrid';
import RemindersTable from './components/RemindersTable';

function App() {
  return (
    <div className='App'>
      <Nav />
      <PetsGrid />
      <RemindersTable />
    </div>
  );
}

export default App;
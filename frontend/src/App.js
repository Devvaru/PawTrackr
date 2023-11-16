import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/_Nav';
import PetsGrid from './components/PetsGrid';
import AddPetForm from './components/AddPetForm';

function App() {
  return (
    <div className='App'>
      <Nav />
      <PetsGrid />
      <AddPetForm />
    </div>
  );
}

export default App;
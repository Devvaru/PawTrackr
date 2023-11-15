import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/_Nav';
import PetsGrid from './components/PetsGrid';

function App() {
  return (
    <div className='App'>
      <Nav />
      <PetsGrid />
    </div>
  );
}

export default App;
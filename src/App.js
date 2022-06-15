import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import portrait from '../images/Portrait.png'

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="Welcome-page">
        <img src={portrait}/>
      </header>
      <header className="Welcome-content">
      </header>
    </div>
  );
}

export default App;

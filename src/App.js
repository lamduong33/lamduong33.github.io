import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import portrait from './images/Portrait.png'

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="Home-page">
        <img className = "Portrait" src={portrait}/>
      </header>
      <header className="Home-content">
      </header>
    </div>
  );
}

export default App;

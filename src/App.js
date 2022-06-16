import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Portrait from "./images/Portrait.png";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="Home-page">
        <img className="Portrait" src={Portrait} alt="Lam Duong's portrait" />
        <header className="Home-content">
          Hi, my name is Lam! I'm
        </header>
      </header>
    </div>
  );
}

export default App;

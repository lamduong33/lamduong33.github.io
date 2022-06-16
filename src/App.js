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
          Hi, my name is Lam and I'm a full-stack developer. On my website, you
          can find some fun and interesting things I work on.
        </header>
      </header>
    </div>
  );
}

export default App;

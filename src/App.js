import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

const lam = 'Lam Duong';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="Welcome-page">
        <p>Welcome to {lam}'s homepage!</p>
      </header>
      <header className="Welcome-content">
        This is a pargaraph.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum."
      </header>
    </div>
  );
}

export default App;

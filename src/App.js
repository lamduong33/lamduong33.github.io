//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar"

const lam = "Lam Duong";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <p>
          Welcome to {lam}'s homepage!
        </p>
      </header>
    </div>
  );
}

export default App;

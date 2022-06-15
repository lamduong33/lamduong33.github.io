import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="Welcome-page">
        <p> This site is currently under construction. 👷 </p>
        <p> Please come back later for some fun development! </p>
      </header>
      <header className="Welcome-content">
      </header>
    </div>
  );
}

export default App;

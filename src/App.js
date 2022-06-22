import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Portrait from './images/Portrait.png';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="Home-page">
        <header className="Home-content">
          <img className="Portrait" src={Portrait} alt="Lam Duong's portrait" />
          <p></p>
          <p>
            My name is Lam Duong and this is my personal website. My interests
            include computer science, artificial intelligence, neuroscience, and
            aviation. I write and make videos about these topics from time to
            time.
          </p>
          <a href="https://github.com/lamduong33">
            <img className="SocialLinkLogo" src={'/GitHubLogo.png'} />
          </a>
          <a href="https://www.linkedin.com/in/lam-duong33/">
            <img className="SocialLinkLogo" src={'/LinkedInLogo.png'} />
          </a>
        </header>
      </header>
    </div>
  );
}

export default App;

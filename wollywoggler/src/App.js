import logo from './logo.svg';
import './App.css';
import Hero from './Hero';

// Default react app function
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//Simple page with buttons using components
function WogglerApp() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wolly Woggler</h1>
        <p>Wolly Woggler is a simple app to help you decide what to wear.</p>
        <p>Click the button below to get started.</p>
        <Button />
      </header>
    </div>
  );
}


export default Hero;

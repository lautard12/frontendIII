import logo from './logo.svg';
import './App.css';


function App() {
  let nombre = "jon"
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id='nombre'/>
        <h1>{nombre}</h1>
        <p>
          Editarrr <code>src/App.js</code> and save to reload.
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
    <div></div>
    </>
  );
}

export default App;

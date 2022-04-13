import logo from './logo.svg';
import './App.css';
import Prueba from './components/Prueba/Prueba';

function App() {

  let styles = {

    backgroundColor:"#fff"
  }

  let condicion = false;





  return (
    <div className="App">
      <Prueba/>
      <header style={{backgroundColor: condicion ? "red" : "black"}} className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
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

export default App;

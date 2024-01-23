import React from 'react';
import './index1.css';
import logo from './logo.svg';

function App() {
  const [count, ChangeCount] = React.useState(0);

  const ClickPlus = () => {
    ChangeCount(count + 1);
  };

  const ClickMinus = () => {
    ChangeCount(count - 1);
  };

  return  (
    <div className="App">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={ClickMinus} className="minus">- Минус</button>
        <button onClick={ClickPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;

/*
import logo from './logo.svg';
import './App.css';

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

export default App;
*/
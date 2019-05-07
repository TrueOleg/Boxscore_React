import React from 'react';
import Nba from './components/nba-component'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Choose league</h1>
        <div className="btnCont">
          <button className="navBtn">NBA</button>
          <button className="navBtn">MLB</button>
        </div>
        <Nba></Nba>
      </header>
    </div>
  );
}

export default App;

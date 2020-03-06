import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Check-div'>
          <input type="checkbox" />
          <label >REACT OK</label>
        </div>
        <div className='Check-div'>
          <input type="checkbox" />
          <label >Typescript OK</label>
        </div>
        <div className='Check-div'>
          <input type="checkbox" />
          <label >Nota tá OK</label>
        </div>
        <div className='Check-div'>
          <input type="checkbox" />
          <label >Marcio achou OK</label>
        </div>
        <div className='Check-div'>
          <input type="checkbox" />
          <label >É hj que eu passo na eletiva de uma vez...</label>
        </div>
      </header>
    </div>
  );
}

export default App;

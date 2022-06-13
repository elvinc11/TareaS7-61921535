import React from 'react';
import { Ciudades } from './components/Ciudades';
import './Styles.css';

function App() {
  return (
    <div className="App">
     <header></header>
      <div>
        <h1 className='title'>Clima</h1>
        <Ciudades/>
      </div>
    </div>
  );
}

export default App;

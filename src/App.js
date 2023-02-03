import './App.css';
import QuoteBox from './components/Quote-box';
import bulbasaur from './images/0001Bulbasaur.png';
import React from 'react';

function App() {

  return (
    <div className="App">
      <div className='image-cont'>
        <img src={bulbasaur}
        className='bulba-logo'
        alt='Bulbasaur'/>
      </div>
        <QuoteBox />
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import logo from './logo.svg';
import Home from './components/home/Home';
import Student from './student/Student';
import Game from './game/Game';
import Lotto from './components/lotto/Lotto';
function App() {
  return (
    <div className="App">
      <Lotto/>
    </div>
  );
}

export default App;

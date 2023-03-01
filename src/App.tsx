import React from 'react';
import './App.css';
import StartPage from './components/start-page/start-page';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <StartPage/>
    </div>
  );
}

export default App;

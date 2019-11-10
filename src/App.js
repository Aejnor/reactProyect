import React from 'react';
import Button from 'react-bootstrap/Button';
import logo from './logo.svg';
import API from './utils/API';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="success" onClick={dittoStats}>Ditto's Stats</Button>
      </header>
    </div>
  );
}


async function dittoStats(){
  let stats = await API.get('/', {
    params: {
      results:1
    }
  });
  stats = stats.data;
  console.log(stats)

};

export default App;

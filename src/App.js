import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
// import logo from './logo.svg';
import API from './utils/API';
// import axios from 'axios'
import './App.css';


function App() {
  const [data, setData] = useState([ ]);

    async function stats() {
      let response = await API.get('/', {
        params: {
          results: 1
        }
      });
      setData(response.data);
      console.log(data);
    }

    useEffect(() => {
      stats();
    }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="success"></Button>
      </header>
    </div>
  );
}

export default App;

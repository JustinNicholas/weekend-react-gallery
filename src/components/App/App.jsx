import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from '../Header/Header.jsx'
import Grid from '../Grid/Grid.jsx'

function App() {

  useEffect(() => {
    getPictures();
  }, [])

  const [pictures, setPictures] = useState([]);

  const getPictures = () => {
    axios({
      method: 'Get',
      url: '/gallery'
    }).then( response => {
      console.log(response.data);
      setPictures(response.data);
    }).catch( err => {
      console.log(err);
    })
  }
  console.log(pictures);
    return (
      <div className="App">
        <Header />
        <Grid pictures={pictures} />
      </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import Header from '../Header/Header.jsx'
import Grid from '../Grid/Grid.jsx'

function App() {

  const [pictures, setPictures] = useState('');

  const getPictures = () => {
    axios({
      method: 'Get',
      url: '/gallery'
    }).then( response => {
      setPictures(response.data);
    }).catch( err => {
      console.log(err);
    })
  }

    return (
      <div className="App">
        <Header />
        <Grid />
      </div>
    );
}

export default App;

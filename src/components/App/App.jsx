import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from '../Header/Header.jsx'
import GalleryList from '../GalleryList/GalleryList.jsx'

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

  const updateLikes = (id) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`
    }).then( response => {
      console.log(response);
      getPictures();
    }).catch( err => {
      console.log(err);
    })
  }

  const toggleImage = (id, showingImage) => {
    const updateStatus = !showingImage;
    
    axios({
      method: 'PUT',
      url: `/gallery/${id}`,
      data: {
        showingImage: updateStatus
      }
    }).then( response => {
      console.log(response);
      getPictures();
    }).catch( err => {
      console.log(err);
    })
  }

  console.log(pictures);
    return (
      <div className="App">
        <Header />
        <GalleryList pictures={pictures} updateLikes={updateLikes} toggleImage={toggleImage} />
      </div>
    );
}

export default App;

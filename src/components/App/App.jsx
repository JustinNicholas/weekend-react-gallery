import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from '../Header/Header.jsx'
import GalleryList from '../GalleryList/GalleryList.jsx'
import AddItem from '../AddItem/AddItem';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faThumbsUp, faXmark, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

library.add(faThumbsUp, faXmark, faCirclePlus)

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

  const addPicture = (url, des) => {
    console.log(url, des);
    axios({
      method: 'POST',
      url: '/gallery',
      data: {
        path: url,
        description: des
      }
    }).then( response => {
      getPictures();
    }).catch( err => {
      console.log(err);
    })
  }

  const updateLikes = (id, likes) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`,
      data: {
        likes: likes + 1
      }
    }).then( response => {
      console.log(response);
      getPictures();
    }).catch( err => {
      console.log(err);
    })
  }

  const deletePicture = (id) => {
    axios({
      method: 'DELETE',
      url: `/gallery/${id}`
    }).then( response => {
      getPictures();
    }).catch( err => {
      console.log(err);
    })
  }

  const toggleImage = (id, showingimage) => {
    const updateStatus = !showingimage;
    
    axios({
      method: 'PUT',
      url: `/gallery/${id}`,
      data: {
        showingimage: updateStatus
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
        <AddItem addPicture={addPicture} getPictures={getPictures} />
        <div className="container gx-5 overflow-hidden" >
          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 cardBox'>
            <GalleryList pictures={pictures} updateLikes={updateLikes} toggleImage={toggleImage} deletePicture={deletePicture}/>
          </div>
        </div>
        
      </div>
    );
}

export default App;

import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from '../Header/Header.jsx'
import GalleryList from '../GalleryList/GalleryList.jsx'
import AddItem from '../AddItem/AddItem';
// importing icons from FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThumbsUp, faXmark, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
//Makeing the icons globally available
library.add(faThumbsUp, faXmark, faCirclePlus)

function App() {
//This calls the getPictures function on page load
  useEffect(() => {
    getPictures();
  }, [])
// Sets the pictures from the database into an array for use on the DOM
  const [pictures, setPictures] = useState([]);
// Sends request to server for info we need and sets the pictures array to that info.
  const getPictures = () => {
    axios({
      method: 'Get',
      url: '/gallery'
    }).then( response => {
      // console.log(response.data);
      setPictures(response.data);
    }).catch( err => {
      console.log(err);
    })
  }
// Sends picture that user submits to the server to send to the database and calls getPictures
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
// Updates the number of likes by sending request to server to update in the database and calls get pictures to render updated like count.
  const updateLikes = (id, likes) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`,
      data: {
        likes: likes + 1
      }
    }).then( response => {
      // console.log(response);
      getPictures();
    }).catch( err => {
      console.log(err);
    })
  }
// Sends request to server to delete the picture with a matching id from the database 
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
// sends a PUT request to the server to update the status of showingimage in the database to opposite of what it is. Also calls GET route to update DOM.
  const toggleImage = (id, showingimage) => {
    const updateStatus = !showingimage;
    
    axios({
      method: 'PUT',
      url: `/gallery/${id}`,
      data: {
        showingimage: updateStatus
      }
    }).then( response => {
      // console.log(response);
      getPictures();
    }).catch( err => {
      console.log(err);
    })
  }

  // console.log(pictures);
// The below is rendered on the home page and links the necessary components. We also pass through props that are needed in these components
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

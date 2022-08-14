import './GalleryItem.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// this function is ran through as we .map in the GalleryList.jsx. We check to see if the image is showing to determine if we render the description or the image based on the showingimage boolean
function GalleryItem({key, id, description, path, likes, showingimage, updateLikes, toggleImage, deletePicture}) {
    if (showingimage === true){
        // console.log(path);
        return(
                    // we use bootstrap to specify each image is a column
                    <div className='col g-2' id={id} key={key}>
                        {/* this is an onClick function that calls the toggle image function that changes the status of showingimage in the server
                        this is good because it will not change back to the picture on a rerender */}
                        <div className="pictureBox" onClick={ () => toggleImage(id, showingimage)}>
                            <img src= {path}/>
                        </div>
                        {/* <p>This will return the number of likes along with a like and delete button that both have onClick functions. We use FontAwesome icons for buttons/p> */}
                        <div className='infoBox'>
                            <p className='numberLikes'><strong>{likes}</strong> people like this.</p> 
                            <button className='likeButton' onClick={ () => updateLikes(id, likes) }><FontAwesomeIcon icon="fa-solid fa-thumbs-up" /></button>
                            <button className='deleteButton' onClick={ () => deletePicture(id) }><FontAwesomeIcon icon="fa-solid fa-xmark" /></button>
                        </div>
                    </div>
    
        )
        } else {
        return(
            // this is the else that shows the description instead but everything else is the same as the if.
            <>
                    <div className='col g-2' id={id} key={key}>
                        <div className="pictureBox" onClick={ () => toggleImage(id, showingimage)}>
                            <p className='description'>{description}</p>
                        </div>
                        <div className='infoBox'>
                            <p className='numberLikes'><strong>{likes}</strong> people like this.</p> 
                            <button className='likeButton' onClick={ () => updateLikes(id, likes) }><FontAwesomeIcon icon="fa-solid fa-thumbs-up" /></button>
                            <button className='deleteButton' onClick={ () => deletePicture(id) }><FontAwesomeIcon icon="fa-solid fa-xmark" /></button>
                        </div>
                    </div>
            </>
    
        )
        }
}

export default GalleryItem;
import './GalleryItem.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function GalleryItem({key, id, description, path, likes, showingimage, updateLikes, toggleImage, deletePicture}) {
    if (showingimage === true){
        console.log(path);
        return(

                    <div className='col g-2' id={id} key={key}>
                        <div className="pictureBox" onClick={ () => toggleImage(id, showingimage)}>
                            <img src= {path}/>
                        </div>
                        <br />
                        {/* <p>This will return the pictures. we will need to toggle picture and description on click</p> */}
                        <div className='infoBox'>
                            <button onClick={ () => updateLikes(id, likes) }>Like <FontAwesomeIcon icon="fa-solid fa-thumbs-up" /></button>
                            <button onClick={ () => deletePicture(id) }>Delete <FontAwesomeIcon icon="fa-solid fa-xmark" /></button>
                            <p>{likes} of people who like this.</p> 
                        </div>
                    </div>
    
        )
        } else {
        return(
            <>
                    <div className='col g-2' id={id} key={key}>
                        <div className="pictureBox" onClick={ () => toggleImage(id, showingimage)}>
                            <p className='description'>{description}</p>
                        </div>
                        <br />
                        {/* <p>This will return the pictures. we will need to toggle picture and description on click</p> */}
                        <button onClick={ () => updateLikes(id, likes) }>Like</button>
                        <button onClick={ () => deletePicture(id) }>Delete</button>
                        {/* Will need to be conditional. */}
                        <p>{likes} of people who like this.</p> 
                    </div>
            </>
    
        )
        }
}

export default GalleryItem;
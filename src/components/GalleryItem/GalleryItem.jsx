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
                        {/* <p>This will return the pictures. we will need to toggle picture and description on click</p> */}
                        <div className='infoBox'>
                            <p className='numberLikes'>{likes} people like this.</p> 
                            <button className='likeButton' onClick={ () => updateLikes(id, likes) }><FontAwesomeIcon icon="fa-solid fa-thumbs-up" /></button>
                            <button className='deleteButton' onClick={ () => deletePicture(id) }><FontAwesomeIcon icon="fa-solid fa-xmark" /></button>
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
                        {/* <p>This will return the pictures. we will need to toggle picture and description on click</p> */}
                        <div className='infoBox'>
                            <p className='numberLikes'>{likes} people like this.</p> 
                            <button className='likeButton' onClick={ () => updateLikes(id, likes) }><FontAwesomeIcon icon="fa-solid fa-thumbs-up" /></button>
                            <button className='deleteButton' onClick={ () => deletePicture(id) }><FontAwesomeIcon icon="fa-solid fa-xmark" /></button>
                        </div>
                    </div>
            </>
    
        )
        }
}

export default GalleryItem;
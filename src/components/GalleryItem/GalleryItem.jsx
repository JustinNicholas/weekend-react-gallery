import './GalleryItem.css'

function GalleryItem({key, id, description, path, likes, showingImage, updateLikes, toggleImage}) {
    if (showingImage){
        return(
            <>
                    <div id={id} key={key}>
                        <div className="pictureBox" onClick={ () => toggleImage(id, showingImage)}>
                            <img src= {path}/>
                        </div>
                        <br />
                        {/* <p>This will return the pictures. we will need to toggle picture and description on click</p> */}
                        <button onClick={ () => updateLikes(id) }>Like</button>
                        {/* Will need to be conditional. */}
                        <p>{likes} of people who like this.</p> 
                    </div>
            </>
    
        )
    } else {
        return(
            <>
                    <div id={id} key={key}>
                        <div className="pictureBox" onClick={ () => toggleImage(id, showingImage)}>
                            <p>{description}</p>
                        </div>
                        <br />
                        {/* <p>This will return the pictures. we will need to toggle picture and description on click</p> */}
                        <button onClick={ () => updateLikes(id) }>Like</button>
                        {/* Will need to be conditional. */}
                        <p>{likes} of people who like this.</p> 
                    </div>
            </>
    
        )
    }

}

export default GalleryItem;
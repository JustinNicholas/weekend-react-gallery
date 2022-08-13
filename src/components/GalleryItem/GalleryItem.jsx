
function GalleryItem({key, id, description, path, likes, updateLikes}) {

    return(
        <>
                <div id={id} key={key}>
                    <p>{description}</p>
                    <img src= {path}/>
                    <br />
                    {/* <p>This will return the pictures. we will need to toggle picture and description on click</p> */}
                    <button onClick={ () => updateLikes(id) }>Like</button>
                    {/* Will need to be conditional. */}
                    <p>{likes} of people who like this.</p> 
                </div>
        </>

    )
}

export default GalleryItem;
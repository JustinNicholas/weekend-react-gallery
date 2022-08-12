import Picture from '../GalleryItem/GalleryItem.jsx'

function Grid({pictures}) {
    return(
        <>
        {pictures.map(picture => (
            <div key={picture.id}>
                {/* will have to .map to go through all of the data in the array. */}
                <Picture pictures={pictures} id={picture.id} description={picture.description} path={picture.path} likes={picture.likes}/>
            </div>
        ))}
        </>

    )
}

export default Grid;
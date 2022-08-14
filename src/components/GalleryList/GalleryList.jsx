import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import './GalleryList.css'

function GalleryList({pictures, updateLikes, toggleImage, deletePicture}) {
    // this loops through our pictures array and calls the gallery item component each time we loop throguh.
    return(
        <>
        {pictures.map(picture => (
            <div className='cardBody gy-2' key={picture.id}>
                {/* will have to .map to go through all of the data in the array. */}
                <GalleryItem pictures={pictures} id={picture.id} description={picture.description} path={picture.path} likes={picture.likes} showingimage={picture.showingimage} updateLikes={updateLikes} toggleImage={toggleImage} deletePicture={deletePicture} />
            </div>
        ))}
        </>

    )
}

export default GalleryList;
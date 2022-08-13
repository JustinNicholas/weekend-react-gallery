import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList({pictures, updateLikes, toggleImage}) {

    return(
        <>
        {pictures.map(picture => (
            <div key={picture.id}>
                {/* will have to .map to go through all of the data in the array. */}
                <GalleryItem pictures={pictures} id={picture.id} description={picture.description} path={picture.path} likes={picture.likes} showingImage={picture.showingImage} updateLikes={updateLikes} toggleImage={toggleImage} />
            </div>
        ))}
        </>

    )
}

export default GalleryList;
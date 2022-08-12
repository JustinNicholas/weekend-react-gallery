
function Picture({pictures}) {

    return(
        <>
                    {pictures.map(picture => (
                <div>
                    <p>Gallery goes here</p>
                    <img src= {picture.path}/>
                    <p>This will return the pictures. we will need to toggle picture and description on click</p>
                    <button>There will also be a like button</button>
                    <p># of people who like this. Will need to be conditional.</p>
                </div>
            
        ))}
        </>

    )
}

export default Picture;
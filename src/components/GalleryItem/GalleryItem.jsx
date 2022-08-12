
function Picture({key, id, description, path, likes}) {

    return(
        <>
                <div id={id} key={key}>
                    <p>{description}</p>
                    <img src= {path}/>
                    <br />
                    {/* <p>This will return the pictures. we will need to toggle picture and description on click</p> */}
                    <button>Like</button>
                    {/* Will need to be conditional. */}
                    <p>{likes} of people who like this.</p> 
                </div>
        </>

    )
}

export default Picture;
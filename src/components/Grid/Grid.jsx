import Picture from '../Picture/Picture.jsx'

function Grid({pictures}) {
    return(
        <div>
            {/* will have to .map to go through all of the data in the array. */}
            <Picture pictures={pictures} />
        </div>
    )
}

export default Grid;
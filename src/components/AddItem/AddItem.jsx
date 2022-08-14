import {useState} from 'react'
import './AddItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AddItem({addPicture, getPictures}) {
// we se constands that hold the url as a user enters the url and description.
    const [url, setUrl] = useState('');
    const [des, setDes] = useState('');

    //this calls the clear function that sets the inputs back to blank and the add picture function that takes in the url and description that was entered
    const handleSubmit = (event) => {
        const newUrl = url;
        const newDes = des;
        clearInputs();
        addPicture(newUrl, newDes);
    }
    // sets the inputs back to blank after submitting.
    const clearInputs = () => {
        setUrl('');
        setDes('');
    }

    // We track the url and description at each change event. upon clicking we run the handle submit
    return (
        <div className='inputBox' >
            <input className='urlIn' type="text" placeholder="Image URL" onChange={(event) => setUrl(event.target.value)} value={url} />
            <input className='desIn' type="text" placeholder="Description" onChange={(event) => setDes(event.target.value)} value={des} />
            <div className='addButton' onClick={(event) => handleSubmit(event)}><FontAwesomeIcon icon="fa-solid fa-circle-plus" /></div>
        </div>

    )
}

export default AddItem;
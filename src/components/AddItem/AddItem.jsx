import {useState} from 'react'
import './AddItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AddItem({addPicture, getPictures}) {

    const [url, setUrl] = useState('');
    const [des, setDes] = useState('');

    const handleSubmit = (event) => {
        const newUrl = url;
        const newDes = des;
        clearInputs();
        addPicture(newUrl, newDes);
    }

    const clearInputs = () => {
        setUrl('');
        setDes('');
    }

    return (
        <div className='inputBox' >
            <input className='urlIn' type="text" placeholder="Image URL" onChange={(event) => setUrl(event.target.value)} value={url} />
            <input className='desIn' type="text" placeholder="Description" onChange={(event) => setDes(event.target.value)} value={des} />
            <div className='addButton' onClick={(event) => handleSubmit(event)}><FontAwesomeIcon icon="fa-solid fa-circle-plus" /></div>
        </div>

    )
}

export default AddItem;
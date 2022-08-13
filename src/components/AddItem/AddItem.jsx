import {useState} from 'react'
import './AddItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AddItem({addPicture}) {

    const [url, setUrl] = useState('');
    const [des, setDes] = useState('');

    return (
        <div className='inputBox' >
            <input className='urlIn' type="text" placeholder="Image URL" onChange={(event) => setUrl(event.target.value)}/>
            <input className='desIn' type="text" placeholder="Description" onChange={(event) => setDes(event.target.value)} />
            <div className='addButton' onClick={() => addPicture(url, des)}><FontAwesomeIcon icon="fa-solid fa-circle-plus" /></div>
        </div>

    )
}

export default AddItem;
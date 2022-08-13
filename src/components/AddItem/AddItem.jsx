import {useState} from 'react'
import './AddItem.css'

function AddItem({addPicture}) {

    const [url, setUrl] = useState('');
    const [des, setDes] = useState('');

    return (
        <div className='inputBox' >
            <input className='urlIn' type="text" placeholder="Image URL" onChange={(event) => setUrl(event.target.value)}/>
            <input className='desIn' type="text" placeholder="Image Description" onChange={(event) => setDes(event.target.value)} />
            <button onClick={() => addPicture(url, des)}>Add Image</button>
        </div>

    )
}

export default AddItem;
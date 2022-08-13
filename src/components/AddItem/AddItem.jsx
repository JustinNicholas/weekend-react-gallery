import {useState} from 'react'

function AddItem({addPicture}) {

    const [url, setUrl] = useState('');
    const [des, setDes] = useState('');

    return (
        <div>
            <input type="text" placeholder="Image URL" onChange={(event) => setUrl(event.target.value)}/>
            <input type="text" placeholder="Image Description" onChange={(event) => setDes(event.target.value)} />
            <button onClick={() => addPicture(url, des)}>Add Image</button>
        </div>

    )
}

export default AddItem;
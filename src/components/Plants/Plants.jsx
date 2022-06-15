import React from 'react';
import {useState} from 'react'
import {useDispatch} from 'react-redux'

let plants = [
    "https://gardeningsolutions.ifas.ufl.edu/mastergardener/outreach/plant_id/images/flowers/bird_paradise_flower.jpg",
    "https://morningchores.com/wp-content/uploads/2018/12/Velvet-palm-600x400.jpg",
    "https://gardeningsolutions.ifas.ufl.edu/mastergardener/outreach/plant_id/images/flowers/birds_nest_fern.jpg",
    "https://live.staticflickr.com/7523/27521082745_fc94a05059_b.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/71/Kalanchoe_tomentosa_Panda_Plant_%28fabooj%29.jpg"
]

function Plants() {
    const dispatch = useDispatch();

    const [plant, setPlant] = useState('')

    const changePlant = (event) => {
        setPlant(event.target.value)
    }

    const addPlant = () => {
        dispatch({type: 'SEND_PLANT', payload: plant})
    }

    return (
        <div>
            <div>
                <input onChange={changePlant} type="text" placeholder="Plant Name"/><button onClick={addPlant}>Send</button>
            </div>
            <div className="pictures">
                {plants.map((plant, i) => 
                    <img 
                        key={i}
                        src={plant}
                    />
                )}
            </div>
        </div>
    );
}

export default Plants;

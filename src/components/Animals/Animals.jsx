import React from 'react';
import {useState} from 'react'
import {useDispatch} from 'react-redux'

let animals = [
    "https://cdn.pixabay.com/photo/2015/04/10/01/41/fox-715588__340.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/e/ec/Animal-that-start-with-a.jpg",
    "https://www.seismosoc.org/wp-content/uploads/2018/04/frog-edit.jpg",
    "https://cdn.stocksnap.io/img-thumbs/960w/otter-animal_TJDCHQADKM.jpg",
    "https://cdn.pixabay.com/photo/2015/09/22/14/34/african-lion-951778__340.jpg"
]

function Animals() {
    const dispatch = useDispatch();

    const [animal, setAnimal] = useState('')

    const changeAnimal = (event) => {
        setAnimal(event.target.value)
    }

    const addAnimal = () => {
        dispatch({type: 'SEND_ANIMAL', payload: animal})
    }

    return (
        <div>
            <div>
                <input onChange={changeAnimal} type="text" placeholder="Animal Name"/><button onClick={addAnimal}>Send</button>
            </div>
            <div className="pictures">
                {animals.map((animal, i) => 
                    <img 
                        key={i}
                        src={animal}
                    />
                )}
            </div>
        </div>
        
    );
}

export default Animals;
